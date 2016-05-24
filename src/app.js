'use strict';

const express = require('express');
const posts = require('./mock/posts.json');

let app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

//routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/blog/:id?', (req, res) => {
  const id = req.params.id;
  if (id === undefined) {
    res.send(posts);
  } else {
    const post = posts[id];
    res.send(post);
  }
});

//listener
app.listen(3000, () => {
  console.log('The frontend server is running on port 3000');
});
