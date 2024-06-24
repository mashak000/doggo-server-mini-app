'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dog.init({
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    health: DataTypes.TEXT,
    charachter: DataTypes.TEXT,
    vaccinated: DataTypes.BOOLEAN,
    parasites: DataTypes.BOOLEAN,
    sterilized: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};