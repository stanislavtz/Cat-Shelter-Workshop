const router = require('express').Router();

router.get('/add-breed', addBreeds);
router.get('/add-cat', addCats);

function addBreeds(req, res) {
    res.render('addBreed');
}

function addCats(req, res) {
    res.render('addCat');
}

module.exports = router;