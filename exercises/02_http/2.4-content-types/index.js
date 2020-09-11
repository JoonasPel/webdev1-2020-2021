var http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res){ 
    console.log('request was made: ' + req.url);
    //res.writeHead(200, { 'Content-type': 'text/plain'});

    //console.log(JSON.stringify(req.headers));

    var accept_header = req.headers['accept'];

    if(accept_header == 'text/html') {
        res.writeHead(200, { 'Content-type': 'text/html'});
        fs.readFile('data.txt', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end("txt");
        });
    }

    if(accept_header == 'application/json') {
        res.writeHead(200, { 'Content-type': 'application/json'});
        fs.readFile('data.json', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end("txt");
        });
    }

    if(accept_header == 'text/xml') {
        res.writeHead(200, { 'Content-type': 'text/xml'});
        fs.readFile('data.xml', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end("txt");
        });
    }


    res.statusCode = 406;
    res.statusMessage = 'Content type not available';
    res.end();
});

server.listen(3000, '127.0.0.1');
console.log('Hello, listening to port 3000');