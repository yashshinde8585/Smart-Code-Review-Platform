const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

// API routes
app.use('/ai', aiRoutes);

module.exports = app;
