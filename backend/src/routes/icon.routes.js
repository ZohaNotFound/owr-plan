const express = require('express');
const router = express.Router();
const {
  uploadIcon,
  getAllIcons,
  getIconById,
  deleteIcon
} = require('../controllers/iconController');

// Routes for icon operations
router.post('/upload', uploadIcon);
router.get('/', getAllIcons);
router.get('/:id', getIconById);
router.delete('/:id', deleteIcon);

module.exports = router;