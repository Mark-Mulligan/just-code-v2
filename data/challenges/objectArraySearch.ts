// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const objectArraySearchSolution = `const findOne = (objArray, targetKey, targetValue) => {
  return objArray.find((object) => {
    return object[targetKey] === targetValue;
  });
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'findOne',
  'object',
  [
    {
      input: [
        [
          { id: 1, name: 'superUser' },
          { id: 2, name: 'admin' },
          { id: 3, name: 'user' },
        ],
        'id',
        2,
      ],
      result: { id: 2, name: 'admin' },
    },
    {
      input: [
        [
          { id: 1, name: 'superUser' },
          { id: 2, name: 'admin' },
          { id: 3, name: 'user' },
        ],
        'id',
        4,
      ],
      result: undefined,
    },
    {
      input: [
        [{ state: 'tx' }, { state: 'ny' }, { state: 'ca' }, { state: 'nm' }],
        'state',
        'tx',
      ],
      result: { state: 'tx' },
    },
    {
      input: [
        [{ state: 'tx' }, { state: 'ny' }, { state: 'ca' }, { state: 'nm' }],
        'state',
        'nv',
      ],
      result: undefined,
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Object Array Search',
  description: 'Create a function that finds an object in an array of objects.',
  instructions:
    'Create a function called findOne that takes in three arguments, an array of objects, a target key, and a target value for said key. The function should return a single object from the given array if that array has an object that contains the target key with corresponding target value.  If the target key and value are not found on any of the objects in the provided array, the function should return undefined.',
  testScriptCode,
  difficulty: 2,
  startingCode:
    'const findOne = (objArray, targetKey, targetValue) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    "In this problem, you will need to work with both objects and arrays. You will need to be able to look thought the array to see if any the objects inside of it have a key matching targetKey as well as the targetValue matching that given key's value.",
  hints: [
    'You will need some way to loop over the array. This could be a for loop, forEach, or even the javascript filter function.',
    'You will need to check each object for the target key and value to see if they match the function input.',
    'You will need to return the object if there is a match or undefined if there is not a match.',
  ],
  solutionCode: objectArraySearchSolution,
};

export default data;
