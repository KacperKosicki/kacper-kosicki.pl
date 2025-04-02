const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');
const { protect, restrictTo } = require('../middlewares/authMiddleware');

// 🔐 Podstawowe trasy
router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/me', protect, auth.getMe);

// ✅ Admin only routes
router.get('/users', protect, restrictTo('admin'), auth.getAllUsers);
router.delete('/users/:id', protect, restrictTo('admin'), auth.deleteUser);
router.patch('/users/:id/role', protect, restrictTo('admin'), auth.updateUserRole);
router.put('/users/:id/password', protect, restrictTo('admin'), auth.updateUserPassword);

module.exports = router;
