var http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res){ 
    console.log('request was made: ' + req.url);

    if(req.method == 'GET') {
        fs.readFile('get.html', (err, data) => {
            if(err) throw err;
            res.writeHead(200, { 'Content-type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (req.method == 'POST') {
        fs.readFile('post.html', (err,data) => {
            if(err) throw err;
            res.writeHead(200, { 'Content-type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else {
        res.statusCode = 405;
        res.setHeader('Allow: GET, POST');
    }
    
});

server.listen(3000, '127.0.0.1');
console.log('Hello, listening to port 3000');