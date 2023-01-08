// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const largestSumSolution = `const largestSum = (numberArr) => {
  let largestSum = 0;
  let indexes = [];

  for (let i = 0; i < numberArr.length; i++) {
    for (let j = i + 1; j < numberArr.length; j++) {
      if (numberArr[i] + numberArr[j] > largestSum) {
        largestSum = numberArr[i] + numberArr[j];
        indexes = [i, j];
      }
    }
  }

  return { largestSum, indexes };
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'largestSum',
  'object',
  'areEqual',
  [
    { input: [[1, 2, 3]], result: { largestSum: 5, indexes: [1, 2] } },
    {
      input: [[10, 6, 2, 7]],
      result: {
        largestSum: 17,
        indexes: [0, 3],
      },
    },
    {
      input: [[3, 27, 31, 4]],
      result: {
        largestSum: 58,
        indexes: [1, 2],
      },
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Largest Sum',
  description:
    'Create a function that returns the largest sum possible in a given array.',
  instructions:
    'Create function that take in one argument, an array of integers and returns the largest sum possible using any two numbers from that array. You will also need to include the indexes of those two numbers in the given area. The result should be stored in a object with two keys, largestSum (a number) and indexes (a 2 value number[]).',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const largestSum = (numberArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'Create a function that returns the largest sum possible in a given array as well as the indexes for those two numbers. This problem will require you to iterate through all the combinations in an array. It will also require that you can manipulate objects since you have to return multiple values for this function. This problem is useful for showing you how to derive multiple pieces of data from a single function.',
  hints: [
    'There are two main approaches for solving this, either looping through every combination of two numbers in the array, or sorting the array.',
    'Looping through every combination will require nested for loops. You will also need to stored the largest sum in a variable.',
    `If you sort the array, you will need to use the last two numbers for the largest sum in the sorted array. Then you will need to search for those two number's indexes in the original array`,
  ],
  solutionCode: largestSumSolution,
};

export default data;
