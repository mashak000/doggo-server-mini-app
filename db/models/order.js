const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Dog, Tariff, SitterRating, Sitter }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Dog, { foreignKey: 'dogId' });
      this.belongsTo(Sitter, { foreignKey: 'sitterId' });
      this.belongsTo(Tariff, { foreignKey: 'tariffId' });
      this.belongsTo(SitterRating, { foreignKey: 'sitterRating' });
    }
  }
  Order.init(
    {
      userId: DataTypes.INTEGER,
      sitterId: DataTypes.INTEGER,
      dogId: DataTypes.INTEGER,
      tariffId: DataTypes.INTEGER,
      startTime: DataTypes.STRING,
      endTime: DataTypes.STRING,
      date: DataTypes.STRING,
      sitterRating: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
