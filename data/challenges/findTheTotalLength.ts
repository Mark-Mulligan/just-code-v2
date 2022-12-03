// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const findTheTotalLengthSolution = `const totalLength = (strArr) => {
  return strArr.join('').length;
}`;

const totalLength = (inputArr: string[]) => {
  return inputArr.join("").length;
};

const findTheTotalLengthTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function totalLength.",
    passed: typeof totalLength === "function",
    result: typeof totalLength,
  });
  testResults.push({
    test: "Function returns a number.",
    passed: typeof totalLength(["this", "is", "a", "test"]) === "number",
    result: typeof totalLength(["this", "is", "a", "test"]),
  });
  testResults.push({
    test: 'totalLength(["Somebody", "once", "told", "me"]) returns 18',
    passed: totalLength(["Somebody", "once", "told", "me"]) === 18,
    result: totalLength(["Somebody", "once", "told", "me"]),
  });
  testResults.push({
    test: 'totalLength(["the", "world", "is", "gonna", "roll", "me"]) return 21',
    passed: totalLength(["the", "world", "is", "gonna", "roll", "me"]) === 21,
    result: totalLength(["the", "world", "is", "gonna", "roll", "me"]),
  });
  testResults.push({
    test: `totalLength(["I", "ain't", "the", "sharpest", "tool", "in", "the", "shed"] returns 30`,
    passed:
      totalLength([
        "I",
        `ain't`,
        "the",
        "sharpest",
        "tool",
        "in",
        "the",
        "shed",
      ]) === 30,
    result: totalLength([
      "I",
      `ain't`,
      "the",
      "sharpest",
      "tool",
      "in",
      "the",
      "shed",
    ]),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Find The Total Length",
  description:
    "Create a function that finds the total length of all the string in an array combined.",
  instructions:
    "Create a function that takes in an array of strings. Return the length of all the strings in that array combined. In others words, the length of what the string would be if all elements of the array were combined into one long string.",
  difficulty: 1,
  testScriptCode: createTestScriptString(findTheTotalLengthTests),
  startingCode:
    "const totalLength = (strArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(findTheTotalLengthTests()),
  problemExplanation:
    "For this problem, you will need to combine the array of words into a string, then it should be easier get the total length of the string.",
  hints: [
    "You can combine an array of strings into a single string using the join() method.",
    "You can find the length of a string with .length.",
  ],
  solutionCode: findTheTotalLengthSolution,
};

export default data;
