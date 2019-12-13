const express = require('express');

const RecipeRouter = require('./routers/recipes.js');
const IngredientsRouter = require('./routers/ingredients')

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientsRouter)

module.exports = server;