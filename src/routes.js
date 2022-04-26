const router = require('express').Router();

const catsRouter = require('./routers/catsRouter');

const homePage = require('./controllers/homeController');
const searchController = require('./controllers/searchController');

router.get('/', homePage);
router.get('/search', searchController);

router.use('/cats', catsRouter);

module.exports = router;