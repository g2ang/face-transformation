from google.cloud import storage
import tempfile
from PIL import Image
import io
import datetime
import os_util_wrapper
storage_client = storage.Client()
bucket_name = 'stylegan'
bucket = storage_client.get_bucket(bucket_name)
image_base_end_point = 'https://storage.googleapis.com/stylegan/images/'

def create_folder(destination_folder_name):
    blob.upload_from_string('')
    print('Created {} .'.format(destination_folder_name))

def upload_files(files_dictionary):
    image_dictionary = {}
    date = datetime.datetime.now()
    dt_name = date.strftime("%Y-%m-%d-%H-%M-%S")
    for key, value in files_dictionary.items():
        file_name = f"{dt_name}({key}).png"
        file_path = f"temp_done_img/{file_name}"
        value.save(file_path)
        blob = bucket.blob(f"images/{file_name}")
        blob.upload_from_filename(file_path)
        image_dictionary[key] = f'{image_base_end_point}{file_name}'

    return image_dictionary