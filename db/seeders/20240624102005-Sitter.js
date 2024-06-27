/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Sitters',
      [
        {
          firstName: 'Polina',
          lastName: '',
          about: "Your dog's new bestie, ready for all the walks and playtime!",
          status: 'senior sitter',
          orderCounter: 28,
          image:
            'https://drive.google.com/file/d/1aq69FYu5BV5uLxxsyiVzhSn2o7UIJiq4/view?usp=drive_link',
        },

        {
          firstName: 'Shura',
          lastName: 'Klepilina',
          about:
            'Here to make sure your dog has a tail-wagging great time with us!',
          status: 'handler',
          orderCounter: 36,
          image:
            'https://drive.google.com/file/d/1Tx92e2nebvYumLsY9aC72wFTdM6iQYRS/view?usp=drive_link',
        },

        {
          firstName: 'Lera',
          lastName: '',
          about:
            "Your go-to for making sure your pup has the best adventures while you're away!",
          status: 'sitter',
          orderCounter: 12,
          image:
            'https://drive.google.com/file/d/1Gh-sH6zUKiu5s434VJHMQddWsBz4PxbW/view?usp=drive_link',
        },

        {
          firstName: 'Sasha',
          lastName: 'Manakina',
          about:
            'Here to give your pup all the love and attention they deserve!',
          status: 'sitter',
          orderCounter: 7,
          image:
            'https://drive.google.com/file/d/1TntTM61dPZXL9FqCnJgqj_FkDr3mh_zm/view?usp=drive_link',
        },

        {
          firstName: 'Andrei',
          lastName: 'Muggadunn',
          about:
            "The energetic dog walker who's excited to meet your furry friend!",
          status: 'sitter',
          orderCounter: 2,
          image:
            'https://drive.google.com/file/d/1FiVRjX7_WRU4AXBiIiWhF6bZngCMgAEj/view?usp=drive_link',
        },

        // {
        //   firstName: 'Дмитрий',
        //   lastName: 'Кузнецов',
        //   about:
        //     'Дмитрий - опытный ситтер, который обеспечит всестороннюю заботу о вашем питомце',
        //   status: 'sitter',
        //   orderCounter: 9,
        // },

        // {
        //   firstName: 'Ольга',
        //   lastName: 'Михайлова',
        //   about:
        //     'Ольга с радостью присмотрит за вашим питомцем и сделает все, чтобы ему было комфортно',
        //   status: 'sitter',
        //   orderCounter: 4,
        // },

        // {
        //   firstName: 'Андрей',
        //   lastName: 'Васильев',
        //   about:
        //     'Андрей - ответственный ситтер, который обеспечит безопасность и уход за вашим питомцем',
        //   status: 'sitter',
        //   orderCounter: 6,
        // },

        // {
        //   firstName: 'Татьяна',
        //   lastName: 'Павлова',
        //   about:
        //     'Татьяна с большой любовью и заботой будет ухаживать за вашим питомцем',
        //   status: 'sitter',
        //   orderCounter: 1,
        // },

        // {
        //   firstName: 'Сергей',
        //   lastName: 'Николаев',
        //   about:
        //     'Сергей - опытный ситтер, который обеспечит полноценный уход и внимание вашему питомцу',
        //   status: 'sitter',
        //   orderCounter: 8,
        // },

        // {
        //   firstName: 'Наталья',
        //   lastName: 'Соколова',
        //   about:
        //     'Наталья с радостью присмотрит за вашим питомцем и сделает все, чтобы ему было комфортно и весело',
        //   status: 'sitter',
        //   orderCounter: 5,
        // },
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
