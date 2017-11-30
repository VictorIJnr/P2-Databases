var express = require('express');
var router = express.Router();
var mysql = require('../mysql');

router.get("/", function(req, res, next) {
    console.log(req.query.isbn);
    // mysql.buyBook(res, req.body.isbn);
    res.render('purchases');
});

module.exports = router;