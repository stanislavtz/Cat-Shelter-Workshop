const router = require('express').Router();

const catsRouter = require('./routers/catsRouter');

const homePage = require('./controllers/homeController');
const searchBar = require('./controllers/searchController');

router.get('/', homePage);
router.get('/search', searchBar);

router.use('/cats', catsRouter);

module.exports = router;