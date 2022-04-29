const Breed = require('../models/Breed');

const renderAddBreedPage = (req, res) => res.render('addBreed');

const addBreed = (req, res) => {
    const breedName = req.body.breed;

    Breed.save(breedName);
    res.redirect('/');
}

module.exports = {
    addBreed,
    renderAddBreedPage,
}