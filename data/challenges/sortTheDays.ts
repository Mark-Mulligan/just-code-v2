// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const sortTheDaysSolution = `const sortDays = (dayStr) => {
  // All possible day values in correct order
  let dayValues = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

  // split the day string into an array to make it easier to work with
  let dayArr = dayStr.split(',');
  let resultArr = [];

  // Iterate over all the possible day values.  If they exist in our given dayArr, push them to
  // resultArr. This will put the values in order.
  for (let i = 0; i < dayValues.length; i++) {
    if (dayArr.includes(dayValues[i])) {
      resultArr.push(dayValues[i])
    }
  }

  // join the new array we created to format the answer to a single comma separated string
  return resultArr.join(',');
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'sortDays',
  'string',
  'areEqual',
  [
    { input: ['mon,wed,tues'], result: 'mon,tues,wed' },
    { input: ['mon,wed,tues,sat'], result: 'mon,tues,wed,sat' },
    {
      input: ['sun,sat,fri,thurs,wed,tues,mon'],
      result: 'mon,tues,wed,thurs,fri,sat,sun',
    },
    { input: ['wed,tues,sat,fri'], result: 'tues,wed,fri,sat' },
  ]
);

const data: CodingChallengeData = {
  title: 'Sort The Days',
  description: 'Create a function that sorts the given days of the week.',
  instructions:
    "Create a function that takes in a string of days separated by commas (ex. 'mon,wed,tues').  Return a string of days sorted with Monday being the start of the week and sunday being the last. The possible values in the provided string are 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'.",
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const sortDays = (dayStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'For this problem, you are given a comma separated string of abbreviated day values. You will need to sort these values and return the new sorted string. Note that for this problem, first value will be monday (not sunday which is the default in javascript). This problem will require several steps to complete and will require you to convert and format different data types.',
  hints: [
    'You will need to find a way to give values to the day strings.',
    'The javascript split() and join() functions may be of use in this challenge.',
    'There are only 7 possible day values so use that to your advantage',
  ],
  solutionCode: sortTheDaysSolution,
};

export default data;
