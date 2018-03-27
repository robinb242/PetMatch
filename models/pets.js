module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_shelter: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_email: {
            type: DataTypes.STRING
        },
        liked: {
            type: DataTypes.BOOLEAN
        },
        pet_photo: {
            type: DataTypes.STRING
        }
    });
    return Pet;
  }

  