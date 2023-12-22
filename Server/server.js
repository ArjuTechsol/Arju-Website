const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static('public'));

// Define API route
app.get('/api/data', async (req, res, next) => {
  try {
    // Simulating an error for testing purposes
    throw new Error('This is a simulated error!');
  } catch (err) {
    // Pass the error to the next middleware
    next(err);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});