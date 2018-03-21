module.exports = function(sequelize, DataTypes) {
// Creates a model that matches up with DB
var Site_evaluation = sequelize.define("site_evaluation", {
    user_name: {
      type: DataTypes.STRING
    }, 
    site-ranking: {
      type: DataTypes.INTEGER
    }
 

  });
  
return User_answers;
}



  