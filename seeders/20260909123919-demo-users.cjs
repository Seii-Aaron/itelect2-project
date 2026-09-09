'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    const admin = await bcrypt.hash('admin123', 10);
    const member = await bcrypt.hash('member123', 10);

    await queryInterface.bulkInsert('Users', [
      { email: 'admin@taskmanager.test', password: admin, role: 'admin',
        createdAt: now, updatedAt: now },
      { email: 'member@taskmanager.test', password: member, role: 'member',
        createdAt: now, updatedAt: now }
    ]);
  },

 
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
