var http = require('http');

var server = http.createServer(function(req, res){
    console.log('req was made: ' + req.url);
    res.writeHead(200, { 'Content-type' : 'text/plain' });

    var body = [];
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    });

    res.write(JSON.stringify(body));
    res.end();
});

server.listen(3000, 'localhost');
console.log('Listening to 3000');