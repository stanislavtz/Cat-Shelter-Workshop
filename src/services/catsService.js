const uniqId = require('uniqid');
const Breed = require("../models/Breed");
const Cat = require("../models/Cat");


const renderAddCatPage = (req, res) => {
    const breeds = Breed.getAll();
    res.render('addCat', { breeds });
}

const renderEditCatPage = (req, res) => {
    console.log(req.params)
    const cat = Cat.getById(req.params._id);
    const breeds = Breed.getAll().filter(b => b.name !== cat.breed);
    
    res.render('editCat', {cat, breeds});
}

const addCat = (req, res) => {
    const id = uniqId();
    const { name, breed, description, imageUrl } = req.body;
    
    Cat.save(id, name, breed, description, imageUrl);
    res.redirect('/');
}

const editCat = (req, res) => {
    console.log(req.params)
}

module.exports = {
    addCat,
    renderAddCatPage,
    renderEditCatPage,
}