module.exports = {
    get_index : function(req, res) {
        connection.query('SELECT * FROM insert_data', function (err, rows) {
            res.render('index', {items: rows});
        });
    }
};