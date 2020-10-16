var express = require('express');
var router = express.Router();
var path = require('path')
var contents = require('./homashoma/contents.js')

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
});

router.use('/main', contents)

module.exports = router;
