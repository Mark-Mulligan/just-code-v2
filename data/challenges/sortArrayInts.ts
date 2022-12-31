// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const sortArrayIntsSolution = `const sortArr = (numArr) => {
  return numArr.sort((a, b) => a - b);
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'sortArr',
  'array',
  [
    { input: [[1, 4, 3, 2]], result: [1, 2, 3, 4] },
    { input: [[1, 2, 6, 4, 2]], result: [1, 2, 2, 4, 6] },
    { input: [[10, -3, 2, -1, 7, 9]], result: [-3, -1, 2, 7, 9, 10] },
    { input: [[-1, 1000, 10, 22, -22, 3]], result: [-22, -1, 3, 10, 22, 1000] },
  ]
);

const data: CodingChallengeData = {
  title: 'Sort Array Of Integers',
  description: 'Create a function that returns a sorted array of integers',
  instructions:
    'Create a function that takes in one argument (an array of integers) and a new array with those same integers sorted from least to greatest.',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const sortArr = (numArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'For this problem, you will need to go through an array and order the numbers in that array from least to greatest.',
  hints: [
    'You will need way to iterate over the array or you can use the sort method.',
    'If using the sort method, make sure to pass the correct arguments/function.',
  ],
  solutionCode: sortArrayIntsSolution,
};

export default data;
