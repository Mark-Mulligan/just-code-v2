// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const sumTwoIntSolution = `const wordCount = (inputStr) => {
  return inputStr.split(' ').length;
};`;

const { testScriptCode, testCriteria } = generateTestScriptString(
  'wordCount',
  'number',
  [
    { input: ['Here is a test string.'], result: 5 },
    {
      input: ['A journey of a thousand miles begins with a single step.'],
      result: 11,
    },
    {
      input: [
        'JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative styles.',
      ],
      result: 53,
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Word Count',
  description:
    'Create a function that returns the number of words in a string.',
  instructions:
    'Create a called function called wordCount that takes in a string and returns the number of words in that string.',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const wordCount = (inputStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'This problem requires you to divide the string into words. You will then need to return a count of those words.',
  hints: [
    'You will need to break the provided string up by each word.',
    'The javascript split function can be useful for splitting up the elements in a string.',
  ],
  solutionCode: sumTwoIntSolution,
};

export default data;
