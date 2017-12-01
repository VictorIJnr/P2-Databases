var express = require("express");
var router = express.Router();
var mysql = require("../mysql");

router.get("/", function(req, res, next){
    res.render("signup");
});

router.post("/", function(req, res, next) {
    mysql.signUp(res, req.body);
});

module.exports = router;
