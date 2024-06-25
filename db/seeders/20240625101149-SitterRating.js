/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'SitterRatings',
      [
        {
          name: 'Sitter',
          description:
            'The specialist completed training courses and passed a knowledge exam on how to walk and communicate with dogs correctly.',
        },
        {
          name: 'Senior sitter',
          description:
            'A specialist with additional qualifications and a superpower in working with behavioral characteristics of dogs, such as phobia, aggression, and reactivity.',
        },
        {
          name: 'Zoopsychologist',
          description:
            'A zoopsychologist who helps to resolve communication difficulties between a dog owner and their pet.',
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
