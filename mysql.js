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

queries.bookReviews = function(res, isbn) {
    connection.query("SELECT Reviews.Rating, Reviews.Comment, "
        + "Customer.Name, Books.ISBN, Books.Title, " 
        + "GROUP_CONCAT(Distinct Contributer.Name SEPARATOR ', ') as Authors "  
        + "FROM vi4_cs3101_db.Reviews as Reviews " 
        + "INNER JOIN vi4_cs3101_db.Books as Books " 
        + "ON Books.ISBN = Reviews.ISBN " 
        + "INNER JOIN vi4_cs3101_db.Authors as Authors " 
        + "ON Books.ISBN = Authors.ISBN " 
        + "INNER JOIN vi4_cs3101_db.Contributer as Contributer " 
        + "ON Contributer.ContributerID = Authors.ContributerID " 
        + "INNER JOIN vi4_cs3101_db.Customer as Customer " 
        + "ON Customer.CustomerID = Reviews.CustomerID "
        + "WHERE Reviews.ISBN = \'" + isbn + "\'"
        + "GROUP BY Reviews.CustomerID;", 
    function (err, rows) {
        if (err) throw err;
        res.render('reviews', {rows: rows});
    });
}

queries.buyBook = function(res, isbn, email) {
    connection.query("INSERT INTO `vi4_cs3101_db`.`Purchases` (`CustomerID`, `ISBN`, `Date Purchased`) "
                    + "VALUES ((SELECT Customer.CustomerID from `vi4_cs3101_db`.`Customer` as Customer "
                    + "WHERE UPPER(Customer.email) = UPPER(\'" + email + "\')), "
                    + "\'" + isbn + "\', \'" + formatDate(new Date()) + "\');",
    function (err, rows) {
        if (err) throw err;
        res.render('newpurchase', {rows: rows});
    });
}

queries.allBooks = function(res) {
    connection.query("SELECT * FROM Books", function (err, rows) {
        if (err) throw err;
        res.render('audiobooks', {rows: rows});
    });
}

queries.getBook = function(res, isbn) {
    connection.query("SELECT Books.Title, Books.ISBN, Books.Price, "
                    + "Books.`Publisher Name`, Books.`Publication Date`, Books.Narrator, "
                    + "Books.`Running Time`, Books.`Age Rating`, "
                    + "GROUP_CONCAT(Contributer.Name SEPARATOR ', ') as Authors FROM vi4_cs3101_db.`Books` as Books "
                    + "INNER JOIN vi4_cs3101_db.Authors as Authors "
                    + "ON Books.ISBN = Authors.ISBN "
                    + "INNER JOIN vi4_cs3101_db.Contributer as Contributer "
                    + "ON Contributer.ContributerID = Authors.ContributerID "
                    + "WHERE Books.ISBN = \'" + isbn + "\';",
    function (err, rows) {
        if (err) throw err;
        res.render('purchases', {rows: rows, isbn: isbn});
    });
}

queries.authorBooks = function(res, author) {
    connection.query("SELECT Contributer.ContributerID, Contributer.Name, Contributer.Biography, Books.ISBN, Books.Title, "
                    + "Books.`Publisher Name`, Books.`Publication Date`, Books.Narrator, Books.`Running Time`, Books.`Age Rating`, Books.Price "
                    + "FROM vi4_cs3101_db.Contributer as Contributer "
                    + "INNER JOIN vi4_cs3101_db.Authors as Authors "
                    + "ON Contributer.ContributerID = Authors.ContributerID "
                    + "INNER JOIN vi4_cs3101_db.Books "
                    + "ON Books.ISBN = Authors.ISBN "
                    + "WHERE UPPER(Contributer.Name) = UPPER(\"" + author + "\") "
                    + "ORDER BY Contributer.ContributerID;", 
    function(err, rows) {
        if (err) throw err;
        res.render("viewauthor", {author: author, rows: rows});
    });
}

queries.popularBooks = function(res) {
    connection.query("SELECT Popular.Title, Popular.ISBN, Popular.`Number Purchases`, Books.Price, "
    + "Books.`Publisher Name`, Books.`Publication Date`, Books.Narrator, "
    + "Books.`Running Time`, Books.`Age Rating`, "
    + "GROUP_CONCAT(Contributer.Name SEPARATOR ', ') as Authors FROM vi4_cs3101_db.`Most Purchased` as Popular "
    + "INNER JOIN vi4_cs3101_db.Books as Books " 
    + "ON Books.ISBN = Popular.ISBN "
    + "INNER JOIN vi4_cs3101_db.Authors as Authors "
    + "ON Books.ISBN = Authors.ISBN "
    + "INNER JOIN vi4_cs3101_db.Contributer as Contributer "
    + "ON Contributer.ContributerID = Authors.ContributerID "
    + "GROUP BY Popular.Title "
    + "ORDER BY Popular.`Number Purchases` DESC "
    + "LIMIT 10;", 
    function(err, rows) {
        if (err) throw err;
        res.render("popular", {rows: rows});
    });
}

/**
 * Allows for the formatting of dates to the format YYYY-MM-DD
 */
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

module.exports = queries;