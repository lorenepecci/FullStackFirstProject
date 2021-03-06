'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable( 'PatientRegisters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      birthdate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
    } );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('PatientRegisters');
  }
};
