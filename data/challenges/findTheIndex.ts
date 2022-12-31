// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

export const findTheIndexSolution = `const findIndex = (sourceArr, targetValue) => {
  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] === targetValue) return i;
  }

  return -1;
}`;

const tests = [
  { input: [[1, 2, 3, 4], 2], result: 1 },
  { input: [[0, 2, 10, -10, 3], -10], result: 3 },
  { input: [['testing', 'test', 'tester', 'tested'], 'test'], result: 1 },
  { input: [[], 'something'], result: -1 },
  { input: [[]], result: -1 },
];

const { testCriteria, testScriptCode } = generateTestScriptString(
  'findIndex',
  'number',
  tests
);

const data: CodingChallengeData = {
  title: 'Find the Index',
  description:
    'Create a function that returns the index of a give value in an array.',
  instructions:
    'Create a function that takes in two arguments, an array and a target value. The function will return the index of that value in the array. If the target value is not in the array or the array is empty, return -1.',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const findIndex = (sourceArr, targetValue) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'For this problem, you will only be working with finding primitive values in arrays so you will need to some way to iterate through the array and can use === to compare values.',
  hints: [
    'You will need to iterate over the array (maybe a for loop for example)',
    'You can use === to compare primitive values.',
  ],
  solutionCode: findTheIndexSolution,
};

export default data;
