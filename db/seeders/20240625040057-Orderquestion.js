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
          type: 'select',
        },
        {
          question: 'Select tariff',
          placeholder: 'Senior sitter',
          theme: 'order',
          name: 'tariff',
          type: 'select',
        },
        {
          question: 'Select date',
          placeholder: '19.06.2024',
          theme: 'order',
          name: 'orderDate',
          type: 'select',
        },
        {
          question: 'Select duration',
          placeholder: '5 hours',
          theme: 'order',
          name: 'duration',
          type: 'select',
        },
        {
          question: 'Your address',
          placeholder: 'Tbilisi, Rustaveli street, 5',
          theme: 'order',
          name: 'address',
          type: 'input',
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
