var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql')

// // 데이터베이스 기본 정보 세팅하기
// var conn = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password :'didi08xhdntows@',
//     database : 'homashoma_db'
// });

// // 데이터베이스에 연결
// conn.connect();

// get요청시 판매자 회원가입 페이지 로딩
router.get('/joinseller', function(req, res,next) {
    res.render('./contents/joinseller');
});

// get요청시 구매자 회원가입 페이지 로딩
router.get('/joinbuyer', function(req, res,next) {
    res.render('./contents/joinbuyer');
});

// post요청 즉 회원가입시 페이지 로딩
// req값 받아와서 변수에 저장하기
// database에 넣기
router.post('/joinseller', function(req, res,next) {
    // 데이터베이스 기본 정보 세팅하기
    var conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password :'didi08xhdntows@',
        database : 'homashoma_db'
    });

    // 데이터베이스에 연결
    conn.connect();

    res.render('./contents/joinseller');
    var body = req.body;
    var role = body.role;
    var id = body.id;
    var password = body.password;
    var name = body.name;
    var address = body.fulladdress;
    var phonenum = body.phonenum;
    var email = body.email;

    conn.query('INSERT INTO seller(id, password, name, phone_num, email, address) VALUES(?, ?, ?, ?, ?, ?)', [id, password, name, phonenum, email, address]);
    
    conn.end();
    // console.log(role, id, password, name, address, phonenum, email)
});

router.post('/joinbuyer', function(req, res,next) {
    // 데이터베이스 기본 정보 세팅하기
    var conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password :'didi08xhdntows@',
        database : 'homashoma_db'
    });

    // 데이터베이스에 연결
    conn.connect();

    res.render('./contents/joinbuyer');
    var body = req.body;
    var role = body.role;
    var id = body.id;
    var password = body.password;
    var name = body.name;
    var address = body.fulladdress;
    var phonenum = body.phonenum;
    var email = body.email;

    conn.query('INSERT INTO buyer(id, password, name, phone_num, email, address) VALUES(?, ?, ?, ?, ?, ?)', [id, password, name, phonenum, email, address]);
    
    conn.end();
    // console.log(role, id, password, name, address, phonenum, email)
});

router.post('/idcheck', function(req, res, next) {
    // 데이터베이스 기본 정보 세팅하기
    var conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password :'didi08xhdntows@',
        database : 'homashoma_db'
    });

    // 데이터베이스에 연결
    conn.connect();

    var data = req.body;
    var role = data['role'];
    var id = data['id'];
    // console.log(id['data']);

    if(role=='Seller') {
        conn.query('SELECT * from seller where id=?', [id], function(error, results, fleid){
            if (error) throw error;
            res.send({'result':results});
            console.log(results);
        });
    }
    else if(role=='Buyer') {
        conn.query('SELECT * from buyer where id=?', [id], function(error, results, fleid){
            if (error) throw error;
            res.send({'result':results});
            console.log(results);
        });
    }
    

    // res.send({'result':flag});
});

module.exports = router;