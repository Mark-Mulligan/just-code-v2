// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

export const reverseStringSolution = `const reverseStr = (str) => {
  return str.split('').reverse().join('');
}`;

const reverseStr = (inputStr: string) => {
  return inputStr.split("").reverse().join("");
};

const reverseStringTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called reverseStr.",
    passed: typeof reverseStr === "function",
    result: typeof reverseStr,
  });
  testResults.push({
    test: "Function returns a string",
    passed: typeof reverseStr("test") === "string",
    result: typeof reverseStr("test"),
  });
  testResults.push({
    test: 'reverseStr("Hello World") returns "dlroW olleH"',
    passed: reverseStr("Hello World") === "dlroW olleH",
    result: reverseStr("Hellow World"),
  });
  testResults.push({
    test: 'reverseStr("Reverse Me") returns "eM esreveR"',
    passed: reverseStr("Reverse Me") === "eM esreveR",
    result: reverseStr("Reverse Me"),
  });
  testResults.push({
    test: 'reverseStr("racecar") returns "racecar"',
    passed: reverseStr("racecar") === "racecar",
    result: reverseStr("racecar"),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Reverse A String",
  description: "Create a function that returns a string reversed.",
  instructions:
    "Create a function that takes in a single argument, a string, and returns a reversed version of that string.",
  difficulty: 1,

  testScriptCode: createTestScriptString(reverseStringTests),
  startingCode:
    "const reverseStr = (str) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(reverseStringTests()),
  problemExplanation:
    "Take a string and reverse it.  Pretty straight forward. It may be easier to convert the string to a different data type.",
  hints: [
    "Try converting the string into an array.",
    "There is a method for reversing arrays",
  ],
  solutionCode: reverseStringSolution,
};

export default data;
