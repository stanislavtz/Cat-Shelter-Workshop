const router = require('express').Router();
const db = require('./utils/db.json');

const cats = Object.values(db.cats);
router.get('/', (req, res) => res.render('home/index', { cats }));
router.get('/add-breed', (req, res) => res.render('addBreed'));
router.get('/add-cat', (req, res) => res.render('addCat'));

module.exports = router;