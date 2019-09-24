from flask import Flask, escape, request
import encode
import gcp_storage
from flask_cors import CORS
import os_util_wrapper

app = Flask(__name__)
cors = CORS(app, resources={
  r"/*": {"origin": "*"},
})

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

def allowed_file(filename):
  return '.' in filename and \
    filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# 1. api/image (이미지 생성)
#   - Method: Post
#   - Request: form-data, File
#   - Response: id (image id)
# 
# 2. api/images (생성된 이미지 가져오기)
#   - Method: Get
#   - Request: id (image id)
#   - Response: {
#     gender: [
#       image endpoints
#     ],
#     smile: [
#       image endpoints
#     ],
#     both: [
#       image endpoints
#     ]
#   }

smile_coeff = [-2, -1, 0, 1, 2]
gender_coeff = [-5, -3, 0, 3, 5]

@app.route('/images', methods = ['POST'])
def smile():
  if request.method == 'POST':
    if 'image' not in request.files:
      return 'No file part', 400
    file = request.files['image']
    if file.filename == '':
      return 'No selected file', 400
    if file and allowed_file(file.filename):
      os_util_wrapper.clear_temp_folder()
      os_util_wrapper.save_temp_img(file)
      encode.generate_latent_vector()

      latent_vector = encode.load_generated_latent_vector()

      smile_images = encode.convert_style(latent_vector, encode.smile_direction, smile_coeff)
      gender_images = encode.convert_style(latent_vector, encode.gender_direction, gender_coeff)

      smile_image_names = gcp_storage.upload_files(smile_images)
      gender_image_names = gcp_storage.upload_files(gender_images)
      os_util_wrapper.clear_temp_folder()

      return { 'gender': gender_image_names, 'smile': smile_image_names }, 201
  else:
    return '404 Not Found'

if __name__ == "__main__":              
    app.run(host="0.0.0.0", port="8080")