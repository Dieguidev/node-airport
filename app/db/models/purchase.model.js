const { DataTypes, Model } = require("sequelize");

const PURCHASE_TABLE = "purchase";

const PurchaseSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  purchaseDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "purchase_date",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}

class Purchase extends Model {
  static associate() {
    // this.belongsTo(models.User, { as: "user" });
    // this.belongsTo(models.Airplane, { as: "airplane" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PURCHASE_TABLE,
      modelName: "Purchase",
      timestamps: false
    }
  }
}

module.exports = { PURCHASE_TABLE, PurchaseSchema, Purchase };
