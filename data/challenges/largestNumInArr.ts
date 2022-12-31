// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const largestNumInArrSolution = `const largestNum = (numArr) => {
  let largestNum = numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > largestNum) {
      largestNum = numArr[i]
    }
  }

  return largestNum;
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'largestNum',
  'number',
  [
    { input: [[1, 2, 3, 4]], result: 4 },
    { input: [[1, 8, 10, 5, 12]], result: 12 },
    { input: [[-4, 1, 80, 2, 1]], result: 80 },
    { input: [[-5, -2, -1, -3, -20]], result: -1 },
  ]
);

const data: CodingChallengeData = {
  title: 'Find Largest Number',
  description:
    'Create a function that returns a the largest number from an array of integers.',
  instructions:
    'Given a function that takes in an array of integers, return the largest number from that array.',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const largestNum = (numArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'You are given an array of integers. You need to return the largest integer from that array. Numbers can be positive, negative, or both.',
  hints: [
    'You will probably need a variable to store your largest number',
    'You will need to set the variable storing the largest number to an initial value in the array (instead of 0 incase all the numbers are negative)',
    'You will need to iterate through the entire array to check all numbers.',
  ],
  solutionCode: largestNumInArrSolution,
};

export default data;
