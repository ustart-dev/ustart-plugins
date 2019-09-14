import Sequelize from "sequelize";
import { ustart } from "ustart";

ustart.defineModel("postgres", "parameter", {
  id: {
    type: Sequelize.STRING(20),
    primaryKey: true,
    autoIncrement: false
  },
  value: { type: Sequelize.STRING },
  // type field is one of supported Javascript datatypes:
  //  Number, String, Boolean, Array, etc.
  // The goal is to support data conversion.
  type: { type: Sequelize.STRING },
});
