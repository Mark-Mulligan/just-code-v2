// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const removeDuplicatesInArraySolution = `const removeDuplicates = (arr) => {
  return [...new Set(arr)];
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'removeDuplicates',
  'array',
  [
    { input: [[1, 2, 2, 3, 4]], result: [1, 2, 3, 4] },
    { input: [[1, 2, 1, 3, 2, 3, 4]], result: [1, 2, 3, 4] },
    {
      input: [['Sam', 'Frodo', 'Sam', 'Gollum', 'Gollum', 'Aragon']],
      result: ['Sam', 'Frodo', 'Gollum', 'Aragon'],
    },
    {
      input: [[10, 10, 'test', 'test', 73, '73']],
      result: [10, 'test', 73, '73'],
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Remove Duplicates From Array',
  description:
    'Create a function that removes the duplicate values from a given array.',
  instructions:
    'Create a function that takes in a single argument, an array, and returns an array with all the duplicates removed. For the purpose of this problem, you can return a new array or the original one modified, your choice.',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const removeDuplicates = (arr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'For this problem, you will need to take an array and remove extra occurrences of the same value. The result will be an array of only unique values.',
  hints: [
    'There are many ways to do this problem, but using the javascript set type is probably the easiest.',
    'When using the javascript set type, you will need es6 spread syntax as well.',
  ],
  solutionCode: removeDuplicatesInArraySolution,
};

export default data;
