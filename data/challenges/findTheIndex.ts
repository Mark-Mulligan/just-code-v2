// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

export const findTheIndexSolution = `const findIndex = (sourceArr, targetValue) => {
  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] === targetValue) return i;
  }

  return -1;
}`;

const findIndex = (sourceArr: any, targetValue: any) => {
  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] === targetValue) return i;
  }

  return -1;
};

const findTheIndexTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called findIndex.",
    passed: typeof findIndex === "function",
    result: typeof findIndex,
  });
  testResults.push({
    test: "Function returns a string",
    passed: typeof findIndex([1, 2, 3, 4], 2) === "number",
    result: typeof findIndex([1, 2, 3, 4], 2),
  });
  testResults.push({
    test: "findIndex([0, 2, 10, -10, 3], -10) returns 3",
    passed: findIndex([0, 2, 10, -10, 3], -10) === 3,
    result: findIndex([0, 2, 10, -10, 3], -10),
  });
  testResults.push({
    test: 'findIndex(["testing", "test", "tester", "tested"], "test") returns 1',
    passed: findIndex(["testing", "test", "tester", "tested"], "test") === 1,
    result: findIndex(["testing", "test", "tester", "tested"], "test"),
  });
  testResults.push({
    test: 'findIndex([], "something") returns -1',
    passed: findIndex([], "something") === -1,
    result: findIndex([], "something"),
  });
  testResults.push({
    test: "findIndex([]) returns -1",
    passed: findIndex(["apple", "orange", "grape"], "pineapple") === -1,
    result: findIndex(["apple", "orange", "grape"], "pineapple"),
  });
  return testResults;
};

const data: CodingChallengeData = {
  title: "Find the Index",
  description:
    "Create a function that returns the index of a give value in an array.",
  instructions:
    "Create a function that takes in two arguments, an array and a target value. The function will return the index of that value in the array. If the target value is not in the array or the array is empty, return -1.",
  difficulty: 1,
  testScriptCode: createTestScriptString(findTheIndexTests),
  startingCode:
    "const findIndex = (sourceArr, targetValue) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(findTheIndexTests()),
  problemExplanation:
    "For this problem, you will only be working with finding primitive values in arrays so you will need to some way to iterate through the array and can use === to compare values.",
  hints: [
    "You will need to iterate over the array (maybe a for loop for example)",
    "You can use === to compare primitive values.",
  ],
  solutionCode: findTheIndexSolution,
};

export default data;
