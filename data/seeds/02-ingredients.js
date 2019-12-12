exports.seed = function(knex) {

  return knex('ingredients').insert([
    {id: 1, ingredient_name: 'Macaroni Noodles'},
    {id: 2, ingredient_name: 'Ground Beef'},
    {id: 3, ingredient_name: 'Cheddar Cheese'},
    {id: 4, ingredient_name: 'Whole Milk'},
    {id: 5, ingredient_name: 'Hamburger Buns'},
    {id: 6, ingredient_name: 'Butter'},
  ]);
};
