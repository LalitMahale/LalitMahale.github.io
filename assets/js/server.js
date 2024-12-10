// server.js (Node.js example)
const express = require('express');
const app = express();
const port = 3000;

// Sample endpoint to return the last updated date
app.get('/last-updated', (req, res) => {
    const lastUpdatedDate = new Date().toLocaleString();  // Get current date and time
    res.json({ lastUpdatedDate });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
