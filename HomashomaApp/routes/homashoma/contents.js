var express = require('express')
var router = express.Router()
var join = require('../mysql/join.js')

router.get('/', function(req, res, next) {
    res.render('./contents/main');
})

router.get('/selectjoin', function(req, res,next) {
    res.render('./contents/selectjoin');
})

router.use('/selectjoin', join)

module.exports = router;