exports.seed = function(knex) {

  return knex('steps').insert([
    {
      id: 1,
      step_number: 1,
      step_name: 'Boil Water',
      step_instructions: 'Bring a pot of water to a boil.',
      recipe_id: 1
    },
    {
      id: 2,
      step_number: 2,
      step_name: 'Add Noodles',
      step_instructions: 'Put your macaroni noodles in the pot of boiling water.',
      recipe_id: 1
    },
  ]);
};