// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const removeDuplicatesInArraySolution = `const removeDuplicates = (arr) => {
  return [...new Set(arr)];
}`;

const removeDuplicates = (inputArr: any[]) => {
  return [...new Set(inputArr)];
};

const removeDuplicatesInArrayTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called removeDuplicates.",
    passed: typeof removeDuplicates === "function",
    result: typeof removeDuplicates,
  });
  testResults.push({
    test: "Function returns an array.",
    passed: Array.isArray(removeDuplicates([1, 2, 2, 3, 4])),
    result: JSON.stringify(removeDuplicates([1, 2, 2, 3, 4])),
  });
  testResults.push({
    test: "removeDuplcates([1, 2, 1, 3, 2, 3, 4]) returns [1, 2, 3, 4]",
    passed:
      JSON.stringify(removeDuplicates([1, 2, 1, 3, 2, 3, 4])) ===
      JSON.stringify([1, 2, 3, 4]),
    result: JSON.stringify(removeDuplicates([1, 2, 1, 3, 2, 3, 4])),
  });
  testResults.push({
    test: "removeDuplcates([1, 2, 1, 3, 2, 3, 4]) returns [1, 2, 3, 4]",
    passed:
      JSON.stringify(
        removeDuplicates(["Sam", "Frodo", "Sam", "Gollum", "Gollum", "Aragon"])
      ) === JSON.stringify(["Sam", "Frodo", "Gollum", "Aragon"]),
    result: JSON.stringify(
      removeDuplicates(["Sam", "Frodo", "Sam", "Gollum", "Gollum", "Aragon"])
    ),
  });
  testResults.push({
    test: 'removeDuplcates(["Sam", "Frodo", "Sam", "Gollum", "Gollum", "Aragon"]) returns ["Sam", "Frodo", "Gollum", "Aragon"]',
    passed:
      JSON.stringify(removeDuplicates([10, 10, "test", "test", 73, "73"])) ===
      JSON.stringify([10, "test", 73, "73"]),
    result: JSON.stringify(
      removeDuplicates([10, 10, "test", "test", 73, "73"])
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Remove Duplicates From Array",
  description:
    "Create a function that removes the duplicate values from a given array.",
  instructions:
    "Create a function that takes in a single argument, an array, and returns an array with all the duplicates removed. For the purpose of this problem, you can return a new array or the original one modified, your choice.",
  difficulty: 2,
  testScriptCode: createTestScriptString(removeDuplicatesInArrayTests),
  startingCode:
    "const removeDuplicates = (arr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(removeDuplicatesInArrayTests()),
  problemExplanation:
    "For this problem, you will need to take an array and remove extra occurrences of the same value. The result will be an array of only unique values.",
  hints: [
    "There are many ways to do this problem, but using the javascript set type is probably the easiest.",
    "When using the javascript set type, you will need es6 spread syntax as well.",
  ],
  solutionCode: removeDuplicatesInArraySolution,
};

export default data;
