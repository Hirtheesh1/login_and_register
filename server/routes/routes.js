const express = require('express');
const router = express.Router();
const User = require('../models/models'); // Ensure correct import and case

// Define your routes here
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" }); 
}
});
router.post('/register', async (req, res) => {
  
})



module.exports = router;