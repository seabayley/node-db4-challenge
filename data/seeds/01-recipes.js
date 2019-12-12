
exports.seed = function(knex) {

  return knex('recipes').insert([
    {id: 1, recipe_name: 'Macaroni And Cheese'},
    {id: 2, recipe_name: 'MeatLoaf'},
    {id: 3, recipe_name: 'Cheeseburgers'}
  ]);
};
