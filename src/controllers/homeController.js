const db = require('../utils/db.json');

const cats = Object.values(db.cats);

function homePage(req, res) {
    res.render('home/index', { cats });
}

module.exports = homePage;