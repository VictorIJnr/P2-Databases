var express = require('express');
var router = express.Router();
var mysql = require("../mysql");

router.get('/', function(req, res, next) {
    res.render('authors', {title : 'Authors'});
});

router.post('/', function(req, res, next) {
    if (req.body.author) mysql.authorBooks(res, req.body.author);    
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