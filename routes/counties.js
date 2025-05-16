const express = require('express');
const router = express.Router();
const countiesController = require('../controllers/countiesController');

router.get('/', countiesController.getAllCounties);
router.get('/:id', countiesController.getCountyById);
router.post('/', countiesController.createCounty);
router.put('/:id', countiesController.updateCounty);
router.delete('/:id', countiesController.deleteCounty);

module.exports = router;
