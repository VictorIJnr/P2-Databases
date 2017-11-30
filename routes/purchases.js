var express = require('express');
var router = express.Router();
var mysql = require('../mysql');

router.get("/", function(req, res, next) {
    mysql.getBook(res, req.query.isbn);
});

router.post("/", function(req, res, next) {
    mysql.buyBook(res, req.body.isbn, req.body.email)
});

module.exports = router;