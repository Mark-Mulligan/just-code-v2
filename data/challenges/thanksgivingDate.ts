// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const thanksgivingDateSolution = `const findThanksgivingDate = (year) => {
  let numberOfThursdays = 0;
  let thanksgivingDate;

  for (let day = 1; day < 31; day++) {
    let date = new Date(\`11-\${day}-\${year}\`);

    if (date.getDay() === 4) {
      numberOfThursdays++;
    }

    if (numberOfThursdays === 4) {
      thanksgivingDate = date;
      break;
    }
  }

  return thanksgivingDate;
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'findThanksgivingDate',
  'date',
  [
    { input: [2022], result: new Date('11-24-2022') },
    { input: [1980], result: new Date('11-27-1980') },
    { input: [1995], result: new Date('11-23-1995') },
    { input: [2030], result: new Date('11-28-2030') },
  ]
);

const data: CodingChallengeData = {
  title: 'Thanksgiving Date',
  description:
    'Create a function that returns the date that Thanksgiving will occur in a given year.',
  instructions:
    'Create a function called findThanksgivingDate.  This function will take in a number (a target year), and return a date object representing the date Thanksgiving will occur that year. Thanksgiving always occurs on the fourth Thursday in November each year.',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const findThanksgivingDate = (year) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation: `To solve this problem, you will need to create a date object given the year. You will also need to loop through the month of November to find the fourth Thursday in that month. Then you will need to return the corresponding date object.`,
  hints: [
    `Create a date object using the year and November 1st`,
    `Iterate through the month of november, create a new date during each iteration.`,
    `You can check what day each date is by using date.getDay()`,
    `You will need to keep track of all the thursday since Thanksgiving occurs on the 4th Thursday in November.`,
    `Make sure to return the date object.`,
  ],
  solutionCode: thanksgivingDateSolution,
};

export default data;
