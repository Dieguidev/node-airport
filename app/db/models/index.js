const { Passenger, PassengerSchema } = require("./passenger.model");


function setupModels(sequelize){
  Passenger.init(PassengerSchema, Passenger.config(sequelize));
}

module.exports = setupModels;
