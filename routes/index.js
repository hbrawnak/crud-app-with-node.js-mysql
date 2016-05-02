var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeapp'
});

connection.connect();

/* GET home page. */
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM insert_data', function (err, rows) {
        res.render('index', {items: rows});
    });
});

/*router.get('/get-data', function(req, res, next) {
 connection.query('SELECT * FROM insert_data', function(err, rows){
 res.render('index', {items: rows});
 });
 });*/

router.post('/insert', function (req, res, next) {

    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    var query = connection.query('INSERT INTO insert_data SET ?', item, function (err, result) {

    });
    res.redirect('/');

});

router.post('/update', function (req, res, next) {
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    var id = req.body.id;

    var query = connection.query('UPDATE insert_data SET ? WHERE id = ? ', [item,id], function (err, rows) {

    });
    res.redirect('/');

});

router.post('/delete', function (req, res, next) {

    var id = req.body.id;
    var query = connection.query('DELETE FROM insert_data WHERE id= ?', id, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/');
    });
});

module.exports = router;