/**
 * Populates the databases at starting time. It is called automatically by the framework.
*/
import { populateRegionsSync } from "../plugins/regions-of-chile/src/data/populate";
import { populateComunasSync } from "../plugins/comunas-of-chile/src/data/populate";

export async function populateBasicData() {
  // Add your basic data population here...
  populateRegionsSync();
  populateComunasSync();
};
