/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sitters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      about: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.STRING,
      },
      orderCounter: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.TEXT,
        defaultValue: 'https://babysweetpeasboutique.com/cdn/shop/products/image_1024x1024_2x_406aa399-18b0-4f04-8bfa-4bb4035a6d06.png?v=1632414694',
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
    await queryInterface.dropTable('Sitters');
  },
};
