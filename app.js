var express = require("express");
var session = require("cookie-session");
var path = require("path");
var favicon = require("serve-favicon");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();

var index = require("./routes/index");
var audiobooks = require("./routes/audiobooks");
var authors = require("./routes/authors");
var popular = require("./routes/popular");
var purchases = require("./routes/purchases");
var reviews = require("./routes/reviews");
var signup = require("./routes/signup");
var login = require("./routes/login");
var users = require("./routes/users");

var app = express();

// view engine setup
app.set("views", viewPath = path.join(__dirname, "views"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.static(publicPath = path.join(__dirname, "public")));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use("/", index);
app.use("/audiobooks", audiobooks);
app.use("/authors", authors);
app.use("/popular", popular);
app.use("/purchases", purchases);
app.use("/reviews", reviews);
app.use("/users", users);
app.use("/signup", signup);
app.use("/login", login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error", {errNo : err.status});
});

app.listen(20793, "127.0.0.1");

module.exports = app;
