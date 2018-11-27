var express = require('express')
var app = express()
var http = require("http");
import { router } from './routes';


http.createServer(function(req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');
}).listen(8000);


console.log('Server running at http://127.0.0.1:8000/');

this.app.use('/api', router);

