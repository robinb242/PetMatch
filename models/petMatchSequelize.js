
module.exports = function(sequelize, DataTypes) {
// Creates a model that matches up with DB
var Animal_traits = sequelize.define("animal_traits", {
    animal: {
      type: DataTypes.STRING
    },
    trait_kids: {
      type: DataTypes.BOOLEAN
    },
    trait_active: {
      type: DataTypes.BOOLEAN
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
    trait_space: {
      type: DataTypes.BOOLEAN
    },
    trait_size: {
      type: DataTypes.INTEGER
    },
    trait_affection: {
      type: DataTypes.INTEGER
    },
     trait_clean: {
      type: DataTypes.INTEGER
    },
      trait_unconverntional: {
      type: DataTypes.BOOLEAN
    }

  });
Animal_traits.synch();
  
return Animal_traits;
}

