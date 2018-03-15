// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Animal_traits = sequelize.define("animal_traits", {
  animal: {
    type: Sequelize.STRING
  },
  trait_kids: {
    type: Sequelize.STRING
  },
  trait_active: {
    type: Sequelize.DATE
  }, 
  trait_security: {
    type: Sequelize.BOOLEAN
  }, 
  trait_independent: {
    type: Sequelize.BOOLEAN
  }, 
  trait_cuddly: {
    type: Sequelize.BOOLEAN
  }, 
   trait_large: {
    type: Sequelize.BOOLEAN
  },
   trait_medium: {
    type: Sequelize.BOOLEAN
  },
   trait_small: {
    type: Sequelize.BOOLEAN
  },
{
  timestamps: false
}
});

// Syncs with DB
PetMatch.sync();

// Makes the Chp Model available for other files (will also create a table)
module.exports = PetMatch;
