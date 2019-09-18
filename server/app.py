from flask import Flask, escape, request
import encode

app = Flask(__name__)

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

def allowed_file(filename):
  return '.' in filename and \
    filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def hello():
  return 'Hello World'

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

@app.route('/smile', methods = ['POST'])
def smile():
  if request.method == 'POST':
    if 'image' not in request.files:
      return 'No file part', 400
    file = request.files['image']
    if file.filename == '':
      return 'No selected file', 400
    if file and allowed_file(file.filename):

      filename = file.filename
      print(filename)
      return 'success', 201
  else:
    return '404 Not Found'

if __name__ == "__main__":              
    app.run(host="127.0.0.1", port="8080")