/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Orderquestions',
      [
        {
          question: 'Select option',
          placeholder: 'Walk',
          theme: 'order',
          name: 'option',
        },
        {
          question: 'Select tariff',
          placeholder: 'Senior sitter',
          theme: 'order',
          name: 'tariff',
        },
        {
          question: 'Select date',
          placeholder: '19.06.2024',
          theme: 'order',
          name: 'orderDate',
        },
        {
          question: 'Select duration',
          placeholder: '5 hours',
          theme: 'order',
          name: 'duration',
        },
        {
          question: 'Your address',
          placeholder: 'Tbilisi, Rustaveli street, 5',
          theme: 'order',
          name: 'address',
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
