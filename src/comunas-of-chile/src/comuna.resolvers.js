import { Op } from "sequelize";

const comunaResolvers = {
  Query: {
    allComunas(root, args, { ustart }) {
      return ustart.models.comuna.findAll({
        order: [["id", "ASC"]]
      });
    },
    comunasByRegion(root, args, { ustart }) {
      const { regionId } = args;
      return ustart.models.comuna.findAll({
        where: { regionId: { [Op.eq]: regionId } },
        order: [["name", "ASC"]]
      });
    }
  }
};

export default comunaResolvers;
