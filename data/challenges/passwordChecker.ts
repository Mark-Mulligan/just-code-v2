// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const passwordCheckerSolution = `const isStrongPassword = (password) => {
  if (password.length < 12) return false;

  const lowercase = /[a-z]/;
  const uppercase = /[A-Z]/;
  const numbers = /[0-9]/;
  const specialCharacters = /\W|_/;

  if (!lowercase.test(password)) return false;
  if (!uppercase.test(password)) return false;
  if (!numbers.test(password)) return false;
  if (!specialCharacters.test(password)) return false;

  return true;
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'isStrongPassword',
  'boolean',
  [
    { input: ['StrongP@ssw0rd'], result: true },
    { input: ['weakPassword1'], result: false },
    { input: ['password'], result: false },
    { input: ['AlmostWorked23'], result: false },
    { input: ['#Back2TheFuture!'], result: true },
    { input: ['2Short!'], result: false },
  ]
);

const data: CodingChallengeData = {
  title: 'Password Checker',
  description: 'Create a function that determines if a password is strong.',
  instructions:
    'Create a function called isStrongPassword that takes in a string and returns boolean of whether or not that string is a strong password. A strong password in this case must be at least 12 characters long and use combination uppercase letters, lowercase letters, numbers, and symbols.',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const isStrongPassword = (password) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'Passwords are still commonly used in a lot of web applications.  It is import for developers to require users to make strong passwords in order to make our applications more secure. This problem gives you an example of how you can use a function to check that a users password is strong enough.',
  hints: [
    'You can check the length of a string using .length.',
    `You will need some way to make sure the string has both upper and lower case letters.`,
    'You will need some way to check that the password has numbers.',
    'You will need some way to check that the password has special characters.',
    'Remember you can iterate over a string or use the split method to easily access individual characters.',
  ],
  solutionCode: passwordCheckerSolution,
};

export default data;
