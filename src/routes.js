const router = require('express').Router();

router.get('/', (req, res) => res.render('home/index'));
router.get('/add-breed', (req, res) => res.render('addBreed'));
router.get('/add-cat', (req, res) => res.render('addCat'));

module.exports = router;