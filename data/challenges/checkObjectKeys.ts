// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const checkObjectKeysSolution = `const hasKey = (obj, targetKey) => {
  return obj.hasOwnProperty(targetKey);
}`;

const hasKey = (obj: any, targetKey: string) => {
  return obj.hasOwnProperty(targetKey);
};

const checkObjectKeysTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function hasKey.",
    passed: typeof hasKey === "function",
    result: typeof hasKey,
  });
  testResults.push({
    test: "Function returns a boolean.",
    passed:
      typeof hasKey(
        { firstName: "Mark", lastName: "Mulligan" },
        "firstName"
      ) === "boolean",
    result: typeof hasKey(
      { firstName: "Mark", lastName: "Mulligan" },
      "firstName"
    ),
  });
  testResults.push({
    test: 'hasKey({ firstName: "Mark", lastName: "Mulligan" }, "firstName") returns true',
    passed:
      hasKey({ firstName: "Mark", lastName: "Mulligan" }, "firstName") === true,
    result: JSON.stringify(
      hasKey({ firstName: "Mark", lastName: "Mulligan" }, "firstName")
    ),
  });
  testResults.push({
    test: 'hasKey({ label: "Program on", value: "1" }, "labels") returns false',
    passed: hasKey({ label: "Program on", value: "1" }, "labels") === false,
    result: JSON.stringify(
      hasKey({ label: "Program on", value: "1" }, "labels")
    ),
  });
  testResults.push({
    test: 'hasKey({ dates: ["12-4-2022", "12-11-2022"], amounts: [10, 20] }, "dates") returns true',
    passed:
      hasKey(
        { dates: ["12-4-2022", "12-11-2022"], amounts: [10, 20] },
        "dates"
      ) === true,
    result: JSON.stringify(
      hasKey({ dates: ["12-4-2022", "12-11-2022"], amounts: [10, 20] }, "dates")
    ),
  });
  testResults.push({
    test: 'hasKey({ test: "Test", tester: "Tester" }, "testing") returns false',
    passed: hasKey({ test: "Test", tester: "Tester" }, "testing") === false,
    result: JSON.stringify(
      hasKey({ test: "Test", tester: "Tester" }, "testing")
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Check Key in Object",
  description:
    "Create a function that determines wether a given key exists in an object.",
  instructions:
    "Create a function called hasKey that takes in an object, and targetKey as a string.  The function should return a boolean value based on whether the given object contains the target key.",
  difficulty: 1,
  testScriptCode: createTestScriptString(checkObjectKeysTests),
  startingCode:
    "const hasKey = (obj, targetKey) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(checkObjectKeysTests()),
  problemExplanation:
    "Objects in javascript are made up of key, value pairs. In this case, we want to determine if a given key exists in a given object.",
  hints: [
    "the .hasOwnProperty(key: string) function can be called on objects in javascript.  It returns a boolean based on whether or not an object has a provided key.",
  ],
  solutionCode: checkObjectKeysSolution,
};

export default data;
