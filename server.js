const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator'); // Import express-validator
const cors = require('cors');
const axios = require('axios'); // Import Axios

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Middleware to parse incoming JSON requests

// Endpoint to generate itinerary
app.post('/generate-itinerary', [
    // Validate and sanitize input
    check('preferences').notEmpty().withMessage('Preferences are required'),
    check('expenses').notEmpty().withMessage('Expenses are required'),
    check('reviews').isArray().withMessage('Reviews must be an array'),
    check('companionVibe').notEmpty().withMessage('Companion vibe is required')
], async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Extract data from the request body
    const { preferences, expenses, reviews, companionVibe } = req.body;

    try {
        // Log the request to Flask service for debugging
        console.log('Requesting Flask service with companionVibe:', companionVibe);
        
        // Call the Flask recommendation service
        const response = await axios.post('http://localhost:5000/recommend', {
            companionVibe: companionVibe // Pass companion vibe to Flask service
        });

        // Create the itinerary using the response from Flask
        const itinerary = {
            destination: response.data.name,
            activities: response.data.activities
        };

        return res.json({ itinerary });

    } catch (error) {
        // Enhanced error logging
        if (error.response) {
            console.error('Error response data:', error.response.data); // Log error response data
            console.error('Error response status:', error.response.status); // Log error status
        } else {
            console.error('Error message:', error.message); // Log error message
        }
        return res.status(500).json({ error: 'Error fetching recommendations from Flask service' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
