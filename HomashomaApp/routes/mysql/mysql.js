var mysql = require('mysql');
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'didi08xhdntows@',
    database : 'homashoma_db'
})

conn.connect();

conn.query('select * from seller', function(err, results, fields){
    if(err) {
        console.log(err);
    }
    console.log(results);
});

conn.end();