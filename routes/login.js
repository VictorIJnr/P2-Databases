var express = require("express");
var router = express.Router();
var mysql = require("../mysql");

router.get("/", function(req, res, next){
    res.render("login");
});

router.post("/", function(req, res, next) {
    mysql.login(res, req.body.email, req.body.password, req);
});

module.exports = router;
