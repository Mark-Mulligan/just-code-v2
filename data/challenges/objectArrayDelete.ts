// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const objectArrayDeleteSolution = `const deleteOne = (objArray, targetKey, targetValue) => {
  return objArray.filter(item => item[targetKey] !== targetValue);
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'deleteOne',
  'array',
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
      result: [
        { id: 1, name: 'superUser' },
        { id: 3, name: 'user' },
      ],
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
      result: [
        { id: 1, name: 'superUser' },
        { id: 2, name: 'admin' },
        { id: 3, name: 'user' },
      ],
    },
    {
      input: [
        [{ state: 'tx' }, { state: 'ny' }, { state: 'ca' }, { state: 'nm' }],
        'state',
        'tx',
      ],
      result: [{ state: 'ny' }, { state: 'ca' }, { state: 'nm' }],
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Object Array Delete',
  description:
    'Create a function that removes an object from an array of objects.',
  instructions:
    'Create a function called deleteOne that takes in three arguments, an array of objects, a target key, and a target value for said key. The function should return a copy of the array with the object matching the target key and value removed.  If the target key and value are not found on any of the objects in the provided array, the function should return a copy of the original array.',
  testScriptCode,
  difficulty: 2,
  startingCode:
    'const deleteOne = (objArray, targetKey, targetValue) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    "In this problem, you will need to work with both objects and arrays. You will need to be able to look thought the array to see if any the objects inside of it have a key matching targetKey as well as the targetValue matching that given key's value.",
  hints: [
    'The javascript filter function will be useful in solving this challenge.',
    'You will need to check each object for the target key and value to see if they match the function input.',
  ],
  solutionCode: objectArrayDeleteSolution,
};

export default data;
