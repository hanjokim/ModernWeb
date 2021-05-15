var mysql = require('mysql');

var client = mysql.createConnection({
    user: 'hanjokim',
    password: '89404009',
    datebase: 'Company'
});

client.query('USE Company');
client.query('SELECT * FROM products', function (error, result, fields) {
   if (error) {
       console.log('쿼리 문장에 오류가 있습니다.');
   } else {
       console.log(result);
   }
});