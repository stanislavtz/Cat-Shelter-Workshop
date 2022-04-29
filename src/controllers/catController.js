const router = require('express').Router();
const { renderAddCatPage, addCat } = require('../services/catsService');

router.get('/add-cat', renderAddCatPage);
router.post('/add-cat', addCat);

module.exports = router;