const express = require('express');
const router = express.Router();
const soupsController = require('../controllers/soupsController');

router.get('/', soupsController.getAllSoups);
router.get('/:id', soupsController.getSoupById);
router.post('/', soupsController.createSoup);
router.put('/:id', soupsController.updateSoup);
router.delete('/:id', soupsController.deleteSoup);

module.exports = router;
