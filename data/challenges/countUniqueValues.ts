// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const countUniqueValuesSolution = `const countUnique = (arr) => {
  let result = {};

  arr.forEach((item) => {
    if (result.hasOwnProperty(item)) {
      result[item] = result[item] + 1;
    } else {
      result[item] = 1;
    }
  });

  return result;
};`;

function isPrimitive(obj: { [key: string]: any }) {
  return obj !== Object(obj);
}

const deepEqual = (
  obj1: { [key: string]: any },
  obj2: { [key: string]: any }
) => {
  if (obj1 === obj2) return true;

  if (isPrimitive(obj1) && isPrimitive(obj2)) return obj1 === obj2;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
};

const countUnique = (arr: any[]) => {
  const result: any = {};

  arr.forEach((item) => {
    if (!result.hasOwnProperty(item)) {
      result[item] = 1;
    } else {
      result[item] += 1;
    }
  });

  return result;
};

const countUniqueValuesTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function countUnique.",
    passed: typeof countUnique === "function",
    result: typeof countUnique,
  });
  testResults.push({
    test: "Function returns an Object.",
    passed: typeof countUnique([1, 2, 1, 3, 4, 3, 3]) === "object",
    result: typeof countUnique([1, 2, 1, 3, 4, 3, 3]),
  });
  testResults.push({
    test: "countUnique([1, 2, 1, 3, 4, 3, 3]) returns { 1: 2, 2: 1, 3: 3, 4: 1 }",
    passed: deepEqual(countUnique([1, 2, 1, 3, 4, 3, 3]), {
      1: 2,
      2: 1,
      3: 3,
      4: 1,
    }),
    result: JSON.stringify(countUnique([1, 2, 1, 3, 4, 3, 3])),
  });
  testResults.push({
    test: 'countUnique(["Pam", "Jim", "Michael", "Pam", "Toby", "Jim", "Jim", "Michael"]) returns  { Pam: 2, Jim: 3, Michael: 2, Toby: 1 }',
    passed: deepEqual(
      countUnique([
        "Pam",
        "Jim",
        "Michael",
        "Pam",
        "Toby",
        "Jim",
        "Jim",
        "Michael",
      ]),
      {
        Pam: 2,
        Jim: 3,
        Michael: 2,
        Toby: 1,
      }
    ),
    result: JSON.stringify(
      countUnique([
        "Pam",
        "Jim",
        "Michael",
        "Pam",
        "Toby",
        "Jim",
        "Jim",
        "Michael",
      ])
    ),
  });
  testResults.push({
    test: 'countUnique(["test", 1, "test", 1, "test", 2, "test", 3]) returns { test: 4, 1: 2, 2: 1, 3: 1 }',
    passed: deepEqual(
      countUnique(["test", 1, "test", 1, "test", 2, "test", 3]),
      { test: 4, 1: 2, 2: 1, 3: 1 }
    ),
    result: JSON.stringify(
      countUnique(["test", 1, "test", 1, "test", 2, "test", 3])
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Count The Unique Values",
  description: "Create a function that counts the unique values in an array",
  instructions:
    "Create a function that takes in one argument, an array, and returns an object. The return object will contains keys of all the unique items in that array with values that are the number of time that unique value occurs in the array.",
  difficulty: 2,
  testScriptCode: createTestScriptString(countUniqueValuesTests, [
    { name: "isPrimitive", func: isPrimitive },
    { name: "deepEqual", func: deepEqual },
  ]),
  startingCode:
    "const countUnique = (arr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(countUniqueValuesTests()),
  problemExplanation:
    "For this problem, you will basically be converting an array into a javascript object. The keys of that object will be the unique values from the array, and the values for those keys will be the number of times each of those values occurs in the array.",
  hints: [
    "You will need to create a variable to store your new object",
    "You can use the hasOwnProperty function on an object to see a certain key already exists on an object.",
    "You will need a way to initialize new properties to your result object.",
    "You can access property on any object dynamically using the bracket syntax (obj[targetKeyAsString]).",
  ],
  solutionCode: countUniqueValuesSolution,
};

export default data;
