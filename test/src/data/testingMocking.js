import { ustart } from "ustart";
import { populateParametersTestingSync } from "../plugins/parameters/src/data/populate";

/**
 * Populates the databases at starting time only with NODE_ENV set to "TESTING".
 * Use it for testing purposes.
 */
export async function testingMocking() {
  // Add your testing population data here...
  populateParametersTestingSync();
};
