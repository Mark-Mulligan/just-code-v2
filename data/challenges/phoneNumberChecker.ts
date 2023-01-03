// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const phoneNumberCheckerSolution = `const validPhoneNum = (phoneNum) => {
  // For case where a phone number 10 digits no spaces
  if (phoneNum.length === 10 && typeof Number(phoneNum) === "number") {
    return true;
  }
  
  // works for all scenarios other than 10 digits only
  let phoneNumberRegex = ${/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/};
  return phoneNumberRegex.test(phoneNum);
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'validPhoneNum',
  'boolean',
  [
    { input: ['781-548-9900'], result: true },
    { input: ['781891-1234'], result: false },
    { input: ['1234567890'], result: true },
    { input: ['12345678904'], result: false },
    { input: ['987 654 3210'], result: true },
    { input: ['987 6543210'], result: false },
    { input: ['(545) 763-2574'], result: true },
    { input: ['(545)763-2574'], result: false },
    { input: ['(333)-454-3658'], result: true },
    { input: ['(333)-454-/3658'], result: false },
  ]
);

const data: CodingChallengeData = {
  title: 'Phone Number Checker',
  description:
    'Create a function that reads a phone number and determines if it is in a valid format.',
  instructions:
    'Create a function called validPhoneNum that takes in a string (phoneNum) and returns boolean of whether or not the provided phone number is in a valid format. Valid formats are: XXXXXXXXXX, XXX XXX XXXX, XXX-XXX-XXXX, (XXX) XXX-XXXX, (XXX)-XXX-XXXX. Phone numbers will not have a 1 extension on the front so should have 10 digits.',
  difficulty: 3,
  testScriptCode,
  startingCode:
    'const validPhoneNum = (phoneNum) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'For this problem, you will need to check for a couple of things. First, make sure the input string has 10 digits. Then make sure those 10 digits are separated by an acceptable characters or all together. Remember, valid formats include: XXXXXXXXXX, XXX XXX XXXX, XXX-XXX-XXXX, (XXX) XXX-XXXX, (XXX)-XXX-XXXX',
  hints: [
    'Regex would be useful for this problem',
    `If you don't want to use regex, then you will need to write a way to analyze each character in the provided string.`,
  ],
  solutionCode: phoneNumberCheckerSolution,
};

export default data;
