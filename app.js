const http = require('http');
var fs = require('fs');

const port=process.env.PORT || 3000


http.createServer(function(req,res){
fs.readFile("./Public/index.html","UTF-8",function(err,html){
    res.writeHead(200,{"Content-Type": "text/html"});
    res.end(html);
});

}).listen(port);
