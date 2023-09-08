const { models } = require('../libs/sequelize');

class PassengerService {
  constructor() {}
  async create(data) {
    return data;
  }
  async find() {
    const passengers = await models.Passenger.findAll();
    return passengers;
  }
  async findOne(id) {
    return { id };
  }
  async update(id, changes) {
    return { id, changes };
  }
  async delete(id) {
    return { id };
  }
}
module.exports = PassengerService;
