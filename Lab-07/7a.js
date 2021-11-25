const http = require("http");
const url = require("url");

const requestListener = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const reqUrl = parsedUrl.pathname;
    const reqQuery = parsedUrl.query;
    // assuming passed parameters are integers
    const num1 = parseInt(reqQuery.num1, 10);
    const num2 = parseInt(reqQuery.num2, 10);
    if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
        if (req.method === "GET") {
            let result;
            switch (reqUrl) {
            case "/add":
                result = `${num1} + ${num2} = ${num1 + num2}`;
                break;
            case "/sub":
                result = `${num1} - ${num2} = ${num1 - num2}`;
                break;
            case "/mul":
                result = `${num1} * ${num2} = ${num1 * num2}`;
                break;
            case "/div":
                result = `${num1} / ${num2} = ${num1 / num2}`;
                break;
            default:
                break;
            }
            if (result) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(result);
            } else {
                res.writeHead(400, { "Content-Type": "text/html" });
                res.end("Url should be add, sub, mul or div!");
            }
        }
    } else {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end("There should be 2 query parameters!\nnum1: integer, num2: integer");
    }
};

const server = http.createServer(requestListener);
server.listen(8080);
