// Testing Utils
import { generateTestScriptString } from "../utils";

// Custom Types
import { CodingChallengeData } from "../../types/customTypes";

const sumTwoIntSolution = `const sum = (num1, num2) => {
  return num1 + num2;
};`;

const tests = [
  { input: [1, 2], result: 3 },
  { input: [5, 10], result: 15 },
  { input: [-1, -4], result: -5 },
];

const { testScriptCode, testCriteria } = generateTestScriptString(
  "sum",
  "number",
  tests
);

const data: CodingChallengeData = {
  title: "Sum Two Integers",
  description: "Create a function that returns the sum of two integers.",
  instructions:
    "Create a function that takes in two arguments (num1 & num2 that will both be integers) and returns a number that is the sum of the two integers provided.",
  difficulty: 1,
  testScriptCode,
  startingCode:
    "const sum = (num1, num2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria,
  problemExplanation:
    "This one is pretty straight forward. Add two numbers together and make sure to return the result.",
  hints: ["Make sure you are returning the result in the function."],
  solutionCode: sumTwoIntSolution,
};

export default data;
