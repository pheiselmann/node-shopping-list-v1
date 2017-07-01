
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//import models from models.js module

const {ShoppingList} = require('./models');

const {Recipes} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// we're going to add some items to ShoppingList
// so there's some data to look at
ShoppingList.create('beans', 2);
ShoppingList.create('tomatoes', 3);
ShoppingList.create('peppers', 4);

// we're going to add some items to Recipes
// so there's some data to look at

Recipes.create('chocolate milk', ['cocoa', 'milk', 'sugar']);
Recipes.create('root beer float', ['vanilla ice cream', 'root beer']);
Recipes.create('smores', ['graham crackers,', 'marshmallows', 'chocolate bars']);

// when the root of this router is called with GET, return
// all current ShoppingList items
app.get('/shopping-list', (req, res) => {
  res.json(ShoppingList.get());
});

// when the root of this router is called with GET, return
// all current ShoppingList items

app.get('/recipes', (req, res) => {
  res.json(Recipes.get());
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
