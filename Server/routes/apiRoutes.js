const express = require('express');
const router = express.Router();
const { connect } = require('../db');

router.post('/api/contact', async (req, res, next) => {
  const { name, email, message } = req.body;

  try {
    const db = await connect();
    const collection = db.collection('contactFormSubmissions');

    // Save form data to MongoDB (adjust as needed)
    const result = await collection.insertOne({ name, email, message });

    // Send a response to the client
    res.json({ message: 'Form submitted successfully', result });
  } catch (err) {
    console.error('Error processing contact form:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;