import casual from "casual";
import { MockList } from "graphql-tools";

const regionMocks = {
  Region: () => ({
    id: casual.integer(1, 16),
    name: casual.state,
  }),
  Query: {
    allRegions: () => new MockList(16),
  }
};

export default regionMocks;
