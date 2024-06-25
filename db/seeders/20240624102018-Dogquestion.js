/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Dogquestions',
      [
        {
          question: 'The dog name',
          placeholder: 'Charlie',
          theme: 'dog',
          name: 'name',
          type: 'input',
        },
        {
          question: 'The dog breed',
          placeholder: 'Labrador',
          theme: 'dog',
          name: 'breed',
          type: 'input',
        },
        {
          question: 'The dog age (in years)',
          placeholder: 5,
          theme: 'dog',
          name: 'age',
          type: 'input',
        },
        {
          question:
            'Does the dog have any chronic illnesses? Is he taking medication on a regular basis?',
          placeholder:
            'The dog has an allergy to certain ingredients in Royal Canin dog food and requires regular medication.',
          theme: 'dog',
          name: 'health',
          type: 'textarea',
        },
        {
          question:
            "Describe the character of the dog and it's behavioural traits.",
          placeholder:
            'Playful and energetic, sometimes may be loud and is afraid of cats.',
          theme: 'dog',
          name: 'character',
          type: 'textarea',
        },
        {
          question: 'Is the dog treated for parasites, fleas, ticks?',
          placeholder: '',
          theme: 'dog',
          name: 'parasites',
          type: 'boolean',
        },
        {
          question: 'Is your dog neutered?',
          placeholder: '',
          theme: 'dog',
          name: 'sterilized',
          type: 'boolean',
        },
        {
          question: 'Is your dog vaccinated?',
          placeholder: '',
          theme: 'dog',
          name: 'vaccinated',
          type: 'boolean',
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
