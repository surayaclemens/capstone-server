const morphemesData = require("../data/data.json")
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
