module.exports = function(sequelize, DataTypes) {
// Creates a model that matches up with DB
var User_answers = sequelize.define("user_answers", {
    user_name: {
      type: DataTypes.STRING
    }, 
    user_zip: {
      type: DataTypes.INTEGER
    },
    trait_kids {
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
      trait_unconventional: {
      type: DataTypes.BOOLEAN
    }

  });
  
return User_answers;
}



