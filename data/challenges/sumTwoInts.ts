// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const sumTwoIntSolution = `const sum = (num1, num2) => {
  return num1 + num2;
};`;

const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

const sumTwoIntsTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called sum.",
    passed: typeof sum === "function",
    result: typeof sum,
  });
  testResults.push({
    test: "Function returns a number",
    passed: typeof sum(1, 2) === "number",
    result: typeof sum(1, 2),
  });
  testResults.push({
    test: "sum(1, 2) returns 3",
    passed: sum(1, 2) === 3,
    result: sum(1, 2),
  });
  testResults.push({
    test: "sum(5, 10) returns 15",
    passed: sum(5, 10) === 15,
    result: sum(5, 10),
  });
  testResults.push({
    test: "sum(-1, -4) returns -5",
    passed: sum(-1, -4) === -5,
    result: sum(-1, -4),
  });
  return testResults;
};

const data: CodingChallengeData = {
  title: "Sum Two Integers",
  description: "Create a function that returns the sum of two integers.",
  instructions:
    "Create a function that takes in two arguments (num1 & num2 that will both be integers) and returns a number that is the sum of the two integers provided.",
  difficulty: 1,
  testScriptCode: createTestScriptString(sumTwoIntsTests),
  startingCode:
    "const sum = (num1, num2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(sumTwoIntsTests()),
  problemExplanation:
    "This one is pretty straight forward. Add two numbers together and make sure to return the result.",
  hints: ["Make sure you are returning the result in the function."],
  solutionCode: sumTwoIntSolution,
};

export default data;
