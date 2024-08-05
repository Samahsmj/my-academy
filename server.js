const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the "app" directory
app.use(express.static(path.join(__dirname, 'app')));

// Route all other requests to the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

// Start the server on the specified port or default to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
