const express = require('express');

const router = express.Router();

const USERS = [];

router.get('/users', (req, res, next) => {
  res.render('users', { users: USERS });
});

router.post('/users', (req, res, next) => {
  const user = req.body.user;
  USERS.push(user);
  res.status(302).redirect('/users');
});

router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;


