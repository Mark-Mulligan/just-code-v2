// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

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

const vowelCount = (text: string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = 0;
  let textArr = text.split("");

  textArr.forEach((char) => {
    if (vowels.includes(char.toLowerCase())) {
      result++;
    }
  });

  return result;
};

const countTheVowelsTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called vowelCount.",
    passed: typeof vowelCount === "function",
    result: typeof vowelCount,
  });
  testResults.push({
    test: "Function returns a number",
    passed: typeof vowelCount("abcdefg") === "number",
    result: typeof vowelCount("abcdefg"),
  });
  testResults.push({
    test: 'vowelCount("This is a test sentence.") returns 7 ',
    passed: vowelCount("This is a test sentence.") === 7,
    result: vowelCount("This is a test sentence."),
  });
  testResults.push({
    test: 'vowelCount("If you have not checked out FreeCodeCamp, you should. It is Awesome!!!") returns 25',
    passed:
      vowelCount(
        "If you have not checked out FreeCodeCamp, you should. It is Awesome!!!"
      ) === 25,
    result: vowelCount(
      "If you have not checked out FreeCodeCamp, you should. It is Awesome!!!"
    ),
  });
  testResults.push({
    test: 'vowelCount("THIS IS UPPER CASE. this is lowercase.") returns 12',
    passed: vowelCount("THIS IS UPPER CASE. this is lowercase.") === 12,
    result: vowelCount("THIS IS UPPER CASE. this is lowercase."),
  });
  return testResults;
};

const data: CodingChallengeData = {
  title: "Count The Vowels",
  description:
    "Create a function that counts the number of vowels there are in a string.",
  instructions:
    "Given a function that takes in a string, return the number of vowels that occur in that string.  Vowels will be a,e,i,o,u (we will not count y). Make sure to look for upper and lower case letters.",
  difficulty: 1,
  testScriptCode: createTestScriptString(countTheVowelsTests),
  startingCode:
    "const vowelCount = (str) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(countTheVowelsTests()),
  problemExplanation:
    "You are given a string and need to count how many times vowels occur in that string. Vowels in this case will be a,e,i,o,u (not counting y in this case).",
  hints: [
    "Converting the string into an array will make it easier to check if each individual character is a vowel (the javascript split method can be of use)",
    "You will need a variable to keep track of home vowels have been counted",
    "For a challenge, consider storing the possible vowel values in the form of an array or object, then you can check each character against that instead of using a bunch of conditional statements",
  ],
  solutionCode: countTheVowelsSolution,
};

export default data;
