from google.cloud import storage
import tempfile
from PIL import Image

storage_client = storage.Client()
bucket_name = 'stylegan_images'
bucket = storage_client.create_bucket(bucket_name)
blob = bucket.blob(destination_folder_name)

image_base_end_point = 'https://storage.googleapis.com/stylegan_images/'

def create_folder(destination_folder_name):
    blob.upload_from_string('')
    print('Created {} .'.format(destination_folder_name))

def upload_files(files_dictionary):
    image_dictionary = {}

    for key, value in files:
        temp_file = tempfile.NamedTemporaryFile()
        temp_file.write(value)
        image.save(temp_file, value.format)
        blob.upload_from_filename(temp_file)
        image[key] = f'{image_base_end_point}temp_file.name{value.format}'
        print('File {} uploaded to {}.'.format(
            source_file_name,
            destination_blob_name))

    return image_dictionary
