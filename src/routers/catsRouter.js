const router = require('express').Router();
const db = require('../utils/db.json');
const uniqid = require('uniqid');

const addCat = require('../controllers/catController');
const addBreed = require('../controllers/breedController');

router.get('/add-cat', addCat);
router.get('/add-breed', addBreed);

router.post('/add-cat', (req, res) => {
    const _id = uniqid();
    const cat = {_id, ...req.body }
    // console.log('ASD',req.locals.cats);

    // req.cats[_id] = cat;
    res.redirect('/');
});

router.post('/add-breed', (req, res) => {
    const breed = req.body.breed;
    db.breeds.push(breed);
    res.redirect('/');
});

module.exports = router;