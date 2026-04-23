const express = require('express');
const router = express.Router();
const {
  createActivity,
  getActivityById,
  getUserActivities,
  updateActivity,
  deleteActivity,
  getAvailabilityVisualization,
  getBestTimeSlots,
  bulkCreateActivities
} = require('../controllers/activityController');

// Routes for activity operations
router.post('/', createActivity);
router.post('/bulk', bulkCreateActivities);
router.get('/user/:userId', getUserActivities);
router.get('/:id', getActivityById);
router.put('/:id', updateActivity);
router.delete('/:id', deleteActivity);

// Routes for activity analytics
router.get('/visualization/:userId', getAvailabilityVisualization);
router.get('/plan', getBestTimeSlots);

module.exports = router;