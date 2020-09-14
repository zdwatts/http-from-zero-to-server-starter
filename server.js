const { EDOM } = require('constants');
const http = require('http')

http.createServer(function (req, res) {
    if (req.url === '/OK') {
        console.log("Inbound 'OK' request being processed...");
        res.writeHead(200);
        res.end();
    } else if (req.url === '/Bad-Request') {
        console.log("Oops! The server received your request but couldn't understand it.")
        res.writeHead(400)
        res.end();
    } else if (req.url === '/Created') {
        console.log("Request received. New record created as a result.");
        res.writeHead(201);
        res.end()
    } else if (req.url === '/Forbidden') {
        console.log("Resource you requested may exist, but you're not allowed to see it at all. Idiot.")
        res.writeHead(403);
        res.end()
    } else if (req.url === '/Found') {
        console.log("This resource was temporarily moved.")
        res.writeHead(302);
        res.end()
    } else if (req.url === '/Gateway-Timeout') {
        console.log("Your request was received but the server didn't respond in a reasonable amount of time.");
        res.writeHead(504);
        res.end()
    } else if (req.url === '/Internal-Server-Error') {
        console.log("Server tried to process your request but something went wrong.");
        res.writeHead(500);
        res.end()
    } else if (req.url === '/Moved-Permanently') {
        console.log("The resource you requested is in a totally new location.")
        res.writeHead(301);
        res.end()
    } else if (req.url === '/Unauthorized') {
        console.log("The resource you requested may exist but you don't have authorization.");
        res.writeHead(401);
        res.end();
    } else {
        console.log("Not Found");
        res.writeHead(404);
        res.end();
    }
}).listen(3000, function () {
    console.log('Listening on port 3000');
})
