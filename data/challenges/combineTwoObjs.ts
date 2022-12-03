// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const combineTwoObjsSolution = `const combineTwoObjs = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
}`;

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

const combineTwoObjs = (obj1: any, obj2: any) => {
  return { ...obj1, ...obj2 };
};

const combineTwoObjsTests = () => {
  // used to test if object in function is a new object
  const obj1 = { state: "TX", address: "1234 Storyboard ln" };
  const obj2 = { zip: "12345" };
  const testResults: TestResult[] = [];

  testResults.push({
    test: "User created a function combineTwoObjs.",
    passed: typeof combineTwoObjs === "function",
    result: typeof combineTwoObjs,
  });
  testResults.push({
    test: "Function returns an Object.",
    passed: typeof combineTwoObjs(obj1, obj2) === "object",
    result: typeof combineTwoObjs(obj1, obj2),
  });
  testResults.push({
    test: "Function returns a new object, not a copy of either object in the arguments to the function.",
    passed:
      combineTwoObjs(obj1, obj2) !== obj1 &&
      combineTwoObjs(obj1, obj2) !== obj2,
    result: JSON.stringify(combineTwoObjs(obj1, obj2)),
  });
  testResults.push({
    test: `combineTwoObjs({ state: 'TX', address: '1234 Storyboard ln' }, { zip: '12345' }) returns
    {
      state: 'TX',
      address: '1234 Storyboard ln',
      zip: '12345',
    }`,
    passed: deepEqual(
      combineTwoObjs(
        { state: "TX", address: "1234 Storyboard ln" },
        { zip: "12345" }
      ),
      {
        state: "TX",
        address: "1234 Storyboard ln",
        zip: "12345",
      }
    ),
    result: JSON.stringify(
      combineTwoObjs(
        { state: "TX", address: "1234 Storyboard ln" },
        { zip: "12345" }
      )
    ),
  });
  testResults.push({
    test: `combineTwoObjs({ movie: 'Batman Begins' }, { director: 'Christopher Nolan', releaseDate: '06-15-2005' }) returns { 1: 2, 2: 1, 3: 3, 4: 1 }`,
    passed: deepEqual(
      combineTwoObjs(
        { movie: "Batman Begins" },
        { director: "Christopher Nolan", releaseDate: "06-15-2005" }
      ),
      {
        movie: "Batman Begins",
        director: "Christopher Nolan",
        releaseDate: "06-15-2005",
      }
    ),
    result: JSON.stringify(
      combineTwoObjs(
        { movie: "Batman Begins" },
        { director: "Christopher Nolan", releaseDate: "06-15-2005" }
      )
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Combine Two Objects",
  description: "Create a function that combines two objects into a single one.",
  instructions:
    "Create a function called combineTwoObjs that takes in two objects, and returns a single object with all the key value pairs from each object. The function should return a new object. You can assume both objects will have unique key value pairs.",
  difficulty: 1,
  testScriptCode: createTestScriptString(combineTwoObjsTests, [
    { name: "isPrimitive", func: isPrimitive },
    { name: "deepEqual", func: deepEqual },
  ]),
  startingCode:
    "const combineTwoObjs = (obj1, obj2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(combineTwoObjsTests()),
  problemExplanation:
    "There a different ways to do this problem, but the easiest will be using some of the ES6 syntax of working with objects.",
  hints: [
    "Make sure to return a new object.",
    "Using the spread syntax will make this problem a lot easier.",
  ],
  solutionCode: combineTwoObjsSolution,
};

export default data;
