/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: 'What kind of service do you need?',
          theme: 'order',
          name: 'tariffId',
          type: 'select',
          optionsValues: [1, 2, 3, 4, 5, 6, 7],
          optionsText: [
            'Walk my dog',
            'Sitting with my dog (at my home)',
            'Social walk',
            'Individual care',
            "Respite care (at sitter's home)",
            'Back to nature',
            'Consultation with zoopsychologist',
          ],
        },
        {
          question: 'Select the rate of sitter',
          theme: 'order',
          name: 'sitterRating',
          type: 'select',
          optionsValues: [1, 2, 3],
          optionsText: ['Sitter', 'Senior sitter', 'Zoopsychologist'],
        },
        {
          question: 'Provide date',
          placeholder: '19.06.2024',
          theme: 'order',
          name: 'orderDate',
          type: 'input',
        },
        {
          question: 'How many hours/days you need our services for?',
          theme: 'order',
          name: 'duration',
          type: 'select',
          optionsValues: [1, 2, 3, 4, 5, 6, 7],
          optionsText: [
            '1-2 hours',
            '3-5 hours',
            '6-12 hours',
            '12-24 hours',
            '2-3 days',
            '5-7 days',
            '7-14 days',
          ],
        },
        {
          question: 'Provide your address',
          placeholder: 'Tbilisi, Rustaveli street, 5',
          theme: 'order',
          name: 'address',
          type: 'textarea',
        },

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
          theme: 'dog',
          name: 'parasites',
          type: 'boolean',
        },
        {
          question: 'Is your dog neutered?',
          theme: 'dog',
          name: 'sterilized',
          type: 'boolean',
        },
        {
          question: 'Is your dog vaccinated?',
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
