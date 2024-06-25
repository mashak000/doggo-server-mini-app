const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Duration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'duration' });
    }
  }
  Duration.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Duration',
    },
  );
  return Duration;
};
