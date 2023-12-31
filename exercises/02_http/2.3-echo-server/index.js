var http = require('http');

var server = http.createServer(function(req, res){
    console.log('req was made: ' + req.url);
    res.writeHead(200, { 'Content-type' : 'text/plain' });

    var body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        res.end(body);
    });
});

server.listen(3000, 'localhost');
console.log('Listening to 3000');