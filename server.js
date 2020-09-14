const http = require('http')

http.createServer(function (req, res) {
    if (req.url === '/OK') {
        console.log("Inbound 'OK' request being processed...");
        res.writeHead(200);
        res.end();
    } else {
        console.log("Not Found");
        res.writeHead(404);
        res.end();
    }
}).listen(3000, function () {
    console.log('Listening on port 3000');
})