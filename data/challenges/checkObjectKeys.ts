// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const checkObjectKeysSolution = `const hasKey = (obj, targetKey) => {
  return obj.hasOwnProperty(targetKey);
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'hasKey',
  'boolean',
  [
    {
      input: [{ firstName: 'Mark', lastName: 'Mulligan' }, 'firstName'],
      result: true,
    },
    { input: [{ label: 'Program on', value: '1' }, 'labels'], result: false },
    {
      input: [
        { dates: ['12-4-2022', '12-11-2022'], amounts: [10, 20] },
        'dates',
      ],
      result: true,
    },
    { input: [{ test: 'Test', tester: 'Tester' }, 'testing'], result: false },
  ]
);

const data: CodingChallengeData = {
  title: 'Check Key in Object',
  description:
    'Create a function that determines wether a given key exists in an object.',
  instructions:
    'Create a function called hasKey that takes in an object, and targetKey as a string.  The function should return a boolean value based on whether the given object contains the target key.',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const hasKey = (obj, targetKey) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'Objects in javascript are made up of key, value pairs. In this case, we want to determine if a given key exists in a given object.',
  hints: [
    'the .hasOwnProperty(key: string) function can be called on objects in javascript.  It returns a boolean based on whether or not an object has a provided key.',
  ],
  solutionCode: checkObjectKeysSolution,
};

export default data;
