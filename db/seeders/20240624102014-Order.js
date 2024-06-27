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
          startTime: '09:00',
          endTime: '12:00',
          date: '2024-06-26',
        },
        {
          userId: 164868091,
          sitterId: 1,
          dogId: 1,
          tariffId: 5,
          startTime: '09:00',
          endTime: '12:00',
          date: '2024-06-26',
        },
        {
          userId: 164868091,
          sitterId: 2,
          dogId: 1,
          tariffId: 4,
          startTime: '09:00',
          endTime: '12:00',
          date: '2024-06-26',
        },
        {
          userId: 164868091,
          sitterId: 1,
          dogId: 1,
          tariffId: 2,
          startTime: '09:00',
          endTime: '12:00',
          date: '2024-06-26',
        },
        {
          userId: 164868091,
          sitterId: 3,
          dogId: 1,
          tariffId: 1,
          startTime: '09:00',
          endTime: '12:00',
          date: '2024-06-26',
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
