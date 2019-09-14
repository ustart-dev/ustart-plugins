import { Op } from "sequelize";

const parameterResolvers = {
  Query: {
    allParameter(root, args, { ustart }) {
      return ustart.models.parameter.findAll({
        order: [
          ["id", "ASC"]
        ]
      });
    },
    parameter(root, args, { ustart }) {
      return ustart.models.parameter.findByPk(args.id);
    }
  },
  Mutation: {
    editParameter: async (root, args, { ustart }) => {
      const result = await ustart.models.parameter.update(
        { value: args.value },
        { where: {
          id: {
            [Op.eq]: args.id
          }
        } }
      );

      return ustart.models.parameter.findByPk(args.id);
    },
  }
};

export default parameterResolvers;
