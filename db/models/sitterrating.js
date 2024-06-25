const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SitterRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'sitterRating' });
    }
  }
  SitterRating.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'SitterRating',
    },
  );
  return SitterRating;
};
