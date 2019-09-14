const regionResolvers = {
  Query: {
    allRegions(root, args, { ustart }) {
      return ustart.models.region.findAll({
        order: [
          ["id", "ASC"]
        ]
      });
    },
  },
};

export default regionResolvers;
