import casual from "casual";
import {
  MockList
} from "graphql-tools";

const comunaMocks = {
  Comuna: () => ({
    id: casual.integer(1, 16),
    name: casual.state,
    region: null
  }),
  Query: {
    allComunas: () => new MockList(40),
  }
};

export default comunaMocks;
