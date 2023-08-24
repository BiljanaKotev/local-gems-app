const express = require('express');
const router = express.Router();

router.get('/signup-body', (req, res, next) => {
  console.log('Signup route hit');

  res.render('auth/signup', { bodyClass: 'signup' });
});

module.exports = router;
