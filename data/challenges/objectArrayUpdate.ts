// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const objectArrayUpdateSolution = `const update = (objArray, id, updateProperties) => {
  return objArray.map((obj) => {
    if (obj.id === id) {
      let newObj = { ...obj };

      for (const [key, value] of Object.entries(updateProperties)) {
        newObj[key] = value;
      }

      return newObj;
    }

    return obj;
  });
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'update',
  'array',
  [
    {
      input: [
        [
          { id: 1, username: 'tyrion98' },
          { id: 2, username: 'bandit73' },
          { id: 3, username: 'guppy22' },
        ],
        3,
        { username: 'guppy33' },
      ],
      result: [
        { id: 1, username: 'tyrion98' },
        { id: 2, username: 'bandit73' },
        { id: 3, username: 'guppy33' },
      ],
    },
    {
      input: [
        [
          { id: 1, name: 'superUser' },
          { id: 2, name: 'admin' },
          { id: 3, name: 'user' },
        ],
        4,
        { name: 'client' },
      ],
      result: [
        { id: 1, name: 'superUser' },
        { id: 2, name: 'admin' },
        { id: 3, name: 'user' },
      ],
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Object Array Update',
  description:
    'Create a function that updates an object in an array of objects',
  instructions:
    "Create a function called update that takes in three arguments, an array of objects, an id, and an object of key value pairs. The function should update the object in array with the provided id, updating all the key value pairs from provided in the function's third argument.",
  testScriptCode,
  difficulty: 2,
  startingCode:
    'const update = (objArray, id, updateProperties) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    "In this problem, you will need to work with both objects and arrays. You will need to find a way to search the array to find the object that matches the given id.  You will then need to be able to update the properties on that object to reflect the new properties provided in the function's third argument.",
  hints: [
    'You will need some way to loop over the array. This could be a for loop, forEach, or even the javascript filter function.',
    "Since you know you are look for an id, this can be checked on each object. Each object has a unique id so you don't have to worry about duplicates.",
    'You will need a way to update the keys of the target object or add new keys to said object. The spread syntax in javascript can be useful to help with this.',
  ],
  solutionCode: objectArrayUpdateSolution,
};

export default data;
