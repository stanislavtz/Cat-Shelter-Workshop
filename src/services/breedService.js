const Breed = require('../models/Breed');

const renderAddBreedPage = (req, res) => res.render('addBreed');

const addBreed = (req, res) => {
    const breedName = req.body.breed;
    const breed = new Breed(breedName);

    Breed.save(breed);
    res.redirect('/');
}

module.exports = {
    renderAddBreedPage,
    addBreed
}