var express = require('express');
var router = express.Router();
var mysql = require("../mysql");

router.get('/', function(req, res, next) {
    mysql.bookReviews(res, req.query.isbn);
});

module.exports = router;