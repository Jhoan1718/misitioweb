const http =  require ('http');

http.createServer(function(req,res){
  res.write("<h1>este es mi primer modulo en node.js</h1>");
}).listen(3000);