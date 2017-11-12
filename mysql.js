var mysql = require("mysql");

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