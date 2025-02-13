const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller');

// Route for getting AI review
router.post('/get-review', aiController.getReview);

module.exports = router;
