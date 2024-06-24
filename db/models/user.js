const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Dog, Order }) {
      this.hasMany(Dog, { foreignKey: 'userId' });
      this.hasMany(Order, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      tgId: DataTypes.BIGINT,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      languageCode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
