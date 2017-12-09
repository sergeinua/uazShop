var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../public/ang/dist/index.html'));
});

router.get('/:categoryId', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../public/ang/dist/index.html'));
});

module.exports = router;
