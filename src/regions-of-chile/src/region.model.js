import Sequelize from "sequelize";
import { ustart } from "ustart";

/**
 * The ID is set manually.
*/
ustart.defineModel("postgres", "region", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  name: { type: Sequelize.STRING(50) },
}, {
  timestamps: false
});
