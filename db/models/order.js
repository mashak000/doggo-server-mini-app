const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Dog, Tariff, SitterRating, Duration, Sitter }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Dog, { foreignKey: 'dogId' });
      this.belongsTo(Sitter, { foreignKey: 'sitterId' });
      this.belongsTo(Tariff, { foreignKey: 'tariffId' });
      this.belongsTo(SitterRating, { foreignKey: 'sitterRating' });
      this.belongsTo(Duration, { foreignKey: 'duration' });
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
      sitterRating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
