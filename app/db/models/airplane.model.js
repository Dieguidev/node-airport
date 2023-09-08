const { DataTypes, Model } = require("sequelize");

const AIRPLANE_TABLE = "airplanes";

const AirplaneSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
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

class Airplane extends Model {
  static associate() {
    // this.hasMany(models.Booking, {
    //   as: 'bookings',
    //   foreignKey: 'airplaneId'
    // });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AIRPLANE_TABLE,
      modelName: 'Airplane',
      timestamps: false
    }
  }
}

module.exports = { AIRPLANE_TABLE, AirplaneSchema, Airplane }
