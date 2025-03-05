// Creating a server that runs on port 3000 to print "HELLO WORLD"

const http = require('http');

http.createServer (function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    
    const newPass = res.end("Hello World/n");
}).listen(3000)

console.log("Server is running at port 3000");
