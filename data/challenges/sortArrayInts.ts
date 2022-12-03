// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const sortArrayIntsSolution = `const sortArr = (numArr) => {
  return numArr.sort((a, b) => a - b);
}`;

const sortArr = (inputArr: number[]) => {
  return inputArr;
};

const sortArrayIntsTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called sortArr.",
    passed: typeof sortArr === "function",
    result: typeof sortArr,
  });
  testResults.push({
    test: "Function returns an array",
    passed: Array.isArray(sortArr([1, 4, 3, 2])),
    result: JSON.stringify(sortArr([1, 4, 3, 2])),
  });
  testResults.push({
    test: "sortArr([1, 2, 6, 4, 2]) returns [1, 2, 2, 4, 6] ",
    passed:
      JSON.stringify(sortArr([1, 2, 6, 4, 2])) ===
      JSON.stringify([1, 2, 2, 4, 6]),
    result: JSON.stringify(sortArr([1, 2, 6, 4, 2])),
  });
  testResults.push({
    test: "sortArr([10, -3, 2, -1, 7, 9]) returns [-3, -1, 2, 7, 9, 10]",
    passed:
      JSON.stringify(sortArr([10, -3, 2, -1, 7, 9])) ===
      JSON.stringify([-3, -1, 2, 7, 9, 10]),
    result: JSON.stringify(sortArr([10, -3, 2, -1, 7, 9])),
  });
  testResults.push({
    test: "sortArr([-1, 1000, 10, 22, -22, 3]) returns [-22, -1, 3, 10, 22, 1000]",
    passed:
      JSON.stringify(sortArr([-1, 1000, 10, 22, -22, 3])) ===
      JSON.stringify([-22, -1, 3, 10, 22, 1000]),
    result: JSON.stringify(sortArr([-1, 1000, 10, 22, -22, 3])),
  });
  return testResults;
};

const data: CodingChallengeData = {
  title: "Sort Array Of Integers",
  description: "Create a function that returns a sorted array of integers",
  instructions:
    "Create a function that takes in one argument (an array of integers) and a new array with those same integers sorted from least to greatest.",
  difficulty: 2,
  testScriptCode: createTestScriptString(sortArrayIntsTests),
  startingCode:
    "const sortArr = (numArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(sortArrayIntsTests()),
  problemExplanation:
    "For this problem, you will need to go through an array and order the numbers in that array from least to greatest.",
  hints: [
    "You will need way to iterate over the array or you can use the sort method.",
    "If using the sort method, make sure to pass the correct arguments/function.",
  ],
  solutionCode: sortArrayIntsSolution,
};

export default data;
