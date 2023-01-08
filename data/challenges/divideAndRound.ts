// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const divideAndRoundSolution = `const divide = (num1, num2) => {
  return Math.round((num1 / num2) * 100) / 100;
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'divide',
  'number',
  'areEqual',
  [
    { input: [2, 1], result: 2 },
    { input: [9, 7], result: 1.29 },
    { input: [607.97, 8.28], result: 73.43 },
  ]
);

const data: CodingChallengeData = {
  title: 'Divide and Round',
  description:
    'Create a function that takes two numbers and divides the first number by the second and rounds the result.',
  instructions:
    'Create a function called divide that takes in two numbers, num1 and num2. The function will divide num1 by num2 and return the result as a number rounded to the nearest hundredths',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const divide = (num1, num2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'The trickiest part about this problem is the rounding and order of operations. Make sure to first divide and then round the result of that division problem.',
  hints: [
    'Math.round() is usefully for rounding. However, you will need to use a modified version of it to round to the hundredths',
    `If you don't want to use math.round, you can use .toFixed(2). Just make sure to convert the result of the toFixed function to a number (toFixed returns a string).`,
  ],
  solutionCode: divideAndRoundSolution,
};

export default data;
