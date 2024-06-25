const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Dog, Tariff, SitterRating, Duration }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Dog, { foreignKey: 'dogId' });
      this.belongsTo(Tariff, { foreignKey: 'tariffId' });
      this.belongsTo(SitterRating, { foreignKey: 'sitterRating' });
      this.belongsTo(Duration, { foreignKey: 'duration' });
    }
  }
  Order.init(
    {
      userId: DataTypes.INTEGER,
      dogId: DataTypes.INTEGER,
      tariffId: DataTypes.INTEGER,
      orderDate: DataTypes.STRING,
      duration: DataTypes.STRING,
      sitterRating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
