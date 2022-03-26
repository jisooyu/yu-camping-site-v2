const express = require('express');
const router = express.Router();
const {
  getCamps,
  getCamp,
  createCamp,
} = require('../controllers/campController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getCamps).post(protect, createCamp);

router.route('/:id').get(protect, getCamp);
module.exports = router;
