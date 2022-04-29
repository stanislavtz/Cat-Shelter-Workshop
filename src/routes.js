const router = require('express').Router();
const homePageController = require('./controllers/homePageController');
const breedController = require('./controllers/breedController');
const catController = require('./controllers/catController');

router.use(homePageController);
router.use(breedController);
router.use(catController);

module.exports = router;