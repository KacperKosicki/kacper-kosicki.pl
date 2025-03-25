const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/register', auth.register); // tylko Ty używasz
router.post('/login', auth.login);
router.get('/me', protect, auth.getMe);

module.exports = router;
