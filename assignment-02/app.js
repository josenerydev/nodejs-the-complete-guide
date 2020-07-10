const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('Always runs!');
//   next();
// });

// app.use('/users', (req, res, next) => {
//   console.log('/users');
//   res.send('<h1>Users list</h1>');
// });

// app.use('/', (req, res, next) => {
//   console.log('/');
//   res.send('<h1>Default route');
// });

app.use('/users', (req, res, next) => {
  console.log('/users middleware');
  res.send('<p>The Middleware that hndles just /users</p>');
});

app.use('/', (req, res, next) => {
  console.log('/ middleware');
  res.send('<p>The Middleware that handles just /</p>')
});

app.listen(5000);