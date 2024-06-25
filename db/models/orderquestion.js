const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orderquestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orderquestion.init(
    {
      question: DataTypes.TEXT,
      placeholder: DataTypes.STRING,
      theme: DataTypes.STRING,
      name: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Orderquestion',
    },
  );
  return Orderquestion;
};
