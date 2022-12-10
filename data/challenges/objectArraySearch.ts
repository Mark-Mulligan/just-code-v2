// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const objectArraySearchSolution = `const findOne = (objArray, targetKey, targetValue) => {
  return objArray.find((object) => {
    return object[targetKey] === targetValue;
  });
};`;

const object_equals = (x: any, y: any) => {
  if (x === y) return true;
  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  if (x.constructor !== y.constructor) return false;

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue;
    if (!y.hasOwnProperty(p)) return false;
    if (x[p] === y[p]) continue;
    if (typeof x[p] !== "object") return false;
    if (!object_equals(x[p], y[p])) return false;
  }

  for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;

  return true;
};

const findOne = (objectArray: any, targetKey: string, targetValue: any) => {
  return objectArray.find((object: any) => {
    object[targetKey] = targetValue;
  });
};

const objectArraySearchTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function findOne.",
    passed: typeof findOne === "function",
    result: typeof findOne,
  });
  testResults.push({
    test: "Function returns an Object if target key and target value are found",
    passed:
      typeof findOne(
        [
          { id: 1, name: "superUser" },
          { id: 2, name: "admin" },
          { id: 3, name: "user" },
        ],
        "id",
        2
      ) === "object",
    result: JSON.stringify(
      findOne(
        [
          { id: 1, name: "superUser" },
          { id: 2, name: "admin" },
          { id: 3, name: "user" },
        ],
        "id",
        2
      )
    ),
  });
  testResults.push({
    test: "Function returns undefined if target key and target value are not found",
    passed:
      findOne(
        [
          { id: 1, name: "superUser" },
          { id: 2, name: "admin" },
          { id: 3, name: "user" },
        ],
        "id",
        4
      ) === undefined,
    result: JSON.stringify(
      findOne(
        [
          { id: 1, name: "superUser" },
          { id: 2, name: "admin" },
          { id: 3, name: "user" },
        ],
        "id",
        4
      )
    ),
  });

  testResults.push({
    test: `findOne([ \n
      { id: 1, name: "superUser" }, 
      { id: 2, name: "admin" }, 
      { id: 3, name: "user" }
    ], "id", 2) returns { id: 2, name: "admin" }
    `,
    passed: object_equals(
      findOne(
        [
          { id: 1, name: "superUser" },
          { id: 2, name: "admin" },
          { id: 3, name: "user" },
        ],
        "id",
        2
      ),
      { id: 2, name: "admin" }
    ),
    result: JSON.stringify(
      findOne(
        [
          { id: 1, name: "superUser" },
          { id: 2, name: "admin" },
          { id: 3, name: "user" },
        ],
        "id",
        2
      )
    ),
  });
  testResults.push({
    test: `findOne([{ id: 1, name: "superUser" }, { id: 2, name: "admin" }, { id: 3, name: "user" }], "id", 4);
    returns undefined
    `,
    passed:
      findOne(
        [
          { id: 1, name: "superUser" },
          { id: 2, name: "admin" },
          { id: 3, name: "user" },
        ],
        "id",
        4
      ) === undefined,
    result: JSON.stringify(
      findOne(
        [
          { id: 1, name: "superUser" },
          { id: 2, name: "admin" },
          { id: 3, name: "user" },
        ],
        "id",
        4
      )
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Object Array Search",
  description: "Create a function that finds an object in an array of objects.",
  instructions:
    "Create a function called findOne that takes in three arguments, an array of objects, a target key, and a target value for said key. The function should return a single object from the given array if that array has an object that contains the target key with corresponding target value.  If the target key and value are not found on any of the objects in the provided array, the function should return undefined.",
  testScriptCode: createTestScriptString(objectArraySearchTests, [
    { name: "object_equals", func: object_equals },
  ]),
  difficulty: 2,
  startingCode:
    "const findOne = (objArray, targetKey, targetValue) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(objectArraySearchTests()),
  problemExplanation:
    "In this problem, you will need to work with both objects and arrays. You will need to be able to look thought the array to see if any the objects inside of it have a key matching targetKey as well as the targetValue matching that given key's value.",
  hints: [
    "You will need some way to loop over the array. This could be a for loop, forEach, or even the javascript filter function.",
    "You will need to check each object for the target key and value to see if they match the function input.",
    "You will need to return the object if there is a match or undefined if there is not a match.",
  ],
  solutionCode: objectArraySearchSolution,
};

export default data;
