const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const favicon = require("serve-favicon");

const indexRouter = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// task A
app.get("/hello", (req, res) => {
    res.send("Hello, World!");
});

// task B
app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "form.html"));
});

// task C
app.post("/formdata", (req, res) => {
    res.render("formdata", {
        username: req.body.username,
        email: req.body.email,
        age: req.body.age,
    });
});

/**
 * Example JSON
 * {
 *   "username": "bohdan",
 *   "country": "Ukraine",
 *   "email": "bohdankordon@gmail.com",
 *   "gender": "M",
 *   "age": 20
 * }
 */
// task D
app.post("/jsondata", (req, res) => {
    res.render("jsondata", { data: req.body });
});

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
