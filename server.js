import http from 'http';
import fs from 'fs';

let port = 8080;

const server = http.createServer((_, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	fs.readFile('./public/index.html', null, (error, data) => {
		if (error) {
			response.writeHead(404);
			respone.write('Whoops ! File not found !');
		} else {
			res.write(data);
		}

		res.end();
	});
});

server.listen(port, () => {
	console.log(`Server is listening on port number: ${port}`);
});
