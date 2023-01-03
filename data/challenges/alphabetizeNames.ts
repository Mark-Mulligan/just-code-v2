// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const alphabetizeNamesSolution = `const alphabetizeNames = (nameList, sortBy) => {
  let opposite = sortBy === 'last' ? 'first' : 'last';

  return nameList.sort((a, b) => {
    if (a[sortBy].localeCompare(b[sortBy]) === 0) {
      return a[opposite].localeCompare(b[opposite]);
    }

    return a[sortBy].localeCompare(b[sortBy]);
  });
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'alphabetizeNames',
  'array',
  [
    {
      input: [
        [
          { first: 'Harry', last: 'Potter' },
          { first: 'Ron', last: 'Weasly' },
          { first: 'Draco', last: 'Malfoy' },
        ],
        'last',
      ],
      result: [
        { first: 'Draco', last: 'Malfoy' },
        { first: 'Harry', last: 'Potter' },
        { first: 'Ron', last: 'Weasly' },
      ],
    },
    {
      input: [
        [
          { first: 'Michael', last: 'Scott' },
          { first: 'Pam', last: 'Beasly' },
          { first: 'Dwight', last: 'Schrute' },
          { first: 'Jim', last: 'Halpert' },
        ],
        'first',
      ],
      result: [
        { first: 'Dwight', last: 'Schrute' },
        { first: 'Jim', last: 'Halpert' },
        { first: 'Michael', last: 'Scott' },
        { first: 'Pam', last: 'Beasly' },
      ],
    },
    {
      input: [
        [
          { first: 'John', last: 'Smith' },
          { first: 'Jane', last: 'Smith' },
          { first: 'Other', last: 'Name' },
          { first: 'Another', last: 'Name' },
        ],
        'last',
      ],
      result: [
        { first: 'Another', last: 'Name' },
        { first: 'Other', last: 'Name' },
        { first: 'Jane', last: 'Smith' },
        { first: 'John', last: 'Smith' },
      ],
    },
    {
      input: [
        [
          { first: 'John', last: 'Stewart' },
          { first: 'John', last: 'Stamos' },
          { first: 'Chris', last: 'Evans' },
          { first: 'Chris', last: 'Stapleton' },
        ],
        'first',
      ],
      result: [
        { first: 'Chris', last: 'Evans' },
        { first: 'Chris', last: 'Stapleton' },
        { first: 'John', last: 'Stamos' },
        { first: 'John', last: 'Stewart' },
      ],
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Alphabetize Names',
  description:
    'Create a function that returns a list of name objects alphabetized.',
  instructions:
    'Create a function alphabetizeNames that takes in an two arguments, an array of name objects ex. [{ firstName: string, lastName: string }, {...}]. and a string that represents which name to order by (either "first" or "last").  Return a new array container all the name objects in the correct alphabetic order. If grouping by last name and two names are the same, use the first name to decide the order.  Vice versa if ordering by first name.',
  difficulty: 2,
  testScriptCode,

  startingCode:
    'const alphabetizeNames = (nameList, sortBy) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'There are a few parts of this problem that need to be worked out.  First, you will need to find some sort of sorting method.  Then, you will need to iterate over an array of objects.  Lastly, you will need some condition that if two names are the same, you can sort by the other name.',
  hints: [
    'Maybe try using the built in sort() method for javascript.',
    'You can use the javascript localeCompare() to compare two strings for alphabetic order.',
    'You can use the second argument in the function to index the object.',
  ],
  solutionCode: alphabetizeNamesSolution,
};

export default data;
