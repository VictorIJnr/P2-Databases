var express= require('express');
var fs = require("fs");
var http = require("http");
var mysql = require("mysql");

var app = express();

fs.readFile('./index.html', function (err, html) {
    if (err) throw err; 
           
    http.createServer(function(request, response) { 
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();  
    }).listen(4096, '127.0.0.1');

});

var connection = mysql.createConnection({
    host: "vi4.host.cs.st-andrews.ac.uk",
    user: "vi4",
    password: "Uru8kLxGX6!gFg",
    database: "vi4_cs3101_db"
});

connection.connect( function (err) {
    if (err) {
        console.log("Could not connect to database");
        return;
    }
    console.log("Connected");
});