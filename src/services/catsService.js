const uniqId = require('uniqid');
const Breed = require("../models/Breed");
const Cat = require("../models/Cat");


const renderAddCatPage = (req, res) => {
    const breeds = Breed.getAll();
    res.render('addCat', { breeds });
}

const addCat = (req, res) => {
    const id = uniqId();
    const { name, breed, description, imageUrl } = req.body;
    
    Cat.save(id, name, breed, description, imageUrl);
    res.redirect('/');
}

module.exports = {
    renderAddCatPage,
    addCat,
}