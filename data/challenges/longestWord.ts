// Testing Utils
import { createTestScriptString } from "../utils";
import { extractTestCriteria } from "../utils";

// Custom Types
import { TestResult } from "../../types/customTypes";
import { CodingChallengeData } from "../../types/customTypes";

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

const longestWord = (sentence: string) => {
  let sentenceNoPunctuation = sentence.slice(0, -1);
  let words = sentenceNoPunctuation.split(" ");
  let longestWord: any = words[0];

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
};

const longestWordTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function longestWord.",
    passed: typeof longestWord === "function",
    result: typeof longestWord,
  });
  testResults.push({
    test: "Function returns a string.",
    passed: typeof longestWord("This is a test sentence.") === "string",
    result: typeof longestWord("This is a test sentence."),
  });
  testResults.push({
    test: 'longestWord("This is a test sentence.") returns "sentence"',
    passed: longestWord("This is a test sentence.") === "sentence",
    result: longestWord("This is a test sentence."),
  });
  testResults.push({
    test: 'longestWord("Batman is my favorite movie!") return "favorite"',
    passed: longestWord("Batman is my favorite movie!") === "favorite",
    result: longestWord("Batman is my favorite movie!"),
  });
  testResults.push({
    test: 'longestWord("Does this phrase have two words that are the same length?") returns "phrase"',
    passed:
      longestWord(
        "Does this phrase have two words that are the same length?"
      ) === "phrase",
    result: longestWord(
      "Does this phrase have two words that are the same length?"
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Longest Word",
  description: "Create a function that finds the longest word in a sentence.",
  instructions:
    "Create a function called longestWord, that takes in a string and returns the longest word in that string. The string will be a normal sentence that begins with a capital letter and ends with punctuation. If two of the longest words have the same length, return the first one that occurs in the sentence.",
  difficulty: 1,
  testScriptCode: createTestScriptString(longestWordTests),
  startingCode:
    "const longestWord = (sentence) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(longestWordTests()),
  problemExplanation:
    "You will need to find the longest word in a the sentence. Words are separated by spaces so use this to you advantage. Remember the built in length property for strings and to removed the punctuation if the longest word happens to be at the end of the sentence.",
  hints: [
    `Make sure to get ride of the punctuation at the end of the sentence`,
    `Separate the sentence into words. You can use the split(' ') method to put all the words into an array`,
  ],
  solutionCode: longestWordSolution,
};

export default data;
