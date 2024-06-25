const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dogquestion extends Model {
    static associate(models) {}
  }
  Dogquestion.init(
    {
      question: DataTypes.TEXT,
      placeholder: DataTypes.STRING,
      theme: DataTypes.STRING,
      name: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Dogquestion',
    },
  );
  return Dogquestion;
};
