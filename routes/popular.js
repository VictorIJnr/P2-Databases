var express = require('express');
var router = express.Router();
var mysql = require('../mysql');

router.get('/', function(req, res, next) {
    mysql.popularBooks(res);
});

router.post('/', function(req, res, next) {
    if (req.body.reviews) mysql.bookReviews(res, req.body.isbn);
    if (req.body.purchase) {
        var isbn = encodeURIComponent(req.body.isbn);
        res.redirect("/CS3101/purchases?isbn=" + isbn);
    }
});

module.exports = router;