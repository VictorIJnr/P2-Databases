var express = require('express');
var router = express.Router();
var mysql = require('../mysql');

router.get('/', function(req, res, next) {
    mysql.popularBooks(res);
});

router.post('/', function(req, res, next) {
    if (req.body.reviews) {
        var isbn = encodeURIComponent(req.body.isbn);
        res.redirect("/reviews?isbn=" + isbn);
    }
    if (req.body.purchase) {
        var isbn = encodeURIComponent(req.body.isbn);
        res.redirect("/purchases?isbn=" + isbn);
    }
});

module.exports = router;