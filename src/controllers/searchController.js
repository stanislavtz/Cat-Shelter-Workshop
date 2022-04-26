const db = require('../utils/db.json');

const searchBar = (req, res) => {
    console.log(req.params);
    const filteredCats = db.cats.filter(cat => cat.breed.includes(req.params));
    console.log(filteredCats);
    res.render('home/index', {cats: filteredCats})
}

module.exports = searchBar;