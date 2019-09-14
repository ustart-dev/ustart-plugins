import { ustart } from "ustart";
import { comunasData } from "./comunas";

export async function populateComunasSync() {
  const result = await ustart.models.comuna.findAndCountAll();
  if (result.count === 0) {
    ustart.models.comuna.bulkCreate(comunasData);
  }
};
