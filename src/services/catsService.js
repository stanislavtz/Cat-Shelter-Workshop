const uniqId = require('uniqid');
const Breed = require("../models/Breed");
const Cat = require("../models/Cat");

let cat = {};

const renderAddCatPage = (req, res) => {
    const breeds = Breed.getAll();
    res.render('addCat', { breeds });
}

const renderEditCatPage = (req, res) => {
    cat = { ...Cat.getById(req.params.id) };
    const breeds = Breed.getAll().filter(b => b.name !== cat.breed);

    res.render('editCat', { cat, breeds });
}

const addCat = (req, res) => {
    const id = uniqId();
    const { name, breed, description, imageUrl } = req.body;

    Cat.save(id, name, breed, description, imageUrl);
    res.redirect('/');
}

const editCat = (req, res) => {
    Cat.updateById(req.params.id, req.body)
    res.redirect('/');
}

const deleteCat = (req, res) => {
    Cat.removeById(req.params.id);
    res.redirect('/');
}

module.exports = {
    addCat,
    editCat,
    deleteCat,
    renderAddCatPage,
    renderEditCatPage,
}