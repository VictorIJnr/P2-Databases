var mysql = require("mysql");
var queries = {};

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

queries.allBooks = function(res) {
    connection.query("SELECT * FROM Books", function (err, rows) {
        if (err) throw err;
        res.render('audiobooks', {rows: rows});
    });
}

queries.authorBooks = function(res, author) {
    connection.query("SELECT Contributer.ContributerID, Contributer.Name, Contributer.Biography, Books.ISBN, Books.Title, "
                    + "Books.`Publisher Name`, Books.Narrator, Books.`Running Time`, Books.`Age Rating`, Books.Price "
                    + "FROM vi4_cs3101_db.Contributer as Contributer "
                    + "INNER JOIN vi4_cs3101_db.Authors as Authors "
                    + "ON Contributer.ContributerID = Authors.ContributerID "
                    + "INNER JOIN vi4_cs3101_db.Books "
                    + "ON Books.ISBN = Authors.ISBN "
                    + "WHERE UPPER(Contributer.Name) = UPPER(\"" + author + "\") "
                    + "ORDER BY Contributer.ContributerID;", 
    function(err, rows) {
        if (err) throw err;
        res.render("authors", {rows: rows});
    });
}

module.exports = queries;