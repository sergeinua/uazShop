let express = require('express');
let router = express.Router();
let path = require('path');
let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('models/db.db');

router.get('/api/category', (req, res, err) => {
    db.all('select * from category', (err, row) => {
        res.status(200).send(JSON.stringify(row));
    });
});

router.get('/api/category/:categoryId', (req, res, err) => {
    db.get('select * from category where id=' + req.params.categoryId, (err, row) => {
        res.status(200).send(JSON.stringify(row));
    });
});

router.get('/api/category/:categoryId/products', (req, res, err) => {
    db.all('select * from product where categoryId=' + req.params.categoryId, (err, row) => {
        res.status(200).send(JSON.stringify(row));
    });
});

router.get('/api/product/:productId', (req, res, err) => {
    db.get('select * from product where id=' + req.params.productId, (err, row) => {
        res.status(200).send(JSON.stringify(row));
    });
});

router.get('/**', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/../public/ang/dist/index.html'));
});

module.exports = router;
