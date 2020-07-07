var http = require('http');

var fs = require('fs');




var server = http.createServer((req, res) => {
    console.log("Request was made:" +req.url);
    if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact'){
    res.writeHead(200, {'Content-type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'RYU', age: '50'}, {name: 'Yoshi', age: '40'}];

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('YO dawgs, now listening to port 3000');
var events = require('events');

// var myEmmitter = new events.EventEmitter();
// myEmmitter.on('someEvent',(msg) => {console.log(msg);} );
// myEmmitter.emit('someEvent', 'The event is fired');


// console.log(stuff.counter(['shaun', 'David', 'ryu']));
// console.log(stuff.adder(stuff.pi,6));