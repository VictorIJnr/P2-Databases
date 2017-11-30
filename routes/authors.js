var express = require('express');
var router = express.Router();
var mysql = require("../mysql");

router.get('/', function(req, res, next) {
    res.render('authors', {title : 'Authors'});
});

router.post('/', function(req, res, next) {
    mysql.authorBooks(res, req.body.author);
});
  
module.exports = router;