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
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      optionsValues: DataTypes.ARRAY(DataTypes.INTEGER),
      optionsText: DataTypes.ARRAY(DataTypes.TEXT),
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );
  return Question;
};
