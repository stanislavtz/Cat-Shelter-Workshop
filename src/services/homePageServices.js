const Cat = require('../models/Cat');

const renderHomePage = (req, res) => {
    const data = {
        homepage: true,
        cats: Cat.getAll()
    }

    res.render('home/index', data)
}

const showSearchedCats = (req, res) => {
    const data = {
        homepage: true, 
        cats: Cat.getSearched(req.query.search)
    }

    res.render('home/index', data)
}

module.exports = {
    renderHomePage,
    showSearchedCats
}