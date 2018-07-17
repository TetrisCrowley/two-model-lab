const express = require('express');
const router = express.Router();
const Brand = require('../models/videogames');

// Index
router.get('/', (req, res) => {
  Brand.find({}, (err, foundBrands) => {
    res.render('brands/index.ejs', {
      brands: foundBrands
    });
  });
});

// New
router.get('/new', (req, res) => {
  res.render('brands/new.ejs')
});

// Show
router.get('/:id', (req, res) => {
  Brand.findById(req.params.id, (err, foundBrand) => {
    res.render('brands/show.ejs', {
      brand: foundBrand
    });
  });
});

// Create
router.post('/', (req, res) => {
  Brand.create(req.body, (err, createdBrand) => {
    res.redirect('/brands');
  });
});

// Delete


// Edit




module.exports = router;