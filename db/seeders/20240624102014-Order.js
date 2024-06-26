/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
          userId: 164868091,
          sitterId: 4,
          dogId: 1,
          tariffId: 3,
          orderDate: '12.05.24',
        },
        {
          userId: 164868091,
          sitterId: 1,
          dogId: 1,
          tariffId: 5,
          orderDate: '20.09.24',
        },
        {
          userId: 164868091,
          sitterId: 2,
          dogId: 1,
          tariffId: 4,
          orderDate: '31.09.24',
        },
        {
          userId: 164868091,
          sitterId: 1,
          dogId: 1,
          tariffId: 2,
          orderDate: '29.08.24',
        },
        {
          userId: 164868091,
          sitterId: 3,
          dogId: 1,
          tariffId: 1,
          orderDate: '31.08.24',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
