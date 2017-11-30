var express = require('express');
var router = express.Router();
var mysql = require('../mysql');

router.get('/', function(req, res, next) {
    mysql.popularBooks(res);
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    if (req.body.reviews) {
        mysql.bookReviews(res, req.body.review);
        res.redirect('/CS3101');
    }
    if (req.body.purchase) {
        res.redirect('/purchases');
        mysql.buyBook(res, req.body.review);
    }
});

module.exports = router;