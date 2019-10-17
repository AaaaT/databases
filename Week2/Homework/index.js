const mysql = require('mysql');

const connection = mysql.createConnection({
 host: 'localhost',
 user: 'hyfuser',
 password: 'hyfpassword',
 database: 'new_world',
});

connection.connect(function(err) {
 if (err) throw err;
 console.log('Connected!');
});

//Select from country table where capital is Stockholm

connection.execute('select * from `country` where `capital`= ?', ['Stockholm'], (err, results, fields) => {
 console.log(results);
 // console.log(fields);
 connection.unprepare('select * from `country` where `capital`= ?');
});

// connection.execute(
//  'select count(name) from `city`,`countrylanguage` where `countrycode`= `countrylanguage.countrycode` and `countrylanguage.language`=?',
//  ['swedish'],
//  (err, results, fields) => {
//    console.log(results);
//    console.log(err);
//    connection.unprepare(
//      'select count(name) from `city a`,`countrylanguage b` where `a.countrycode`= `b.countrycode` and `b.language`=?',
//    );
//    connection.close();
//  },
// );
