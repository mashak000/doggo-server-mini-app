const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sitter extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'sitterId' });
    }
  }
  Sitter.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      about: DataTypes.TEXT,
      status: DataTypes.STRING,
      orderCounter: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Sitter',
    },
  );
  return Sitter;
};
