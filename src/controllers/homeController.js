const db = require('../utils/db.json');

const cats = Object.values(db.cats);

function homePage(req, res) {
    // req.locals.cats = { ...db.cats }
    console.log(req.locals.cats);

    res.render('home/index', { cats: req.cats, homepage: true });
}

module.exports = homePage;