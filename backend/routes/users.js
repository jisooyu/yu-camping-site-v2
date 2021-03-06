const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/users');

// const {protect} = require('../middleware/auth')

router.post('/', register);
router.post('/login', login);

module.exports = router;
