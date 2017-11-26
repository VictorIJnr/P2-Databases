var express = require('express');
var router = express.Router();
var mysql = require("../mysql");

router.get('/', function(req, res, next) {
    mysql.authorBooks(res, "sarah nsoye");
});
  
module.exports = router;