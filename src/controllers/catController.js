const breeds = require('../utils/db.json').breeds;

const catController = (req, res) => {
    res.render('addCat', { breeds });
}

module.exports = catController;