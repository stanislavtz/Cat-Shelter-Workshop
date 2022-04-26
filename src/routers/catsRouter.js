const router = require('express').Router();

const catController = require('../controllers/catController');
const breedController = require('../controllers/breedController');

router.get('/add-cat', catController);
router.get('/add-breed', breedController);

module.exports = router;