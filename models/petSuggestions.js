module.exports = function(sequelize, DataTypes) {
// Creates a model that matches up with DB
var Pet_suggestions = sequelize.define("pet_suggestions", {
    user_name: {
      type: DataTypes.STRING
    }, 
    suggestion_one: {
      type:DataTypes.STRING
    },
    suggestion_two: {
      type:DataTypes.STRING
    }
    

  });
  
return User_answers;
}



