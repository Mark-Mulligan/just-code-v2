// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData, CustomTest } from '../../types/customTypes';

const combineTwoArraysSolution = `const combineArrs = (arr1, arr2) => {
  // create a new array from the two input arrays
  let newArr = [...arr1, ...arr2];

  // if the type of the array is strings, then sort one way
  if (typeof newArr[0] === "string") {
    return newArr.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase())
    })
    // Else sort by number
  } else if (typeof newArr[0] === "number") {
    return newArr.sort((a, b) => {
      return a - b;
    })
  }
}`;

const customTests: CustomTest[] = [
  {
    testDescription:
      'Function returns a new array, not a copy of either array in the arguments to the function.',
    passed:
      'combineArrs(arr1, arr2) !== arr1 && combineArrs(arr1, arr2) !== arr2',
    result:
      '(combineArrs(arr1, arr2) !== arr1 && combineArrs(arr1, arr2) !== arr2) ? "A new array." : "A reference to arr1 or arr2."',
    customVariables: [`const arr1 = [1, 3, 5];`, `const arr2 = [2, 4, 6];`],
  },
];

const { testCriteria, testScriptCode } = generateTestScriptString(
  'combineArrs',
  'array',
  'areEqual',
  [
    {
      input: [
        [1, 3, 5],
        [2, 4, 6],
      ],
      result: [1, 2, 3, 4, 5, 6],
    },
    {
      input: [
        ['dogs', 'cats', 'hamsters'],
        ['snakes', 'rats', 'chickens'],
      ],
      result: ['cats', 'chickens', 'dogs', 'hamsters', 'rats', 'snakes'],
    },
    {
      input: [
        [5, -3, -1, 8, 2],
        [10, 9, -2, -4, 7],
      ],
      result: [-4, -3, -2, -1, 2, 5, 7, 8, 9, 10],
    },
    {
      input: [
        ['mIxedCasing', 'mIXedCase', 'MixedcaSes'],
        ['MIXEDCASED', 'mistake', 'Mistaken'],
      ],
      result: [
        'mistake',
        'Mistaken',
        'mIXedCase',
        'MIXEDCASED',
        'MixedcaSes',
        'mIxedCasing',
      ],
    },
  ],
  customTests
);

const data: CodingChallengeData = {
  title: 'Combine Two Arrays',
  description:
    'Create a function that combines two arrays into one array that is sorted.',
  instructions:
    'Create a function that takes in two arguments, both arrays, and combines them into a new array. This array must also be sorted. The arrays will have either strings or numbers so make sure the function can sort alphabetically. Also watch out for capitalization in the string values.',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const combineArrs = (arr1, arr2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'For this problem you will need to combine the values from two arrays into a new single array.  This array will also be sorted.  The arrays will either be numbers or strings only.  Make sure to watch out for capitalization as well when putting an array in alphabetical order.',
  hints: [
    'You will need to first combine the two arrays into one',
    'After create the new combination array, you can use the javascript sort method to put the array in the correct order',
    'The sort method will need two different sorting logic passed into it.  One for sorting numbers and the other for sorting strings.',
    'Make sure to account for upper and lower case letters in your string sorting logic (maybe convert all letters to a single case).',
  ],
  solutionCode: combineTwoArraysSolution,
};

export default data;
