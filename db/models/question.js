const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {}
  }
  Question.init(
    {
      question: DataTypes.TEXT,
      placeholder: DataTypes.STRING,
      theme: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );
  return Question;
};
