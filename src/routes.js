const router = require('express').Router();

const catsRouter = require('./routers/catsRouter');

const {renderHomePage, showSearchedCats} = require('./controllers/homeController');

router.get('/', renderHomePage);
router.get('/search', showSearchedCats);

router.use('/cats', catsRouter);

module.exports = router;