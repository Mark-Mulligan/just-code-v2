// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const objectArrayUpdateSolution = `const update = (objArray, id, updateProperties) => {
  return objArray.map((obj) => {
    if (obj.id === id) {
      let newObj = { ...obj };

      for (const [key, value] of Object.entries(updateProperties)) {
        newObj[key] = value;
      }

      return newObj;
    }

    return obj;
  });
};`;

const objectsEqual = (x: any, y: any) => {
  if (x === y) return true;
  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  if (x.constructor !== y.constructor) return false;

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue;
    if (!y.hasOwnProperty(p)) return false;
    if (x[p] === y[p]) continue;
    if (typeof x[p] !== "object") return false;
    if (!objectsEqual(x[p], y[p])) return false;
  }

  for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;

  return true;
};

const arraysEqual = (a1: any[], a2: any[]) => {
  if (a1 && a1.length && a2 && a2.length) {
    return (
      a1.length === a2.length &&
      a1.every((o: any, idx: number) => objectsEqual(o, a2[idx]))
    );
  }

  return false;
};

const update = (objArray: any, id: string | number, updateProperties: any) => {
  return objArray.map((obj: any) => {
    if (obj.id === id) {
      let newObj = { ...obj };

      for (const [key, value] of Object.entries(updateProperties)) {
        newObj[key] = value;
      }

      return newObj;
    }

    return obj;
  });
};

const objectArraySearchTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function update.",
    passed: typeof update === "function",
    result: typeof update,
  });
  testResults.push({
    test: "Function returns an array of objects",
    passed:
      typeof update(
        [
          { id: 1, name: "superUser" },
          { id: 2, name: "admin" },
          { id: 3, name: "user" },
        ],
        "id",
        2
      ) === "object",
    result: JSON.stringify(
      update(
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
    test: "Function returns object array unchanged if id is not found.",
    passed: arraysEqual(
      update(
        [
          { id: 1, name: "superUser" },
          { id: 2, name: "admin" },
          { id: 3, name: "user" },
        ],
        "id",
        4
      ),
      [
        { id: 1, name: "superUser" },
        { id: 2, name: "admin" },
        { id: 3, name: "user" },
      ]
    ),
    result: JSON.stringify(
      update(
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
    test: `update([
      { id: 1, username: "tyrion98" }, 
      { id: 2, username: "bandit73" }, 
      { id: 3, username: "guppy22" }], 
      3, { username: "guppy33" }) 
    returns [
      { id: 1, username: "tyrion98" }, 
      { id: 2, username: "bandit73" }, 
      { id: 3, username: "guppy33" }], `,
    passed: arraysEqual(
      update(
        [
          { id: 1, username: "tyrion98" },
          { id: 2, username: "bandit73" },
          { id: 3, username: "guppy22" },
        ],
        3,
        { username: "guppy33" }
      ),
      [
        { id: 1, username: "tyrion98" },
        { id: 2, username: "bandit73" },
        { id: 3, username: "guppy33" },
      ]
    ),
    result: JSON.stringify(
      update(
        [
          { id: 1, username: "tyrion98" },
          { id: 2, username: "bandit73" },
          { id: 3, username: "guppy22" },
        ],
        3,
        { username: "guppy33" }
      )
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Object Array Update",
  description:
    "Create a function that updates an object in an array of objects",
  instructions:
    "Create a function called update that takes in three arguments, an array of objects, an id, and an object of key value pairs. The function should update the object in array with the provided id, updating all the key value pairs from provided in the function's third argument.",
  testScriptCode: createTestScriptString(objectArraySearchTests, [
    { name: "objectsEqual", func: objectsEqual },
    { name: "arraysEqual", func: arraysEqual },
  ]),
  difficulty: 2,
  startingCode:
    "const update = (objArray, id, updateProperties) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(objectArraySearchTests()),
  problemExplanation:
    "In this problem, you will need to work with both objects and arrays. You will need to find a way to search the array to find the object that matches the given id.  You will then need to be able to update the properties on that object to reflect the new properties provided in the function's third argument.",
  hints: [
    "You will need some way to loop over the array. This could be a for loop, forEach, or even the javascript filter function.",
    "Since you know you are look for an id, this can be checked on each object. Each object has a unique id so you don't have to worry about duplicates.",
    "You will need a way to update the keys of the target object or add new keys to said object. The spread syntax in javascript can be useful to help with this.",
  ],
  solutionCode: objectArrayUpdateSolution,
};

export default data;
