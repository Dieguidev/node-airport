'use strict';

const { AIRPLANE_TABLE, AirplaneSchema } = require('../models/airplane.model');
const { FLIGHT_TABLE, FlightSchema } = require('../models/flight.model');
const { PURCHASE_TABLE, PurchaseSchema } = require('../models/purchase.model');
const { SEAT_TABLE, SeatSchema } = require('../models/seat.model');
const { SEAT_TYPE_TABLE, SeatTypeSchema } = require('../models/seatType.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(AIRPLANE_TABLE, AirplaneSchema);
    await queryInterface.createTable(FLIGHT_TABLE, FlightSchema);
    await queryInterface.createTable(PURCHASE_TABLE, PurchaseSchema);
    await queryInterface.createTable(SEAT_TABLE, SeatSchema);
    await queryInterface.createTable(SEAT_TYPE_TABLE, SeatTypeSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(AIRPLANE_TABLE);
    await queryInterface.dropTable(FLIGHT_TABLE);
    await queryInterface.dropTable(PURCHASE_TABLE);
    await queryInterface.dropTable(SEAT_TABLE);
    await queryInterface.dropTable(SEAT_TYPE_TABLE);
  }
}
