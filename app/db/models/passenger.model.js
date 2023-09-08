const { DataTypes, Model } = require("sequelize");


const PASSENGER_TABLE = 'passengers';

const PassengerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  dni: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  age: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  country: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}

class Passenger extends Model {
  static associate() {
    // this.belongsToMany(models.Booking, {
    //   as: 'bookings',
    //   through: models.BookingPassenger,
    //   foreignKey: 'passengerId',
    //   otherKey: 'bookingId'
    // })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PASSENGER_TABLE,
      modelName: 'Passenger',
      timestamps: false
    }
  }
}

module.exports = { PASSENGER_TABLE, PassengerSchema, Passenger }
