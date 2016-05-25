'use strict';

const express = require('express');
const posts = require('./mock/posts.json');

let app = express();

//static server
app.use('/static', express.static(__dirname + '/public'))

//sets Pug as template engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

//routes
app.get('/', (req, res) => {
  const path = req.path;
  res.render('index', {path: path});
});

app.get('/blog/:id?', (req, res) => {
  const id = req.params.id;
  if (id === undefined) {
    res.render('blog', {posts: posts});
  } else {
    const post = posts[id] || {};
    res.render('post', {post: post});
  }
});

//listener
app.listen(3000, () => {
  console.log('The frontend server is running on port 3000');
});
