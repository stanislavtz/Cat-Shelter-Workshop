const Cat = require("../models/Cat");

function getAllCats() {
    return Cat.getAll();
}

function getSearchedCats(criteria) {
    return Cat.getSearched(criteria);
}

function getCatById(id) {
    return Cat.getById(id);
}

module.exports = {
    getAllCats,
    getSearchedCats,
    getCatById
}