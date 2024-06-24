/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tariffs',
      [
        {
          name: 'Sitting / boarding',
          price: 500,
          about:
            "The specialist can either sit in the pet owner's home or take the dog with them and follow the usual routine. Sitter",
        },
        {
          name: 'Walking',
          price: 1500,
          about: 'As much time as the dog needs.',
        },
        {
          name: 'Social walk',
          price: 1500,
          about:
            'A walk where dogs and their owners learn to communicate properly with each other.',
        },
        {
          name: 'Individual',
          price: 2000,
          about:
            'A walk where dogs and their owners learn to communicate properly with each other.',
        },
        {
          name: 'Back_to_nature',
          price: 2000,
          about:
            'A specialist takes a dog on a nature walk, providing a chance to relax and escape from the stresses of city life.',
        },
        {
          name: 'Consultation',
          price: 2000,
          about:
            'The specialist assists both the owner and the dog to live comfortably, safely, and happily.',
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
