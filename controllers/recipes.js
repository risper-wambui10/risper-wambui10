const express = require('express');
const Recipe = require('../models/recipes');

const router = express.Router();

// GET all recipes
router.get('/', (req, res) => {
  Recipe.find({})
    .then((recipes) => res.json(recipes))
    .catch((error) => res.status(500).json({ error: error.message }));
});

// POST a new recipe
router.post('/', (req, res) => {
  const recipe = new Recipe(req.body);
  recipe.save()
    .then((result) => res.status(201).json(result))
    .catch((error) => res.status(500).json({ error: error.message }));
});

module.exports = router;
