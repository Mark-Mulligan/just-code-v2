// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData, CustomTest } from '../../types/customTypes';

const combineTwoObjsSolution = `const combineTwoObjs = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
}`;

const customTests: CustomTest[] = [
  {
    testDescription:
      'Function returns a new object, not a copy of either object in the arguments to the function.',
    passed:
      'combineTwoObjs(obj1, obj2) !== obj1 && combineTwoObjs(obj1, obj2) !== obj2',
    result:
      '(combineTwoObjs(obj1, obj2) !== obj1 && combineTwoObjs(obj1, obj2) !== obj2) ? "A new object." : "A reference to obj1 or obj2."',
    customVariables: [
      `const obj1 = { state: 'TX', address: '1234 Storyboard ln' };`,
      `const obj2 = { zip: '12345' };`,
    ],
  },
];

const { testCriteria, testScriptCode } = generateTestScriptString(
  'combineTwoObjs',
  'object',
  'areEqual',
  [
    {
      input: [{ state: 'TX', address: '1234 Storyboard ln' }, { zip: '12345' }],
      result: {
        state: 'TX',
        address: '1234 Storyboard ln',
        zip: '12345',
      },
    },
    {
      input: [
        { movie: 'Batman Begins' },
        { director: 'Christopher Nolan', releaseDate: '06-15-2005' },
      ],
      result: {
        movie: 'Batman Begins',
        director: 'Christopher Nolan',
        releaseDate: '06-15-2005',
      },
    },
  ],
  customTests
);

const data: CodingChallengeData = {
  title: 'Combine Two Objects',
  description: 'Create a function that combines two objects into a single one.',
  instructions:
    'Create a function called combineTwoObjs that takes in two objects, and returns a single object with all the key value pairs from each object. The function should return a new object. You can assume both objects will have unique key value pairs.',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const combineTwoObjs = (obj1, obj2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'There a different ways to do this problem, but the easiest will be using some of the ES6 syntax of working with objects.',
  hints: [
    'Make sure to return a new object.',
    'Using the spread syntax will make this problem a lot easier.',
  ],
  solutionCode: combineTwoObjsSolution,
};

export default data;
