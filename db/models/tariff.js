const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tariff extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'tariffId' });
    }
  }
  Tariff.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      about: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Tariff',
    },
  );
  return Tariff;
};
