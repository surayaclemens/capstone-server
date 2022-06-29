const morphemesData = require("../seed_data/phrases")
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
 return knex("morphemes").del()
 .then(()=>{
  return knex("morphemes").insert(morphemesData)
 })
};
