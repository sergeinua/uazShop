var express = require('express');
var router = express.Router();
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('models/db.db');

router.get('/api/category/home', function (req, res, err) {
    db.all('select * from category', function(err, row){
        res.status(200).send(JSON.stringify(row));
    });
});

router.get('/api/product/:productId', function (req, res, err) {
    db.get('select * from product where id=' + req.params.productId, function(err, row){
        res.status(200).send(JSON.stringify(row));
    });
});

router.get('/**', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../public/ang/dist/index.html'));
});

module.exports = router;
