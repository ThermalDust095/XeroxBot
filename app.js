const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const fs = require('fs');
const https = require('https');


// Parse JSON bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

// Webhook endpoint for receiving messages from WhatsApp
app.post('/webhook', (req, res) => {
    console.log(req)
    // Send a response if needed
    res.status(200).json({ success: true });
});

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };


const server = https.createServer(options, app);


// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
