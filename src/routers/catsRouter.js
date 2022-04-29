const router = require('express').Router();
const uniqid = require('uniqid');

const addCat = require('../controllers/catController');
const addBreed = require('../controllers/breedController');
const Breed = require('../models/Breed');
const Cat = require('../models/Cat.js');

router.get('/add-cat', addCat);
router.get('/add-breed', addBreed);

router.post('/add-cat', (req, res) => {
    const _id = uniqid();
    const { name, breed, description, imageUrl } = req.body;
    const cat = new Cat(_id, name, breed, description, imageUrl);

    Cat.save(cat);

    console.log('ASD', cat);

    res.redirect('/');
});

router.post('/add-breed', (req, res) => {
    const breed = new Breed(req.body.breed);
    Breed.save(breed);
    res.redirect('/');
});

module.exports = router;