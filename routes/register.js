// Register route

const express = require('express');
const router = express.Router();

// GET - Render the register page
router.get('/register', (req, res) => {
    res.send("This will be the register page");
});

// Export module
module.exports = router;