const router = require('express').Router();
const { 
    addCat, 
    editCat, 
    deleteCat, 
    renderAddCatPage, 
    renderEditCatPage 
} = require('../services/catsService');

router.get('/add-cat', renderAddCatPage);
router.post('/add-cat', addCat);

router.get('/cat/:id/edit', renderEditCatPage);
router.post('/cat/:id/edit', editCat);

router.get('/cat/:id/shelter', deleteCat);

module.exports = router;