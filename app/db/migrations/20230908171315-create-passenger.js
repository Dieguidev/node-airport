'use strict';
const {PASSENGER_TABLE, PassengerSchema} =require ('../models/passenger.model.js')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PASSENGER_TABLE, PassengerSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PASSENGER_TABLE);
  }
};
