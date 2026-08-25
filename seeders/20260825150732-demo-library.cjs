'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Users', [
      { name: 'John Doe', email: 'johndoe@library.test',
        createdAt: now, updatedAt: now },
      { name: 'Jane Doe', email: 'janedoe@library.test',
        createdAt: now, updatedAt: now },
      { name: 'Juan Dela Cruz', email: 'juandelacruz@library.test',
        createdAt: now, updatedAt: now }
    ])

    const users = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Users";',
      { type: Sequelize.QueryTypes.SELECT }
    );
    const idOf = (name) => users.find((a) => a.name === name).id;

    await queryInterface.bulkInsert('Tasks', [
      { title: 'Clean the House', dueDate: '2026-09-22', completed: false,
        userId: idOf('John Doe'), createdAt: now, updatedAt: now },
      { title: 'Do Modules', dueDate: '2026-09-22', completed: false,
        userId: idOf('John Doe'), createdAt: now, updatedAt: now },
      { title: 'Feed the Cat', dueDate: '2026-09-22', completed: false,
        userId: idOf('Jane Doe'), createdAt: now, updatedAt: now },
      { title: 'Wash the Clothes', dueDate: '2026-09-22', completed: false,
        userId: idOf('Jane Doe'), createdAt: now, updatedAt: now },
      { title: 'Sleep Early', dueDate: '2026-09-22', completed: false,
        userId: idOf('Juan Dela Cruz'), createdAt: now, updatedAt: now }
    ])
  },

  async down (queryInterface, Sequelize) {

  }
};
