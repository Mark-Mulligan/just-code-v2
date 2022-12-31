// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const checkForDuplicatesSolution = `hasDuplicateValues = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }

  return false;
};`;

const { testScriptCode, testCriteria } = generateTestScriptString(
  'hasDuplicateValues',
  'boolean',
  [
    { input: [[1, 2, 3, 4, 5, 1]], result: true },
    { input: [[10, 12, 31, 4, 25, -3]], result: false },
    { input: [['cheese', 'cake', 'cookies', 'fries']], result: false },
    { input: [['test', 'testing', 'test', 'testing', 'tested']], result: true },
  ]
);

const data: CodingChallengeData = {
  title: 'Check For Duplicates',
  description:
    'Write a function that checks if there are any duplicate values in an array.',
  instructions:
    'Write a function called hasDuplicateValues that takes in an array and returns a boolean value of whether or not that array has duplicate values. Not, the arrays provided to function will only have primitive values (strings and numbers).',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const hasDuplicateValues = (arr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'Check an array for duplicate values. You will need to iterate through all possible combinations in an array to see two values match.',
  hints: [
    'Nested for loops can help you iterate through all possible combinations.',
    'You can use "===" to compare two primitive values for equality.',
    'As soon you find a duplicate value, you can return the result without having to continue going through the array',
  ],
  solutionCode: checkForDuplicatesSolution,
};

export default data;
