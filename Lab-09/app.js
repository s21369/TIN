const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

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

// task A
app.post("/calc", (req, res) => {
    const data = req.body;
    const num1 = parseInt(data.n1, 10);
    const num2 = parseInt(data.n2, 10);
    if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
        switch (data.op) {
        case "+":
            data.res = num1 + num2;
            break;
        case "-":
            data.res = num1 - num2;
            break;
        case "*":
            data.res = num1 * num2;
            break;
        case "/":
            data.res = num1 / num2;
            break;
        default:
            data.error = "op should be either '+', '-', '*' or '/'";
            break;
        }
    } else {
        data.error = "n1 and n2 should be numbers";
    }
    if ("error" in data) {
        res.status(400);
    }
    res.json(data);
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
