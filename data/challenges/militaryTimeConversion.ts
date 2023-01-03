// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const militaryTimeConversionSolution = `const militaryTimeConverter = (timeStr) => {
  timeArr = timeStr.split(':'); // convert to array

  let hours = Number(timeArr[0]);
  let minutes = Number(timeArr[1]);
  let seconds = Number(timeArr[2]);

  let timeValue = "";

  if (hours > 0 && hours <= 12) {
    timeValue= "" + hours;
  } else if (hours > 12) {
    timeValue= "" + (hours - 12);
  } else if (hours == 0) {
    timeValue= "12";
  }
 
  timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
  timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
  timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM

  return timeValue;
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'militaryTimeConverter',
  'string',
  [
    { input: ['22:33:06'], result: '10:33:06 PM' },
    { input: ['08:15:27'], result: '8:15:27 AM' },
    { input: ['15:45:00'], result: '3:45:00 PM' },
    { input: ['18:00:10'], result: '6:00:10 PM' },
  ]
);

const data: CodingChallengeData = {
  title: 'Military Time Conversion',
  description: 'Convert a given military time to standard time with AM/PM.',
  instructions:
    'Create a function that takes in a military time string, and returns a new formatted string with standard time using AM/PM',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const militaryTimeConverter = (timeStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'Given a string in military time, convert it to standard time. There are many different ways to do this.  Make sure to format the result exactly as the tests expect.',
  hints: [
    'It might help to separate the given time into hours, minutes, and seconds',
    'You should convert the string values to numbers to make them easier to work with',
    'Conditionals will help to determine things such as AM/PM or leading 0s (example being 9 seconds on a time which would convert to 09)',
    'Make sure the result is converted back to a string',
  ],
  solutionCode: militaryTimeConversionSolution,
};

export default data;
