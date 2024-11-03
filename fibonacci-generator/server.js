// Import the express library
const express = require('express');

// Create an instance of the express app
const app = express();

// Define the port number
const port = 9090;

// Function to generate Fibonacci sequence
const generateFibonacci = (n) => {
    const sequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequence.push(0);
        } else if (i === 1) {
            sequence.push(1);
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
    return sequence;
};

// Define a GET endpoint for the Fibonacci sequence
app.get('/assignments/fibonacci/:n', (req, res) => {
    const n = parseInt(req.params.n, 10);
    if (isNaN(n) || n < 0) {
        return res.status(400).json({ error: 'Please provide a valid positive integer.' });
    }
    
    const sequence = generateFibonacci(n);
    res.json({ sequence });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
