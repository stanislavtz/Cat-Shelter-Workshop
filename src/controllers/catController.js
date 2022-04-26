const breeds = require('../utils/db.json').breeds;

const addCat = (req, res) => {
    res.render('addCat', { breeds });
}

module.exports = addCat;