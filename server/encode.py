import os
from os.path import join
import subprocess
import os_util_wrapper
import pickle
from PIL import Image
import numpy as np
import sys
sys.path.append("../encoder")
import dnnlib
import dnnlib.tflib as tflib
import config
from encoder.generator_model import Generator

URL_FFHQ = 'https://drive.google.com/uc?id=1MEGjdvVpUsu1jB4zrXZN7Y4kBBOzizDQ'
PROJ_PATH = '../encoder'

tflib.init_tf()
with dnnlib.util.open_url(URL_FFHQ, cache_dir=config.cache_dir) as f:
    generator_network, discriminator_network, Gs_network = pickle.load(f)

generator = Generator(Gs_network, batch_size=1, randomize_noise=False)

def generate_image(latent_vector):
    latent_vector = latent_vector.reshape((1, 18, 512))
    generator.set_dlatents(latent_vector)
    img_array = generator.generate_images()[0]
    img = Image.fromarray(img_array, 'RGB')
    return img.resize((256, 256))

def convert_style(latent_vector, direction, coeffs):
    generated_images = {}

    for i, coeff in enumerate(coeffs):
        new_latent_vector = latent_vector.copy()
        new_latent_vector[:8] = (latent_vector + coeff*direction)[:8]
        generated_images[coeff] = generate_image(new_latent_vector)

    return generated_images

def generate_latent_vector():
    align_image_script_path = f"{os_util_wrapper.parent_path}/encoder/align_images.py"
    raw_temp_img_path = f"{os_util_wrapper.parent_path}/server/raw_temp_img"
    aligned_temp_img_path = f"{os_util_wrapper.parent_path}/server/aligned_temp_img"
    
    subprocess.call(
      [
        "python", align_image_script_path, raw_temp_img_path, aligned_temp_img_path
      ]
    )

    encode_images_script_path = f"{os_util_wrapper.parent_path}/encoder/encode_images.py"
    generated_temp_img_path = f"{os_util_wrapper.parent_path}/server/generated_temp_img"
    temp_latent_representations_path = f"{os_util_wrapper.parent_path}/server/temp_latent_representations"
    
    subprocess.call(
        [
          "python", encode_images_script_path, aligned_temp_img_path, generated_temp_img_path, temp_latent_representations_path
        ]
    )

def load_generated_latent_vector():
    for file in os.listdir(f"{os_util_wrapper.parent_path}/server/temp_latent_representations"):
        if file.endswith(".npy"):
            return np.load(f"{os_util_wrapper.parent_path}/server/temp_latent_representations/{file}")

smile_direction = np.load(join(PROJ_PATH, 'ffhq_dataset/latent_directions/smile.npy'))
gender_direction = np.load(join(PROJ_PATH, 'ffhq_dataset/latent_directions/gender.npy'))
age_direction = np.load(join(PROJ_PATH, 'ffhq_dataset/latent_directions/age.npy'))