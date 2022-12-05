// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const checkForDuplicatesSolution = `hasDuplicateValues = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }

  return false;
};`;

const hasDuplicateValues = (arr: string[] | number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }

  return false;
};

const checkForDuplicatesTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function hasDuplicateValues.",
    passed: typeof hasDuplicateValues === "function",
    result: typeof hasDuplicateValues,
  });
  testResults.push({
    test: "Function returns a boolean.",
    passed: typeof hasDuplicateValues([1, 2, 3, 4, 5, 1]) === "boolean",
    result: typeof hasDuplicateValues([1, 2, 3, 4, 5, 1]),
  });
  testResults.push({
    test: "hasDuplicateValues([1, 2, 3, 4, 5, 1]) returns true",
    passed: hasDuplicateValues([1, 2, 3, 4, 5, 1]) === true,
    result: JSON.stringify(hasDuplicateValues([1, 2, 3, 4, 5, 1])),
  });
  testResults.push({
    test: "hasDuplicateValues(10, 12, 31, 4, 25, -3]) returns false",
    passed: hasDuplicateValues([10, 12, 31, 4, 25, -3]) === false,
    result: JSON.stringify(hasDuplicateValues([10, 12, 31, 4, 25, -3])),
  });
  testResults.push({
    test: `hasDuplicateValues(['cheese', 'cake', 'cookies', 'fries']) returns false`,
    passed:
      hasDuplicateValues(["cheese", "cake", "cookies", "fries"]) === false,
    result: JSON.stringify(
      hasDuplicateValues(["cheese", "cake", "cookies", "fries"])
    ),
  });
  testResults.push({
    test: `hasDuplicateValues(['test', 'testing', 'test', 'testing', 'tested']) returns true`,
    passed:
      hasDuplicateValues(["test", "testing", "test", "testing", "tested"]) ===
      true,
    result: JSON.stringify(
      hasDuplicateValues(["test", "testing", "test", "testing", "tested"])
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Check For Duplicates",
  description:
    "Write a function that checks if there are any duplicate values in an array.",
  instructions:
    "Write a function called hasDuplicateValues that takes in an array and returns a boolean value of whether or not that array has duplicate values. Not, the arrays provided to function will only have primitive values (strings and numbers).",
  difficulty: 1,
  testScriptCode: createTestScriptString(checkForDuplicatesTests),
  startingCode:
    "const hasDuplicateValues = (arr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(checkForDuplicatesTests()),
  problemExplanation:
    "Check an array for duplicate values. You will need to iterate through all possible combinations in an array to see two values match.",
  hints: [
    "Nested for loops can help you iterate through all possible combinations.",
    'You can use "===" to compare two primitive values for equality.',
    "As soon you find a duplicate value, you can return the result without having to continue going through the array",
  ],
  solutionCode: checkForDuplicatesSolution,
};

export default data;
