// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const addNumbersInRangeSolution = `const addNumbersInRange = (startingNum, endingNum) => {
  let total = 0;
  for (let i = startingNum; i <= endingNum; i++) {
    total += i;
  }

  return total;
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'addNumbersInRange',
  'number',
  [
    { input: [1, 5], result: 15 },
    { input: [5, 10], result: 45 },
    { input: [1, 100], result: 5050 },
    { input: [85, 9783], result: 47854866 },
  ]
);

const data: CodingChallengeData = {
  title: 'Add Numbers in Range',
  description:
    'Create a function that adds all the numbers together in a given range.',
  instructions:
    'Create a function called addNumbersInRange that takes in two integers, startingNum and endingNum. The function should return the sum of all numbers in that range including the starting and ending number.',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const addNumbersInRange = (startingNum, endingNum) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'Given a range, calculate the sum of all numbers in that range. The simplest way to go about this is using a for loop and a variable to keep track of the total.',
  hints: [
    'You can use a for loop to iterate through all the numbers in the range.',
    'Consider using a variable to keep track of the total,',
    'The for loop should start at the startingNum and end at the endingNum (not before)',
  ],
  solutionCode: addNumbersInRangeSolution,
};

export default data;
