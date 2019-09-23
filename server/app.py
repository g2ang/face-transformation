from flask import Flask, escape, request
import encode
import gcp_storage

app = Flask(__name__)

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
      smile_images = encode.convert_style(encode.smile_direction, encode.woman_latent_vector, smile_coeff)
      gender_images = encode.convert_style(encode.smile_direction, encode.woman_latent_vector, gender_coeff)

      try:
          smile_image_names = gcp_storage.upload_files(smile_images)
          gender_image_names = gcp_storage.upload_files(gender_images)

          return { 'gender': gender_image_names, 'smile': smile_image_names }, 201
      except Exception as ex:
          print(ex)
          return 'fail', 500
  else:
    return '404 Not Found'

if __name__ == "__main__":              
    app.run(host="0.0.0.0", port="8080")