
module.exports = function(sequelize, DataTypes) {
// Creates a model that matches up with DB
var Animal_traits = sequelize.define("animal_trait", {
    animal: {
      type: DataTypes.STRING
    },
    trait_kids: {
      type: DataTypes.STRING
    },
    trait_active: {
      type: DataTypes.DATE
    }, 
    trait_security: {
      type: DataTypes.BOOLEAN
    }, 
    trait_independent: {
      type: DataTypes.BOOLEAN
    }, 
    trait_cuddly: {
      type: DataTypes.BOOLEAN
    }, 
    trait_large: {
      type: DataTypes.BOOLEAN
    },
    trait_medium: {
      type: DataTypes.BOOLEAN
    },
    trait_small: {
      type: DataTypes.BOOLEAN
    }

  });
  return Animal_traits;
}
