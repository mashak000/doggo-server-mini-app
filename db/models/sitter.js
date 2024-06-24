'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sitter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sitter.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    about: DataTypes.TEXT,
    status: DataTypes.STRING,
    orderCounter: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sitter',
  });
  return Sitter;
};