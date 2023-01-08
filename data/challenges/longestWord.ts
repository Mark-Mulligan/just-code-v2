// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

export const longestWordSolution = `const longestWord = (sentence) => {
  let sentenceNoPunctuation = sentence.slice(0, -1);
  let words = sentenceNoPunctuation.split(' ');
  let longestWord = words[0];

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'longestWord',
  'string',
  'areEqual',
  [
    { input: ['This is a test sentence.'], result: 'sentence' },
    { input: ['Batman is my favorite movie!'], result: 'favorite' },
    {
      input: ['Does this phrase have two words that are the same length?'],
      result: 'phrase',
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Longest Word',
  description: 'Create a function that finds the longest word in a sentence.',
  instructions:
    'Create a function called longestWord, that takes in a string and returns the longest word in that string. The string will be a normal sentence that begins with a capital letter and ends with punctuation. If two of the longest words have the same length, return the first one that occurs in the sentence.',
  difficulty: 1,
  testScriptCode,
  startingCode:
    'const longestWord = (sentence) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'You will need to find the longest word in a the sentence. Words are separated by spaces so use this to you advantage. Remember the built in length property for strings and to removed the punctuation if the longest word happens to be at the end of the sentence.',
  hints: [
    `Make sure to get ride of the punctuation at the end of the sentence`,
    `Separate the sentence into words. You can use the split(' ') method to put all the words into an array`,
  ],
  solutionCode: longestWordSolution,
};

export default data;
