var express = require('express');
var router = express.Router();
var mysql = require('../mysql');

router.get('/', function(req, res, next) {
    mysql.popularBooks(res);
});

router.post('reviews', function(req, res, next) {

});

module.exports = router;