const router = require('express').Router();
const { addCat, renderAddCatPage, renderEditCatPage } = require('../services/catsService');

router.get('/add-cat', renderAddCatPage);
router.post('/add-cat', addCat);

router.get('/cat/:_id/edit', renderEditCatPage);

module.exports = router;