var http = require('http');
const fs = require('fs');


var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html'});
    
    //Tehtavanannon vaatimat asiat
    fs.readFile('index.html', (err, data) => {
        if(err) throw err;
        res.write(data);
        res.end();
    });

});

server.listen(3000, '127.0.0.1');
console.log('Hello, listening to port 3000');