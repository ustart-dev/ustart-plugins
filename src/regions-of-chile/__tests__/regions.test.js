const allRegionsQuery = `
query {
  allRegions {
    id,
    name
  }
}
`;

let client = null;

beforeAll(async () => {
  client = TestingUtils.getGraphQLClient();
});

describe("Regions plugins", () => {
  test("Query: allRegions", async () => {
    const response = await client.request(allRegionsQuery);
    // Case 1: allRegions must be an array
    expect(Array.isArray(response.allRegions)).toBe(true);
    // Case 2: there are 16 regions
    expect(response.allRegions).toHaveLength(16);
  });
});
