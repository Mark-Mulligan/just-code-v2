// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const compareTwoObjsSolution = `const compareObjs = (obj1, obj2) => {
  // https://www.30secondsofcode.org/js/s/equals
  // comparing two objects true is a lot of work. This code handles a deep compare of two objects
  // even though a simpler version would work for these test cases
  
  if (obj1 === obj2) return true;
  if (obj1 instanceof Date && obj2 instanceof Date)
    return obj1.getTime() === obj2.getTime();
  if (!obj1 || !obj2 || (typeof obj1 !== 'object' && typeof obj2 !== 'object'))
    return obj1 === obj2;
  if (obj1.prototype !== obj2.prototype) return false;
  const keys = Object.keys(obj1);
  if (keys.length !== Object.keys(obj2).length) return false;
  return keys.every(k => compareObjs(obj1[k], obj2[k]));
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'compareObjs',
  'boolean',
  [
    { input: [{ name: 'test' }, { name: 'test' }], result: true },
    {
      input: [
        { name: 'John', job: 'Web Developer' },
        { name: 'Steve', job: 'Welder' },
      ],
      result: false,
    },
    {
      input: [
        { title: 'The Witcher', streaming: 'Netflix' },
        { title: 'The Witcher', streaming: 'Netflix' },
      ],
      result: true,
    },
    {
      input: [
        { favorites: { food: 'pizza', color: 'green' }, age: 27 },
        { age: 27, favorites: { food: 'pizza', color: 'green' } },
      ],
      result: true,
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Compare Two Objects',
  description:
    'Create a function that sees if two objects contain the same key, value pairs.',
  instructions:
    'Create a function that takes in two arguments, two objects, and returns a boolean of whether or not those two objects have the same key, value pairs. Remember, objects in javascript are reference types so you can use === to compare them.',
  difficulty: 3,
  testScriptCode,
  startingCode:
    'const compareObjs = (obj1, obj2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'This problem is a little more difficult then it may first appear. Remember, to compare two objects, you will need to do a deep comparison, make sure all keys and values are the same.',
  hints: [
    'Javascript objs are reference types so you can not compare them using ===',
    'You will need to look through all keys and values of each object directly.',
    'Do not forget to account for different data types such as Dates or Functions.',
  ],
  solutionCode: compareTwoObjsSolution,
};

export default data;
