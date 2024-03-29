/**
 * Add the data sources required by your project.
 * Example:

const { ustart } = require("ustart");

ustart.connect(process.env.PG_URI);
ustart.connect(process.env.MYSQL_URI);
ustart.connect(process.env.MONGO_URI);

 * To disable database model syncronization use:

ustart.setSync(false);

 * in this script. This is a temporary solution while the ustart models
 * generator is being implemented.
*/
const { ustart } = require("ustart");

// ustart.setSync(false);

ustart.connect(process.env.PG_URI, null);
