import Sequelize from "sequelize";
import { ustart } from "ustart";

ustart.defineModel("postgres","comuna", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  name: { type: Sequelize.STRING(50) },
}, {
  timestamps: false
});
