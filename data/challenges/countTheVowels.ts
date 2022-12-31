// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const countTheVowelsSolution = `const vowelCount = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let strArr = str.split('');
  
  let vowelCount = 0;

  strArr.forEach((char) => {
    let lowerCaseChar = char.toLowerCase();

    if (vowels.includes(lowerCaseChar)) {
      vowelCount++;
    }
  });

  return vowelCount;
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'vowelCount',
  'number',
  [
    { input: ['This is a test sentence.'], result: 7 },
    {
      input: [
        'If you have not checked out FreeCodeCamp, you should. It is Awesome!!!',
      ],
      result: 25,
    },
    { input: ['THIS IS UPPER CASE. this is lowercase.'], result: 12 },
  ]
);

const data: CodingChallengeData = {
  title: 'Count The Vowels',
  description:
    'Create a function that counts the number of vowels there are in a string.',
  instructions:
    'Given a function that takes in a string, return the number of vowels that occur in that string.  Vowels will be a,e,i,o,u (we will not count y). Make sure to look for upper and lower case letters.',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const vowelCount = (str) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'You are given a string and need to count how many times vowels occur in that string. Vowels in this case will be a,e,i,o,u (not counting y in this case).',
  hints: [
    'Converting the string into an array will make it easier to check if each individual character is a vowel (the javascript split method can be of use)',
    'You will need a variable to keep track of home vowels have been counted',
    'For a challenge, consider storing the possible vowel values in the form of an array or object, then you can check each character against that instead of using a bunch of conditional statements',
  ],
  solutionCode: countTheVowelsSolution,
};

export default data;
