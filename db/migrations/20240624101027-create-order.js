/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      sitterId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sitters',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      dogId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dogs',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      tariffId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tariffs',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      startTime: {
        type: Sequelize.STRING,
      },
      endTime: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
      },
      sitterRating: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};
