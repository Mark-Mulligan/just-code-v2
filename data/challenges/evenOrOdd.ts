// Testing Utils
import { createTestScriptString } from "../utils";
import { extractTestCriteria } from "../utils";

// Custom Types
import { TestResult } from "../../types/customTypes";
import { CodingChallengeData } from "../../types/customTypes";

const evenOrOddSolution = `const evenOrOdd = (num) => {
  return (num % 2 === 0) ? 'even' : 'odd';
};`;

const evenOrOdd = (num: number) => {
  return num % 2 === 0 ? "even" : "odd";
};

const evenOrOddTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function evenOrOdd.",
    passed: typeof evenOrOdd === "function",
    result: typeof evenOrOdd,
  });
  testResults.push({
    test: "Function returns a string.",
    passed: typeof evenOrOdd(11) === "string",
    result: typeof evenOrOdd(11),
  });
  testResults.push({
    test: 'evenOrOdd(11) returns "odd"',
    passed: evenOrOdd(11) === "odd",
    result: evenOrOdd(11),
  });
  testResults.push({
    test: 'evenOrOdd(30) returns "even"',
    passed: evenOrOdd(30) === "even",
    result: evenOrOdd(30),
  });
  testResults.push({
    test: 'evenOrOdd(17) returns "odd"',
    passed: evenOrOdd(17) === "odd",
    result: evenOrOdd(17),
  });
  testResults.push({
    test: 'evenOrOdd(22) returns "even"',
    passed: evenOrOdd(22) === "even",
    result: evenOrOdd(22),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Even or Odd?",
  description:
    "Create a function that determines whether a number is even or odd.",
  instructions:
    'Create a function that takes in a single argument, an integer greater than 0, and returns "even" if the number is even or "odd" if the number is odd.',
  testScriptCode: createTestScriptString(evenOrOddTests),
  startingCode:
    "const evenOrOdd = (num) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(evenOrOddTests()),
  problemExplanation:
    "There are only two possibilities for the numbers to be even or odd. Even numbers divided by 2 always equal zero.",
  hints: [
    "The % operator gives the remainder after a dividing operation. For example, 4 % 2 = 0 and 5 % 2 = 1.",
  ],
  solutionCode: evenOrOddSolution,
};

export default data;
