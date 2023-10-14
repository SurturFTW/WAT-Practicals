const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const { url } = req;
    const filePath = path.join(__dirname, 'public', url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('File not found');
        } else {
            let contentType = 'text/plain';
            if (filePath.endsWith('.html')) {
                contentType = 'text/html';
            } else if (filePath.endsWith('.csv')) {
                contentType = 'text/csv';
            } else if (filePath.endsWith('.json')) {
                contentType = 'application/json';
            } else if (filePath.endsWith('.pdf')) {
                contentType = 'application/pdf';
            }
            res.writeHead(200, {'Content-Type': contentType });
            res.end(data);
        }
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
