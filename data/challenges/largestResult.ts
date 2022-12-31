// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

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

const { testCriteria, testScriptCode } = generateTestScriptString(
  'largestResult',
  'number',
  [
    { input: [1, 2], result: 3 },
    { input: [3, 0.5], result: 6 },
    { input: [-4, -2], result: 8 },
  ]
);

const data: CodingChallengeData = {
  title: 'Largest Result',
  description:
    'Given 2 numbers return the largest possible value of those two numbers when doing a standard arithmetic process (add, subtract, multiply, divide).',
  instructions:
    'Create a function called largestResult, that takes in two numbers and returns the largest value from those two numbers achieved through either addition, subtraction, division, or multiplication.',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const largestResult = (num1, num2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'For this problem, you will need to use the most common arithmetic expressions in javascript. You will need to check all the possible values from these expressions to see which yield the largest result.',
  hints: [
    'Make sure to check all possible arithmetic expressions.',
    `Some expressions will yield different answers depending on the order they are called (for example num1 / num2 may be different than num2 / num1).`,
  ],
  solutionCode: largestResultSolution,
};

export default data;
