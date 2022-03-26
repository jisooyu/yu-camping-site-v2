const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  testGet,
  getGoCamping,
  createGoCamping,
} = require('../controllers/goCampingController');

router
  .route('/')
  .get(testGet)
  .get(protect, getGoCamping)
  .post(protect, createGoCamping);

module.exports = router;
