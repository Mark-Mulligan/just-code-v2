// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const divideAndRoundSolution = `const divide = (num1, num2) => {
  return Math.round((num1 / num2) * 100) / 100;
};`;

const divide = (num1: number, num2: number) => {
  return Math.round((num1 / num2) * 100) / 100;
};

const divideAndRoundTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called divide.",
    passed: typeof divide === "function",
    result: typeof divide,
  });
  testResults.push({
    test: "Function returns a number",
    passed: typeof divide(2, 1) === "number",
    result: typeof divide(2, 1),
  });
  testResults.push({
    test: "divide(2, 1) returns 3",
    passed: divide(2, 1) === 2,
    result: divide(2, 1),
  });
  testResults.push({
    test: "divide(9, 7) returns 1.29",
    passed: divide(9, 7) === 1.29,
    result: divide(9, 7),
  });
  testResults.push({
    test: "divide(607.97, 8.28) returns 73.43",
    passed: divide(607.97, 8.28) === 73.43,
    result: divide(607.97, 8.28),
  });
  return testResults;
};

const data: CodingChallengeData = {
  title: "Divide and Round",
  description:
    "Create a function that takes two numbers and divides the first number by the second and rounds the result.",
  instructions:
    "Create a function called divide that takes in two numbers, num1 and num2. The function will divide num1 by num2 and return the result as a number rounded to the nearest hundredths",
  difficulty: 1,
  testScriptCode: createTestScriptString(divideAndRoundTests),
  startingCode:
    "const divide = (num1, num2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(divideAndRoundTests()),
  problemExplanation:
    "The trickiest part about this problem is the rounding and order of operations. Make sure to first divide and then round the result of that division problem.",
  hints: [
    "Math.round() is usefully for rounding. However, you will need to use a modified version of it to round to the hundredths",
    `If you don't want to use math.round, you can use .toFixed(2). Just make sure to convert the result of the toFixed function to a number (toFixed returns a string).`,
  ],
  solutionCode: divideAndRoundSolution,
};

export default data;
