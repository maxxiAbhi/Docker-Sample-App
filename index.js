const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end('Hello from Dockerized Node.js App! - BY ABHINANDAN MAITY YOOOOO LOOOO  - 11/5/2025');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});