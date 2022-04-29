const Cat = require('../models/Cat');

const getAllCats = () => Cat.getAll();
const getSearchedResult = (criteria) => Cat.getSearched(criteria);

module.exports = {
    getAllCats,
    getSearchedResult
}