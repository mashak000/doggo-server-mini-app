/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Dogs',
      [
        {
          name: 'Брэд',
          breed: 'Лабрадор',
          age: 1,
          health: 'Здоров',
          charachter: 'Игривый, беспокойный',
          vaccinated: true,
          parasites: false,
          sterilized: true,
          userId: 1,
        },
        {
          name: 'Мисти',
          breed: 'Шпиц',
          age: 2,
          health: 'Здорова',
          charachter: 'Тихая, спокойная',
          vaccinated: true,
          parasites: false,
          sterilized: true,
          userId: 1,
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
