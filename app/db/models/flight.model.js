const { DataTypes, Model } = require("sequelize");

const FLIGHT_TABLE = "flights";

const FlightSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  takeoffDateTime: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "takeoff_date_time",
  },
  takeoffAirport: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "takeoff_airport",
  },
  landingDateTime: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "landing_date_time",
  },
  landingAirport: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "landing_airport",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }

}

class Flight extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FLIGHT_TABLE,
      modelName: "Flight",
      timestamps: false
    }
  }
}

module.exports = { FLIGHT_TABLE, FlightSchema, Flight };
