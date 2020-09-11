var http = require('http');
const fs = require('fs');

module.exports = http.createServer(function(req, res){ 
    console.log('request was made: ' + req.url);
    //res.writeHead(200, { 'Content-type': 'text/plain'});
    //console.log(JSON.stringify(req.headers));

    if(req.url == '/classical') {
        fs.readFile('homer.html', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    } else if (req.url == '/modern') {
        fs.readFile('bradbury.html', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    } else if (req.url == '/') {
        fs.readFile('index.html', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.statusMessage = 'Requested content not found';
        res.end();
    }
}).listen(3000, '127.0.0.1');

console.log('Hello, listening to port 3000');