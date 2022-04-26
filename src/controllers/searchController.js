const db = require('../utils/db.json');

const searchBar = (req, res) => {
    const filteredCats = Object.values(db.cats).filter(cat => cat.breed.includes('ora'));

    res.render('home/index', { cats: filteredCats, homepage: true })
}

module.exports = searchBar;