const allParameterQuery = `
query {
  allParameter {
    id,
    value,
    type
  }
}
`;

const parameterQuery = `
  query parameter ($id: String!) {
    parameter (id: $id) {
      id,
      value,
      type
    }
  }
`;

const editParameterMutation = `
  mutation editParameter ($id: String!, $value: String!) {
    editParameter (id: $id, value: $value) {
      id,
      value,
      type
    }
  }
`;

let client = null;

beforeAll(async () => {
  client = TestingUtils.getGraphQLClient();
});

describe("Parameters plugins", () => {
  describe("Queries", () => {
    test("allParameter", async () => {
      const response = await client.request(allParameterQuery);
      // Case 1: allParameter must be an array
      expect(Array.isArray(response.allParameter)).toBe(true);
      // Case 2: there are 3 results (testing)
      expect(response.allParameter).toHaveLength(3);
    });

    test("Query: parameter", async () => {
      const expectedObj = {
        parameter: {
          id: "languagePreference",
          value: "en",
          type: "String"
        }
      };

      await expect(
        client.request(parameterQuery, { id: expectedObj.parameter.id })
      ).resolves.toMatchObject(expectedObj);
    });
  });

  describe("Mutations", () => {

    test("editParameter", async () => {
      // Obj before modification
      const expectedObj_1 = {
        parameter: {
          id: "enableSection1",
          value: "false",
          type: "Boolean",
        }
      };
      // Obj for edit mutation
      const expectedObj_2 = {
        editParameter: {
          id: "enableSection1",
          value: "true",
          type: "Boolean",
        }
      };
      // Obj post modification
      const expectedObj_3 = {
        parameter: {
          id: "enableSection1",
          value: "true",
          type: "Boolean",
        }
      };

      // Case 1: Check before modification
      await expect(
        client.request(parameterQuery, { id: expectedObj_1.parameter.id })
      ).resolves.toMatchObject(expectedObj_1);

      // Case 2: Edit parameter
      await expect(
        client.request(editParameterMutation, {
          id: expectedObj_1.parameter.id,
          value: expectedObj_2.editParameter.value
        })
      ).resolves.toMatchObject(expectedObj_2);

      // Case 3: Check post modification
      await expect(
        client.request(parameterQuery, { id: expectedObj_1.parameter.id })
      ).resolves.toMatchObject(expectedObj_3);

      // Case 4: Restore default value
      await expect(
        client.request(editParameterMutation, {
          id: expectedObj_1.parameter.id,
          value: expectedObj_1.parameter.value
        })
      ).resolves;
    });

  });
});
