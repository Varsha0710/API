'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('staffs',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoincrement: true,
        primaryKey: true,
      },
      name:{
        type: Sequelize.STRING
      },
      mobile_number: {
        type: Sequelize.STRING
      },
      email_id:{
        type: Sequelize.BIGINT
      },
      employee_code:{
        type: Sequelize.INTEGER
      },
      status:{
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('staffs');
  }
};
