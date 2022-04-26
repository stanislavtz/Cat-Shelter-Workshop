const router = require('express').Router();
const db = require('../utils/db.json');

router.get('/add-breed', addBreed);
router.get('/add-cat', addCat);

function addBreed(req, res) {
    res.render('addBreed');
}

function addCat
(req, res) {
    const breeds = db.breeds;
    res.render('addCat', { breeds });
}

module.exports = router;