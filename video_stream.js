const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    const videoPath = path.join(__dirname, 'public', 'video.mp4');
    const stat = fs.statSync(videoPath);
    res.writeHead(200, {
        'Content-Type': 'video/mp4',
        'Content-Length': stat.size,
    });
    const videoStream = fs.createReadStream(videoPath);
    videoStream.pipe(res);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
