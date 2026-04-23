const express = require('express');
const router = express.Router();
const {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// Routes for user operations
router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;