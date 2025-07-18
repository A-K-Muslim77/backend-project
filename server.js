require('dotenv').config();
const express = require('express');
const app = express();
const requestRoutes = require('./routes/requestRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', requestRoutes);

// Server
const PORT = process.env.PORT || 3000; // Fallback to 3000 if .env not configured
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});