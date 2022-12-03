// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const largestResultSolution = `const largestResult = (num1, num2) => {
  let result = num1 + num2;

  if (num1 - num2 > result) {
    result = num1 - num2;
  }

  if (num2 - num1 > result) {
    result = num2 - num1;
  }

  if (num1 * num2 > result) {
    result = num1 * num2;
  }

  if (num1 / num2 > result) {
    result = num1 / num2;
  }

  if (num2 / num1 > result) {
    result = num2 / num1;
  }

  return result;
};`;

const largestResult = (num1: number, num2: number) => {
  let result = num1 + num2;

  if (num1 - num2 > result) {
    result = num1 - num2;
  }

  if (num1 * num2 > result) {
    result = num1 * num2;
  }

  if (num2 - num1 > result) {
    result = num2 - num1;
  }

  if (num1 / num2 > result) {
    result = num1 / num2;
  }

  if (num2 / num1 > result) {
    result = num2 / num1;
  }

  return result;
};

const largestResultTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called largestResult.",
    passed: typeof largestResult === "function",
    result: typeof largestResult,
  });
  testResults.push({
    test: "Function returns a number",
    passed: typeof largestResult(1, 2) === "number",
    result: typeof largestResult(1, 2),
  });
  testResults.push({
    test: "largestResult(1, 2) returns 3",
    passed: largestResult(1, 2) === 3,
    result: largestResult(1, 2),
  });
  testResults.push({
    test: "largestResult(3, 0.5) returns 6",
    passed: largestResult(3, 0.5) === 6,
    result: largestResult(3, 0.5),
  });
  testResults.push({
    test: "largestResult(-4, -2) returns 8",
    passed: largestResult(-4, -2) === 8,
    result: largestResult(-4, -2),
  });
  return testResults;
};

const data: CodingChallengeData = {
  title: "Largest Result",
  description:
    "Given 2 numbers return the largest possible value of those two numbers when doing a standard arithmetic process (add, subtract, multiply, divide).",
  instructions:
    "Create a function called largestResult, that takes in two numbers and returns the largest value from those two numbers achieved through either addition, subtraction, division, or multiplication.",
  difficulty: 1,
  testScriptCode: createTestScriptString(largestResultTests),
  startingCode:
    "const largestResult = (timeStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(largestResultTests()),
  problemExplanation:
    "For this problem, you will need to use the most common arithmetic expressions in javascript. You will need to check all the possible values from these expressions to see which yield the largest result.",
  hints: [
    "Make sure to check all possible arithmetic expressions.",
    `Some expressions will yield different answers depending on the order they are called (for example num1 / num2 may be different than num2 / num1).`,
  ],
  solutionCode: largestResultSolution,
};

export default data;
