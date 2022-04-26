const router = require('express').Router();

const catsRouter = require('./routers/catsRouter');
const homePage = require('./controllers/homeController');

router.get('/', homePage);
router.use('/cats', catsRouter);

module.exports = router;