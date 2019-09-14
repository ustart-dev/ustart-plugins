const allComunasQuery = `
query {
  allComunas {
    id,
    name
  }
}
`;

const comunasByRegion = `
  query comunasByRegion ($regionId: Int!) {
    comunasByRegion(regionId: $regionId) {
      id,
      name
    }
  }
`;

let client = null;

beforeAll(async () => {
  client = TestingUtils.getGraphQLClient();
});

describe("Comunas plugins", () => {
  test("Query: allComunas", async () => {
    const response = await client.request(allComunasQuery);
    // Case 1: allComunas must be an array
    expect(Array.isArray(response.allComunas)).toBe(true);
    // Case 2: there are 346 comunas in total
    expect(response.allComunas).toHaveLength(346);
  });

  // Retrieving comunas of region 5
  test("Query: comunasByRegion", async () => {
    const response = await client.request(comunasByRegion, { regionId: 5 });
    // Case 1: comunasByRegion must be an array
    expect(Array.isArray(response.comunasByRegion)).toBe(true);
    // Case 2: there are 38 comunas
    expect(response.comunasByRegion).toHaveLength(38);
  });
});
