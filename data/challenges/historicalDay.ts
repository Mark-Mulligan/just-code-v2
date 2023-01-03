// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const historicalDaySolution = `const findDay = (dateStr) => {
  let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let givenDate = new Date(dateStr);
  let dayNum = givenDate.getDay();

  return weekDays[dayNum];
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'findDay',
  'string',
  [
    { input: ['10-19-1987'], result: 'Monday' },
    { input: ['05-25-1977'], result: 'Wednesday' },
    { input: ['07-21-1969'], result: 'Monday' },
    { input: ['06-29-2007'], result: 'Friday' },
  ]
);

const data: CodingChallengeData = {
  title: 'Historical Day',
  description:
    'Create a function that takes a date string and returns what day of the week that date occurred on.',
  instructions:
    'Create a function that takes in one argument, a date string formatted like "10-19-1987", and returns what day of the week that date occurred on.  Return values should be one of the follow: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const findDay = (dateStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'This problem will require you to do a couple of different things. One, you will need to convert the date string to a date object.  Then use that date object to return a string matching the desired results.',
  hints: [
    'You can create a date object by using new Date(pass dateStr)',
    'dateObj.getDay() returns the day of the week for a given date as a number (0 is Sunday, 6 is Saturday)',
    'Maybe store the day of the week results as strings in an data structure that can be indexed.',
  ],
  solutionCode: historicalDaySolution,
};

export default data;
