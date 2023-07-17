// Create web server
// 1. Create a web server
// 2. Define a port number
// 3. Define routes
// 4. Listen for requests

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Define a port number
const port = 3000;

// 3. Define routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/comments', (req, res) => {
  res.send([1, 2, 3]);
});

// 4. Listen for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});