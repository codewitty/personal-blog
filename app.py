from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    content = db.Column(db.Text, nullable=False)

@app.route('/posts', methods=['POST', 'GET'])
def handle_posts():
    if request.method == 'POST':
        title = request.json.get('title')
        content = request.json.get('content')
        post = Post(title=title, content=content)
        db.session.add(post)
        db.session.commit()
        return {'id': post.id}
    posts = Post.query.all()
    return {'posts': [{ 'id': post.id, 'title': post.title, 'content': post.content } for post in posts]}

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)