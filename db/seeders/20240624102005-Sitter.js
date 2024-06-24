/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Sitters',
      [
        {
          firstName: 'Анна',
          lastName: 'Старшова',
          about:
            'Анна - ситтер с большим опытом. Анна предоставит полноценный уход, кормление и выгул вашего питомца',
          status: 'sitter',
          orderCounter: 5,
        },

        {
          firstName: 'Иван',
          lastName: 'Петров',
          about:
            'Иван - опытный ситтер, который обеспечит заботу и внимание вашему питомцу',
          status: 'sitter',
          orderCounter: 10,
        },

        {
          firstName: 'Мария',
          lastName: 'Сидорова',
          about:
            'Мария любит животных и с радостью присмотрит за вашим питомцем',
          status: 'sitter',
          orderCounter: 3,
        },

        {
          firstName: 'Алексей',
          lastName: 'Смирнов',
          about:
            'Алексей - ответственный ситтер, который обеспечит безопасность и комфорт вашего питомца',
          status: 'sitter',
          orderCounter: 7,
        },

        {
          firstName: 'Екатерина',
          lastName: 'Иванова',
          about:
            'Екатерина с большой любовью и заботой будет ухаживать за вашим питомцем',
          status: 'sitter',
          orderCounter: 2,
        },

        {
          firstName: 'Дмитрий',
          lastName: 'Кузнецов',
          about:
            'Дмитрий - опытный ситтер, который обеспечит всестороннюю заботу о вашем питомце',
          status: 'sitter',
          orderCounter: 9,
        },

        {
          firstName: 'Ольга',
          lastName: 'Михайлова',
          about:
            'Ольга с радостью присмотрит за вашим питомцем и сделает все, чтобы ему было комфортно',
          status: 'sitter',
          orderCounter: 4,
        },

        {
          firstName: 'Андрей',
          lastName: 'Васильев',
          about:
            'Андрей - ответственный ситтер, который обеспечит безопасность и уход за вашим питомцем',
          status: 'sitter',
          orderCounter: 6,
        },

        {
          firstName: 'Татьяна',
          lastName: 'Павлова',
          about:
            'Татьяна с большой любовью и заботой будет ухаживать за вашим питомцем',
          status: 'sitter',
          orderCounter: 1,
        },

        {
          firstName: 'Сергей',
          lastName: 'Николаев',
          about:
            'Сергей - опытный ситтер, который обеспечит полноценный уход и внимание вашему питомцу',
          status: 'sitter',
          orderCounter: 8,
        },

        {
          firstName: 'Наталья',
          lastName: 'Соколова',
          about:
            'Наталья с радостью присмотрит за вашим питомцем и сделает все, чтобы ему было комфортно и весело',
          status: 'sitter',
          orderCounter: 5,
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
