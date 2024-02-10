const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Webhook endpoint for receiving messages from WhatsApp
app.post('/webhook', (req, res) => {
    const message = req.body;
    console.log('Incoming message:', message);

    // Process the incoming message (e.g., store in database, trigger response, etc.)

    // Send a response if needed
    res.status(200).json({ success: true });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
