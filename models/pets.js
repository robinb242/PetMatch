module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        liked: {
            type: DataTypes.BOOLEAN
        }
    });
    return Pet;
  }