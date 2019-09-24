from google.cloud import storage
import tempfile
from PIL import Image
import io
import os
import datetime
current_path = os.getcwd()
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
        file_name = f"{dt_name}({key}).jpeg"
        value.save(file_name)
        blob = bucket.blob(file_name)
        blob.upload_from_filename(file_name)
        image_dictionary[key] = f'{image_base_end_point}{file_name}'
        os.remove(f'{current_path}/{file_name}')

    return image_dictionary