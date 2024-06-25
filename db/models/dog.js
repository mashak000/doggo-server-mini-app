const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    static associate({ User, Order }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Order, { foreignKey: 'dogId' });
    }
  }
  Dog.init(
    {
      name: DataTypes.STRING,
      breed: DataTypes.STRING,
      age: DataTypes.INTEGER,
      health: DataTypes.TEXT,
      character: DataTypes.TEXT,
      vaccinated: DataTypes.BOOLEAN,
      parasites: DataTypes.BOOLEAN,
      sterilized: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Dog',
    },
  );
  return Dog;
};
