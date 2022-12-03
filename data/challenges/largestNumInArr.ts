// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const largestNumInArrSolution = `const largestNum = (numArr) => {
  let largestNum = numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > largestNum) {
      largestNum = numArr[i]
    }
  }

  return largestNum;
}`;

const largestNum = (numArr: any) => {
  let largestNum = numArr[0];

  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] > largestNum) largestNum = numArr[i];
  }

  return largestNum;
};

const largestNumInArrayTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called largestNum.",
    passed: typeof largestNum === "function",
    result: typeof largestNum,
  });
  testResults.push({
    test: "Function returns a number",
    passed: typeof largestNum([1, 2, 3, 4]) === "number",
    result: typeof largestNum([1, 2, 3, 4]),
  });
  testResults.push({
    test: "largestNum([1, 8, 10, 5, 12]) returns 12",
    passed: largestNum([1, 8, 10, 5, 12]) === 12,
    result: largestNum([1, 8, 10, 5, 12]),
  });
  testResults.push({
    test: "largestNum([1, 8, 10, 5, 12]) returns 80",
    passed: largestNum([-4, 1, 80, 2, 1]) === 80,
    result: largestNum([-4, 1, 80, 2, 1]),
  });
  testResults.push({
    test: "largestNum([-5, -2, -1, -3, -20]) returns -1",
    passed: largestNum([-5, -2, -1, -3, -20]) === -1,
    result: largestNum([-5, -2, -1, -3, -20]),
  });
  return testResults;
};

const data: CodingChallengeData = {
  title: "Find Largest Number",
  description:
    "Create a function that returns a the largest number from an array of integers.",
  instructions:
    "Given a function that takes in an array of integers, return the largest number from that array.",
  difficulty: 1,
  testScriptCode: createTestScriptString(largestNumInArrayTests),
  startingCode:
    "const largestNum = (numArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(largestNumInArrayTests()),
  problemExplanation:
    "You are given an array of integers. You need to return the largest integer from that array. Numbers can be positive, negative, or both.",
  hints: [
    "You will probably need a variable to store your largest number",
    "You will need to set the variable storing the largest number to an initial value in the array (instead of 0 incase all the numbers are negative)",
    "You will need to iterate through the entire array to check all numbers.",
  ],
  solutionCode: largestNumInArrSolution,
};

export default data;
