// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const findTheTotalLengthSolution = `const totalLength = (strArr) => {
  return strArr.join('').length;
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'totalLength',
  'number',
  [
    { input: [['this', 'is', 'a', 'test']], result: 11 },
    { input: [['Somebody', 'once', 'told', 'me']], result: 18 },
    { input: [['the', 'world', 'is', 'gonna', 'roll', 'me']], result: 21 },
    {
      input: [['I', `ain\'t`, 'the', 'sharpest', 'tool', 'in', 'the', 'shed']],
      result: 30,
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Find The Total Length',
  description:
    'Create a function that finds the total length of all the string in an array combined.',
  instructions:
    'Create a function that takes in an array of strings. Return the length of all the strings in that array combined. In others words, the length of what the string would be if all elements of the array were combined into one long string.',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const totalLength = (strArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'For this problem, you will need to combine the array of words into a string, then it should be easier get the total length of the string.',
  hints: [
    'You can combine an array of strings into a single string using the join() method.',
    'You can find the length of a string with .length.',
  ],
  solutionCode: findTheTotalLengthSolution,
};

export default data;
