var express = require('express')
var router = express.Router()
var join = require('./join.js')
var mysql = require('mysql')

router.get('/', function(req, res, next) {
    res.render('./contents/main');
})

router.get('/selectjoin', function(req, res,next) {
    res.render('./contents/selectjoin');
})

router.get('/login', function(req, res, next) {
    res.render('./contents/login');
})

router.post('/login', function(req, res, next) {
    // 데이터베이스 기본 정보 세팅하기
    var conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password :'didi08xhdntows@',
        database : 'homashoma_db'
    });

    // 데이터베이스에 연결
    conn.connect();

    var id = req.body.id;
    var password = req.body.password;

    conn.query('SELECT * FROM ')
})

router.use('/selectjoin', join);

module.exports = router;