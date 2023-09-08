const { DataTypes, Model } = require("sequelize");

const SEAT_TYPE_TABLE = "seat_types";

const SeatTypeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}

class SeatType extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SEAT_TYPE_TABLE,
      modelName: 'SeatType',
      timestamps: false
    }
  }
}

module.exports = {SEAT_TYPE_TABLE, SeatTypeSchema, SeatType}
