const router = require('express').Router();
const {renderAddBreedPage, addBreed} = require('../services/breedService');

router.get('/add-breed', renderAddBreedPage);
router.post('/add-breed', addBreed);

module.exports = router;