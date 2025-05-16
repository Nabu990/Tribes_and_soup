const express = require('express');
const router = express.Router();
const tribesController = require('../controllers/tribesController');

router.get('/', tribesController.getAllTribes);
router.get('/:id', tribesController.getTribeById);
router.post('/', tribesController.createTribe);
router.put('/:id', tribesController.updateTribe);
router.delete('/:id', tribesController.deleteTribe);

module.exports = router;
