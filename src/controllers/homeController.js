const { getAllCats, getSearchedCats } = require('../services/catsService');

function renderHomePage(req, res) {
    res.render('home/index', { cats: getAllCats(), homepage: true });
}

function showSearchedCats(req, res) {
    res.render('home/index', { cats: getSearchedCats(req.query.search), homepage: true });
}

module.exports = {
    renderHomePage,
    showSearchedCats
}