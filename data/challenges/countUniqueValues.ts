// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const countUniqueValuesSolution = `const countUnique = (arr) => {
  let result = {};

  arr.forEach((item) => {
    if (result.hasOwnProperty(item)) {
      result[item] = result[item] + 1;
    } else {
      result[item] = 1;
    }
  });

  return result;
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'countUnique',
  'object',
  [
    {
      input: [[1, 2, 1, 3, 4, 3, 3]],
      result: {
        1: 2,
        2: 1,
        3: 3,
        4: 1,
      },
    },
    {
      input: [
        ['Pam', 'Jim', 'Michael', 'Pam', 'Toby', 'Jim', 'Jim', 'Michael'],
      ],
      result: {
        Pam: 2,
        Jim: 3,
        Michael: 2,
        Toby: 1,
      },
    },
    {
      input: [['test', 1, 'test', 1, 'test', 2, 'test', 3]],
      result: { test: 4, 1: 2, 2: 1, 3: 1 },
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Count The Unique Values',
  description: 'Create a function that counts the unique values in an array',
  instructions:
    'Create a function that takes in one argument, an array, and returns an object. The return object will contains keys of all the unique items in that array with values that are the number of time that unique value occurs in the array.',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const countUnique = (arr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'For this problem, you will basically be converting an array into a javascript object. The keys of that object will be the unique values from the array, and the values for those keys will be the number of times each of those values occurs in the array.',
  hints: [
    'You will need to create a variable to store your new object',
    'You can use the hasOwnProperty function on an object to see a certain key already exists on an object.',
    'You will need a way to initialize new properties to your result object.',
    'You can access property on any object dynamically using the bracket syntax (obj[targetKeyAsString]).',
  ],
  solutionCode: countUniqueValuesSolution,
};

export default data;
