const router = require('express').Router();
const { renderHomePage, showSearchedCats } = require('../services/homePageServices');

router.get('/', renderHomePage);
router.get('/search', showSearchedCats);

module.exports = router;