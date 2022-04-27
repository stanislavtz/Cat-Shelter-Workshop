const Breed = require("../models/Breed");

const addCat = (req, res) => {
    const breeds = Breed.getAll();
    console.log(breeds)
    res.render('addCat', { breeds });
}

module.exports = addCat;