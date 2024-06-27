/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Sitters',
      [
        {
          firstName: 'Polina',
          lastName: '',
          about:
            "Your dog's new bestie, ready for all the walks and playtime!",
          status: 'senior sitter',
          orderCounter: 28,
          image: 'https://highlysensitiverefuge.com/wp-content/uploads/2022/10/why-highly-sensitive-people-have-a-special-connection-to-animals.jpg',
        },

        {
          firstName: 'Shura',
          lastName: 'Klepilina',
          about:
            'Here to make sure your dog has a tail-wagging great time with us!',
          status: 'handler',
          orderCounter: 36,
          image: 'https://people.com/thmb/TqRgcEn65STk2WOu3f4ZWf5vBPU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x584:961x586)/dog-e10b5a9331054f2cafc93d2b6eec918a.jpg'
        },

        {
          firstName: 'Lera',
          lastName: '',
          about:
            "Your go-to for making sure your pup has the best adventures while you're away!",
          status: 'sitter',
          orderCounter: 12,
          image: 'https://t3.ftcdn.net/jpg/01/80/85/16/360_F_180851624_5jvAslMGfdGeunZD92tglYgnJEnvdxOY.jpg',
        },

        {
          firstName: 'Sasha',
          lastName: 'Manakina',
          about:
            'Here to give your pup all the love and attention they deserve!',
          status: 'sitter',
          orderCounter: 7,
          image: 'https://media.istockphoto.com/id/1350689855/photo/portrait-of-an-asian-man-holding-a-young-dog.jpg?s=612x612&w=0&k=20&c=Iw0OedGHrDViIM_6MipHmPLlo83O59by-LGcsDPyzwU=',
        },

        {
          firstName: 'Andrei',
          lastName: 'Muggadunn',
          about:
            "The energetic dog walker who's excited to meet your furry friend!",
          status: 'sitter',
          orderCounter: 2,
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
