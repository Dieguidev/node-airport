const { DataTypes, Model } = require("sequelize");

const SEAT_TABLE = "seats";

const SeatSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  seatColumn: {
    allowNull: false,
    type: DataTypes.STRING(2),
    field: "seat_column",
  },
  seatRow: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "seat_row",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}

class Seat extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SEAT_TABLE,
      modelName: "Seat",
      timestamps: false,
    };
  }
}

module.exports = { SEAT_TABLE, SeatSchema, Seat };
