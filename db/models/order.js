const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Sitter, Dog, Tariff }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Sitter, { foreignKey: 'sitterId' });
      this.belongsTo(Dog, { foreignKey: 'dogId' });
      this.belongsTo(Tariff, { foreignKey: 'tariffId' });
    }
  }
  Order.init(
    {
      userId: DataTypes.INTEGER,
      sitterId: DataTypes.INTEGER,
      dogId: DataTypes.INTEGER,
      tariffId: DataTypes.INTEGER,
      orderDate: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
