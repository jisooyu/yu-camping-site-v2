const express = require('express');
const router = express.Router();
const { getCamps, getCamp, createCamp } = require('../controllers/campController');
const { protect } = require('../middleware/authMiddleware');

router.route('/:id').get(protect, getCamp);
router.route('/').get(protect, getCamps).post(protect, createCamp);
module.exports = router;
