/**
 * Seed for regions of Chile.
*/
import { ustart } from "ustart";
import { regionsData } from "./regions";

export async function populateRegionsSync() {
  const result = await ustart.models.region.findAndCountAll();
  if (result.count === 0) {
    ustart.models.region.bulkCreate(regionsData);
  }
};
