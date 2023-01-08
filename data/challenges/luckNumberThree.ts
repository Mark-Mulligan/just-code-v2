// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const luckyNumberThreeSolution = `const hasThreeRepeatingValues = (arr) => {
  const uniqueValCount = {};

  for (let i = 0; i < arr.length; i++) {
    if (uniqueValCount.hasOwnProperty(arr[i])) {
      uniqueValCount[arr[i]] = uniqueValCount[arr[i]] + 1;
    } else {
      uniqueValCount[arr[i]] = 1;
    }

    if (uniqueValCount[arr[i]] === 3) {
      return true;
    }
  }

  return false;
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'hasThreeRepeatingValues',
  'boolean',
  'areEqual',
  [
    { input: [[1, 2, 3, 4, 5, 4, 3, 2, 1, 1]], result: true },
    { input: [[10, 12, 12, 10, 90, 9, 87, 90]], result: false },
    {
      input: [
        [
          'repeat',
          'repeats',
          'repeat',
          'repeating',
          'repeats',
          'repeating',
          'repeat',
        ],
      ],
      result: true,
    },
    {
      input: [
        ['repeat', 'repeats', 'repeat', 'repeating', 'repeats', 'repeated'],
      ],
      result: false,
    },
    { input: [[true, false, true, false, true]], result: true },
  ]
);

const data: CodingChallengeData = {
  title: 'Lucky Number 3',
  description:
    'Create a function that determines whether an array has 3 or more repeating values.',
  instructions:
    'Write a function called hasThreeRepeatingValues that takes in an array of primitives. The function should return a boolean of whether or not there are three repeating values in the given array.',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const hasThreeRepeatingValues = (arr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'For this problem, you will need a way to count how many times each value occurs in an array. The best way to do this would be to create an object where each unique value in the array is a key and the value of those keys is the number of times that unique value occurs in the given array.',
  hints: [
    'You need a way to count how many time each value occurs in the array.',
    'You then need to check to see if the number of repeating values is 3 or more.',
  ],
  solutionCode: luckyNumberThreeSolution,
};

export default data;
