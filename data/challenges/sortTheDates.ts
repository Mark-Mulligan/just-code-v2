// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const sortTheDatesSolution = `const sortDates = (inputArrDateStrings) => {
  return inputArrDateStrs.sort((a, b) => {
    return new Date(a) - new Date(b);
  });
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'sortDates',
  'array',
  [
    {
      input: [['12-2-2020', '12-3-2020', '5-3-2020']],
      result: ['5-3-2020', '12-2-2020', '12-3-2020'],
    },
    {
      input: [['12-25-2018', '11-24-2018', '10-31-2018']],
      result: ['10-31-2018', '11-24-2018', '12-25-2018'],
    },
    {
      input: [['4-1-2000', '4-1-2008', '4-1-1994']],
      result: ['4-1-1994', '4-1-2000', '4-1-2008'],
    },
    {
      input: [['5-1-1990', '5-2-1990', '10-6-1980', '11-7-2000', '7-3-2030']],
      result: ['10-6-1980', '5-1-1990', '5-2-1990', '11-7-2000', '7-3-2030'],
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Sort The Dates',
  description:
    'Create a function that puts an array of dates in order from earliest to latest.',
  instructions:
    'Create a function that takes in an array of date strings (formatted like "12-25-2018") and return an array of those same dates in order from earliest to latest.',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const sortDates = (inputArrDateStrings) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'For this problem, you will need to take an array of date strings and sort them in order from earliest date to latest date.',
  hints: [
    'The javascript sort method would be a good way to sort the dates',
    'You will need to provide a function to the sort method in order for the dates to be sorted',
    'You will need to convert the sorted strings to javascript date objects in order to sort them.',
  ],
  solutionCode: sortTheDatesSolution,
};

export default data;
