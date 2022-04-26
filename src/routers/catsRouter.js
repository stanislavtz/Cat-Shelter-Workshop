const router = require('express').Router();

const addCat = require('../controllers/catController');
const addBreed = require('../controllers/breedController');

router.get('/add-cat', addCat);
router.get('/add-breed', addBreed);

module.exports = router;