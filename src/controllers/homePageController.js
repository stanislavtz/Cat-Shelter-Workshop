const router = require('express').Router();
const { getAllCats, getSearchedResult } = require('../services/homePageServices');

const renderHomePage = (req, res) => {
    const data = {
        homepage: true, 
        cats: getAllCats()
    }
    res.render('home/index', data);
}

const showSearchedCats = (req, res) => {
    const data = {
        homepage: true, 
        cats: getSearchedResult(req.query.search)
    }
    res.render('home/index', data)
}

router.get('/', renderHomePage);
router.get('/search', showSearchedCats);


module.exports = router;