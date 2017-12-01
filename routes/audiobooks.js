var express = require('express');
var router = express.Router();
var mysql = require("../mysql");

router.get('/', function(req, res, next) {
    mysql.allBooks(res);
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    if (req.body.reviews) {
        var isbn = encodeURIComponent(req.body.isbn);
        res.redirect("/CS3101/reviews?isbn=" + isbn);
    }
    if (req.body.purchase) {
        var isbn = encodeURIComponent(req.body.isbn);
        res.redirect("/CS3101/purchases?isbn=" + isbn);
    }
});
  
module.exports = router;