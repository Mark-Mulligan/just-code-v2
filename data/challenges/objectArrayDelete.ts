// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const objectArrayDeleteSolution = `const deleteOne = (objArray, targetKey, targetValue) => {
  return objArray.filter(item => item[targetKey] !== targetValue);
}`;

function deepEqual(val1: any, val2: any) {
  if (
    val1 === undefined ||
    val2 === undefined ||
    val1 === null ||
    val2 === null
  ) {
    return val1 === val2;
  }

  if (val1 === val2) return true;
  if (typeof val1 !== typeof val2) return false;
  if (typeof val1 === "object") {
    if (Object.keys(val1).length !== Object.keys(val2).length) {
      return false;
    }

    for (const key of Object.keys(val1)) {
      if (!deepEqual(val1[key], val2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

const arraysEqual = (a1: any[], a2: any[]) => {
  if (a1 && a1.length && a2 && a2.length) {
    return (
      a1.length === a2.length &&
      a1.every((o: any, idx: number) => deepEqual(o, a2[idx]))
    );
  }

  return false;
};

const deleteOne = (objectArray: any, targetKey: string, targetValue: any) => {
  return objectArray.find((object: any) => {
    object[targetKey] = targetValue;
  });
};

const objectArrayDeleteTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function deleteOne.",
    passed: typeof deleteOne === "function",
    result: typeof deleteOne,
  });
  testResults.push({
    test: "Function returns an Object if target key and target value are found",
    passed:
      typeof deleteOne(
        [
          { id: 1, name: "superUser" },
          { id: 2, name: "admin" },
          { id: 3, name: "user" },
        ],
        "id",
        2
      ) === "object",
    result: JSON.stringify(
      deleteOne(
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
    test: `deleteOne([
      { id: 1, name: "superUser" }, 
      { id: 2, name: "admin" }, 
      { id: 3, name: "user" }], 
      "id", 2) 
    returns { id: 2, name: "admin" }`,
    passed: arraysEqual(
      deleteOne(
        [
          { id: 1, name: "superUser" },
          { id: 2, name: "admin" },
          { id: 3, name: "user" },
        ],
        "id",
        2
      ),
      [
        { id: 1, name: "superUser" },
        { id: 3, name: "user" },
      ]
    ),
    result: JSON.stringify(
      deleteOne(
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
    test: `deleteOne([
      { id: 1, name: "superUser" }, 
      { id: 2, name: "admin" }, 
      { id: 3, name: "user" }], 
      "id", 4);
    returns [
      { id: 1, name: "superUser" }, 
      { id: 2, name: "admin" }, 
      { id: 3, name: "user" }]`,
    passed: arraysEqual(
      deleteOne(
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
      deleteOne(
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
    test: `deleteOne([{ state: "tx" }, { state: "ny" }, { state: "ca" }, { state: "nm" }],
      "state",
      "tx"
    ) returns { state: "tx" }`,
    passed: arraysEqual(
      deleteOne(
        [{ state: "tx" }, { state: "ny" }, { state: "ca" }, { state: "nm" }],
        "state",
        "tx"
      ),
      [{ state: "ny" }, { state: "ca" }, { state: "nm" }]
    ),
    result: JSON.stringify(
      deleteOne(
        [{ state: "tx" }, { state: "ny" }, { state: "ca" }, { state: "nm" }],
        "state",
        "tx"
      )
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Object Array Delete",
  description:
    "Create a function that removes an object from an array of objects.",
  instructions:
    "Create a function called deleteOne that takes in three arguments, an array of objects, a target key, and a target value for said key. The function should return a copy of the array with the object matching the target key and value removed.  If the target key and value are not found on any of the objects in the provided array, the function should return a copy of the original array.",
  testScriptCode: createTestScriptString(objectArrayDeleteTests, [
    { name: "deepEqual", func: deepEqual },
    { name: "arraysEqual", func: arraysEqual },
  ]),
  difficulty: 2,
  startingCode:
    "const deleteOne = (objArray, targetKey, targetValue) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(objectArrayDeleteTests()),
  problemExplanation:
    "In this problem, you will need to work with both objects and arrays. You will need to be able to look thought the array to see if any the objects inside of it have a key matching targetKey as well as the targetValue matching that given key's value.",
  hints: [
    "The javascript filter function will be useful in solving this challenge.",
    "You will need to check each object for the target key and value to see if they match the function input.",
  ],
  solutionCode: objectArrayDeleteSolution,
};

export default data;
