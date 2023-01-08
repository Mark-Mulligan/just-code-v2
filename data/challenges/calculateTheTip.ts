// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const calculateTheTipSolution = `const tipCalc = (mealPrice, tipPercent) => {
  let mealPriceAsNum = Number(mealPrice.slice(1));
  let percentTipAsDecimal = Number(tipPercent.slice(0, -1)) / 100;
  let tipCostAsNum = Math.round((mealPriceAsNum * percentTipAsDecimal) * 100) / 100;

  return \`$\${tipCostAsNum.toFixed(2)}\`;
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'tipCalc',
  'string',
  'areEqual',
  [
    { input: ['$25.97', '20%'], result: '$5.19' },
    { input: ['$43.28', '21%'], result: '$9.09' },
    { input: ['$12.63', '18%'], result: '$2.27' },
    { input: ['$101.73', '25%'], result: '$25.43' },
    { input: ['$10.91', '5%'], result: '$0.55' },
    { input: ['$32.12', '19%'], result: '$6.10' },
  ]
);

const data: CodingChallengeData = {
  title: 'Tip Calculator',
  description:
    'Create function that determines how much tip should be left on a meal dining out.',
  instructions:
    'Create a function that takes in two arguments, the meal price (a string, ex. "$24.94") and the tip percent (a string, ex. "20%"), and returns the amount the tip should be. This amount should be return as a string in dollar format (ex. "$5.23", $10.00"). Include two digits for the decimal place even if they are 0.',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const tipCalc = (mealPrice, tipPercent) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'This problem will require you to convert strings to numbers and back to a string. It also deals with some import aspects in programming such as dealing with percents and money values.',
  hints: [
    'You will need to take the meal price and convert it to a number',
    'You will need to convert the tip percent to a floating point number (decimal)',
    'You will need to round the result to the nearest hundredth',
    'The result needs to be converted to money format (starts with a $ and always has two decimal numbers even if they are 0)',
  ],
  solutionCode: calculateTheTipSolution,
};
export default data;
