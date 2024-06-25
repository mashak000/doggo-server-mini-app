/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Durations',
      [
        { name: '1-2 hours' },
        { name: '3-5 hours' },
        { name: '6-12 hours' },
        { name: '12-24 hours' },
        { name: '2-3 days' },
        { name: '5-7 days' },
        { name: '7-14 days' },
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
