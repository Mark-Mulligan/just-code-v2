// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

export const reverseStringSolution = `const reverseStr = (str) => {
  return str.split('').reverse().join('');
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'reverseStr',
  'string',
  [
    { input: ['test'], result: 'tset' },
    { input: ['Hello World'], result: 'dlroW olleH' },
    { input: ['Reverse Me'], result: 'eM esreveR' },
    { input: ['racecar'], result: 'racecar' },
  ]
);

const data: CodingChallengeData = {
  title: 'Reverse A String',
  description: 'Create a function that returns a string reversed.',
  instructions:
    'Create a function that takes in a single argument, a string, and returns a reversed version of that string.',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const reverseStr = (str) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'Take a string and reverse it.  Pretty straight forward. It may be easier to convert the string to a different data type.',
  hints: [
    'Try converting the string into an array.',
    'There is a method for reversing arrays',
  ],
  solutionCode: reverseStringSolution,
};

export default data;
