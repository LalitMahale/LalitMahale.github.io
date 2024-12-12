// server.js (Node.js example)
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  // Middleware to parse JSON requests

// Sample endpoint to return the last updated date
app.get('/last-updated', (req, res) => {
    const lastUpdatedDate = new Date().toLocaleString();  // Get current date and time
    res.json({ lastUpdatedDate });
});

// Endpoint to handle user messages
app.post('/message', (req, res) => {
    const userMessage = req.body.message;
    let botReply = '';

    // Simple logic to reply based on the user message
    if (userMessage.toLowerCase() === 'hi') {
        botReply = 'Hello! How can I assist you today?';
    } else {
        botReply = `You said: ${userMessage}`;
    }

    // Send the bot's reply back to the frontend
    res.json({ reply: botReply });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
