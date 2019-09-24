import os 
import shutil

parent_path = os.path.abspath(os.pardir)
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
    img.save(f"{current_path}/raw_temp_img/{img.filename}")
    return f"{current_path}/raw_temp_img/{img.filename}"

def clear_temp_folder():
    remove_all_file_at_directory("raw_temp_img")
    remove_all_file_at_directory("aligned_temp_img")    
    remove_all_file_at_directory("generated_temp_img")
    remove_all_file_at_directory("temp_latent_representations")
    remove_all_file_at_directory("temp_done_img")
