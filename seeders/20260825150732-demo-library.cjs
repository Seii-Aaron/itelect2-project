'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Tasks', [
      { title: 'Clean the House', dueDate: '2026-09-22', completed: false,
        userId: 1, createdAt: now, updatedAt: now },
      { title: 'Do Modules', dueDate: '2026-09-22', completed: false,
        userId: 1, createdAt: now, updatedAt: now },
      { title: 'Feed the Cat', dueDate: '2026-09-22', completed: false,
        userId: 2, createdAt: now, updatedAt: now },
      { title: 'Wash the Clothes', dueDate: '2026-09-22', completed: false,
        userId: 2, createdAt: now, updatedAt: now },
      { title: 'Sleep Early', dueDate: '2026-09-22', completed: false,
        userId: 2, createdAt: now, updatedAt: now }
    ])
  },

  async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Tasks', null, {});
  }
};
