/**
 * Define Sequelize associations in this script.
 * Example: A user belongs to a region and a region has many users.

import { ustart } from "ustart";

const {
  user,
  region
} = ustart.models;

user.belongsTo(region);
region.hasMany(user);
*/
import { ustart } from "ustart";

const {
  region,
  comuna
} = ustart.models;

region.hasMany(comuna);
comuna.belongsTo(region);
