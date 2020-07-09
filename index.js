const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
	let q = url.parse(req.url, true);
	let filename = q.pathname;

	switch (filename) {
		case '/':
			fs.readFile('index.html', function(err, data) {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data);
				return res.end();
			});
			break;
		case '/index.html':
			fs.readFile('index.html', function(err, data) {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data);
				return res.end();
			});
			break;
		case '/about.html':
			fs.readFile('about.html', function(err, data) {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data);
				return res.end();
			});
			break;
		case '/contact-me.html':
			fs.readFile('contact-me.html', function(err, data) {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data);
				return res.end();
			});
			break;
		default :
			fs.readFile('404.html', function(err, data) {
				res.writeHead(404, {'Content-Type': 'text/html'});
				res.write(data);
				return res.end();
			});
			break;
	}

}).listen(8080);