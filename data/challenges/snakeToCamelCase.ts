// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const snakeToCamelSolution = `const snakeToCamel = (str) => {
  return str.toLowerCase().replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
};`;

const snakeToCamel = (inputStr: string) => {
  return inputStr;
};

const snakeToCamelTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called snakeToCamel.",
    passed: typeof snakeToCamel === "function",
    result: typeof snakeToCamel,
  });
  testResults.push({
    test: "Function returns a string",
    passed: typeof snakeToCamel("python_style") === "string",
    result: typeof snakeToCamel("python_style"),
  });
  testResults.push({
    test: 'snakeToCamel("python_style") returns "pythonStyle"',
    passed: snakeToCamel("python_style") === "pythonStyle",
    result: snakeToCamel("python_style"),
  });
  testResults.push({
    test: 'snakeToCamel("did_you_use_regex") returns "didYouUseRegex"',
    passed: snakeToCamel("did_you_use_regex") === "didYouUseRegex",
    result: snakeToCamel("did_you_use_regex"),
  });
  testResults.push({
    test: 'snakeToCamel("what_about_stack_overflow") returns "pythonStyle"',
    passed:
      snakeToCamel("what_about_stack_overflow") === "whatAboutStackOverflow",
    result: snakeToCamel("what_about_stack_overflow"),
  });
  testResults.push({
    test: 'snakeToCamel("Bad_ExAMPle_Of_SnakE_Case") returns "badExampleOfSnakeCase"',
    passed:
      snakeToCamel("Bad_ExAMPle_Of_SnakE_Case") === "badExampleOfSnakeCase",
    result: snakeToCamel("Bad_ExAMPle_Of_SnakE_Case"),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Snake Case to Camel Case",
  description:
    "Create a function that converts a snake case string to a camel case string.",
  instructions:
    "Create a function that takes in one argument, a snake case string, and converts that string into camel case",
  difficulty: 3,
  testScriptCode: createTestScriptString(snakeToCamelTests),
  startingCode:
    "const snakeToCamel = (str) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(snakeToCamelTests()),
  problemExplanation:
    "This problem will involve you having to work and manipulate strings in javascript. Most variables in python are formatted in snake case while javascript mainly uses camel case. By creating a function that converts snake case to camel case, you will not only learn about the two naming conventions, you will also get exposed to many of javascript tools for working with strings.",
  hints: [
    "regex (aka regular expressions) might be useful for solving this problem.",
    "Some of the inputs are not 100% correct versions of snake case so account for that.",
  ],
  solutionCode: snakeToCamelSolution,
};

export default data;
