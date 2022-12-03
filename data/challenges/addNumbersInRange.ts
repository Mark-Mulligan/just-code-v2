// Testing Utils
import { createTestScriptString } from "../utils";
import { extractTestCriteria } from "../utils";

// Custom Types
import { TestResult } from "../../types/customTypes";
import { CodingChallengeData } from "../../types/customTypes";

const addNumbersInRangeSolution = `const addNumbersInRange = (startingNum, endingNum) => {
  let total = 0;
  for (let i = startingNum; i <= endingNum; i++) {
    total += i;
  }

  return total;
};`;

const addNumbersInRange = (startingNum: number, endingNum: number) => {
  let total = 0;
  for (let i = startingNum; i <= endingNum; i++) {
    total += i;
  }

  return total;
};

export const addNumbersInRangeTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called addNumbersInRange.",
    passed: typeof addNumbersInRange === "function",
    result: typeof addNumbersInRange,
  });
  testResults.push({
    test: "Function returns a number",
    passed: typeof addNumbersInRange(1, 5) === "number",
    result: typeof addNumbersInRange(1, 5),
  });
  testResults.push({
    test: "addNumbersInRange(1, 5) returns 15",
    passed: addNumbersInRange(1, 5) === 15,
    result: addNumbersInRange(1, 5),
  });
  testResults.push({
    test: "addNumbersInRange(5, 10) returns 45",
    passed: addNumbersInRange(5, 10) === 45,
    result: addNumbersInRange(5, 10),
  });
  testResults.push({
    test: "addNumbersInRange(1, 100) returns 5050",
    passed: addNumbersInRange(1, 100) === 5050,
    result: addNumbersInRange(1, 100),
  });
  testResults.push({
    test: "addNumbersInRange(85, 9783) returns 47854866",
    passed: addNumbersInRange(85, 9783) === 47854866,
    result: addNumbersInRange(85, 9783),
  });
  return testResults;
};

const data: CodingChallengeData = {
  title: "Add Numbers in Range",
  description:
    "Create a function that adds all the numbers together in a given range.",
  instructions:
    "Create a function called addNumbersInRange that takes in two integers, startingNum and endingNum. The function should return the sum of all numbers in that range including the starting and ending number.",
  difficulty: 1,
  testScriptCode: createTestScriptString(addNumbersInRangeTests),
  startingCode:
    "const addNumbersInRange = (startingNum, endingNum) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(addNumbersInRangeTests()),
  problemExplanation:
    "Given a range, calculate the sum of all numbers in that range. The simplest way to go about this is using a for loop and a variable to keep track of the total.",
  hints: [
    "You can use a for loop to iterate through all the numbers in the range.",
    "Consider using a variable to keep track of the total,",
    "The for loop should start at the startingNum and end at the endingNum (not before)",
  ],
  solutionCode: addNumbersInRangeSolution,
};

export default data;
