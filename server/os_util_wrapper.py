import os 
import shutil

current_path = os.getcwd()

def remove_file_relative_path(file_name):
    os.remove(f'{current_path}/{file_name}')

def remove_file_absolute_path(path):
    os.remove(path)

def remove_all_file_at_directory(directory):
    folder = f"{current_path}/{directory}"

    for the_file in os.listdir(folder):
      file_path = os.path.join(folder, the_file)
      try:
          if os.path.isfile(file_path):
              os.unlink(file_path)
      except Exception as e:
          print(e)

def save_temp_img(img):
    img.save(f"{current_path}/raw_temp_img", img.name)
    return f"{current_path}/raw_temp_img/{name}"