from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/test', methods=['POST'])
def test_post():
    title_receive = request.form['title_give']
    print(title_receive)
    return jsonify({'result':'success', 'msg': 'this is Post'})

# @app.route('/upload', methods=['POST'])
# def upload():
#     if request.method == 'POST':
#         file = request.files['file']
#         img_bytes = file.read()
#         class_id, class_name = get_prediction(image_bytes=img_bytes)

    # return 'This is the very first page by myself'

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)