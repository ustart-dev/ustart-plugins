import { ustart } from "ustart";
import { parametersData, parametersDataTesting } from "./parameters";

export async function populateParametersSync() {
  const result = await ustart.models.parameter.findAndCountAll();
  if (result.count === 0) {
    ustart.models.parameter.bulkCreate(parametersData);
  }
};

export async function populateParametersTestingSync() {
  const result = await ustart.models.parameter.findAndCountAll();
  if (result.count === 0) {
    ustart.models.parameter.bulkCreate(parametersDataTesting);
  }
};
