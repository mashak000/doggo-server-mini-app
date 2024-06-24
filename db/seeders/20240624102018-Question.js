/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: 'The dog name',
          placeholder: 'Charlie',
          theme: 'dog',
        },
        {
          question: 'The dog breed',
          placeholder: 'Labrador',
          theme: 'dog',
        },
        {
          question: 'The dog age (in years)',
          placeholder: 5,
          theme: 'dog',
        },
        {
          question:
            'Does the dog have any chronic illnesses? Is he taking medication on a regular basis?',
          placeholder:
            'The dog has an allergy to certain ingredients in Royal Canin dog food and requires regular medication.',
          theme: 'dog',
        },
        {
          question:
            "Describe the charachter of the dog and it's behavioural traits.",
          placeholder:
            'Playful and energetic, sometimes may be loud and is afraid of cats.',
          theme: 'dog',
        },
        {
          question: 'Is the dog treated for parasites, fleas, ticks?',
          placeholder: 'yes',
          theme: 'dog',
        },
        {
          question: 'Is your dog neutered?',
          placeholder: 'yes',
          theme: 'dog',
        },
        {
          question: 'Is your dog vaccinated?',
          placeholder: 'yes',
          theme: 'dog',
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
