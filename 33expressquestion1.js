const express = require('express');

const app = express();

// Middleware function to log incoming requests
function loggerMiddleware(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  
  next();
}


app.use(loggerMiddleware);

// Your routes go here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Example additional route
app.get('/products', (req, res) => {
  res.send('List of products');
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});