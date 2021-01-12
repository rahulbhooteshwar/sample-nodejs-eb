var express = require('express');
var router = express.Router();
require('dotenv').config()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: process.env.SAMPLE_ENV });
});

module.exports = router;
