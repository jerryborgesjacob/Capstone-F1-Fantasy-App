const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();


router.post('/create', isAuthenticated, isAdmin, (req, res) => {
    
    res.status(201).json({ message: 'League created successfully!' });
});


router.get('/', isAuthenticated, (req, res) => {
    
    res.json({ leagues: [] }); 
});

module.exports = router;
