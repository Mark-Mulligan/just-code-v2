// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const largestSumSolution = `const largestSum = (numberArr) => {
  let largestSum = 0;
  let indexes = [];

  for (let i = 0; i < numberArr.length; i++) {
    for (let j = i + 1; j < numberArr.length; j++) {
      if (numberArr[i] + numberArr[j] > largestSum) {
        largestSum = numberArr[i] + numberArr[j];
        indexes = [i, j];
      }
    }
  }

  return { largestSum, indexes };
};`;

const object_equals = (x: any, y: any) => {
  if (x === y) return true;
  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  if (x.constructor !== y.constructor) return false;

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue;
    if (!y.hasOwnProperty(p)) return false;
    if (x[p] === y[p]) continue;
    if (typeof x[p] !== "object") return false;
    if (!object_equals(x[p], y[p])) return false;
  }

  for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;

  return true;
};

const largestSumReturnTypeCheck = (largestSumResult: {
  largestSum: number;
  indexes: number[];
}) => {
  if (typeof largestSumResult !== "object") {
    return false;
  }

  if (Object.keys(largestSumResult).length !== 2) {
    return false;
  }

  if (
    !largestSumResult.hasOwnProperty("largestSum") ||
    !largestSumResult.hasOwnProperty("indexes")
  ) {
    return false;
  }

  if (
    typeof largestSumResult["largestSum"] !== "number" ||
    !Array.isArray(largestSumResult["indexes"]) ||
    largestSumResult["indexes"].length !== 2
  ) {
    return false;
  }

  if (
    typeof largestSumResult["indexes"][0] !== "number" ||
    typeof largestSumResult["indexes"][1] !== "number"
  ) {
    return false;
  }

  return true;
};

const largestSum = (numberArr: number[]) => {
  return { largestSum: 0, indexes: [0, 1] };
};

export const largestSumTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User create a function called largestSum",
    passed: typeof largestSum === "function",
    result: typeof largestSum,
  });
  testResults.push({
    test: "Function returns an object containing two keys, largestSum (number), and indexes, (number[])",
    passed: largestSumReturnTypeCheck(largestSum([1, 2, 3])),
    result: JSON.stringify(largestSum([1, 2, 3])),
  });
  testResults.push({
    test: "largestSum([1, 2, 3]) returns { largestSum: 5, indexes: [1, 2] }",
    passed: object_equals(largestSum([1, 2, 3]), {
      largestSum: 5,
      indexes: [1, 2],
    }),
    result: JSON.stringify(largestSum([1, 2, 3])),
  });
  testResults.push({
    test: "largestSum([10, 6, 2, 7]) returns { largestSum: 17, indexes: [0, 3]}",
    passed: object_equals(largestSum([10, 6, 2, 7]), {
      largestSum: 17,
      indexes: [0, 3],
    }),
    result: JSON.stringify(largestSum([10, 6, 2, 7])),
  });
  testResults.push({
    test: "largestSum([3, 27, 31, 4]) returns { largestSum: 58, indexes: [1, 2] }",
    passed: object_equals(largestSum([3, 27, 31, 4]), {
      largestSum: 58,
      indexes: [1, 2],
    }),
    result: JSON.stringify(largestSum([3, 27, 31, 4])),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Largest Sum",
  description:
    "Create a function that returns the largest sum possible in a given array.",
  instructions:
    "Create function that take in one argument, an array of integers and returns the largest sum possible using any two numbers from that array. You will also need to include the indexes of those two numbers in the given area. The result should be stored in a object with two keys, largestSum (a number) and indexes (a 2 value number[]).",
  difficulty: 2,
  testScriptCode: createTestScriptString(largestSumTests, [
    { name: "object_equals", func: object_equals },
    { name: "largestSumReturnTypeCheck", func: largestSumReturnTypeCheck },
  ]),
  startingCode:
    "const largestSum = (numberArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(largestSumTests()),
  problemExplanation:
    "Create a function that returns the largest sum possible in a given array as well as the indexes for those two numbers. This problem will require you to iterate through all the combinations in an array. It will also require that you can manipulate objects since you have to return multiple values for this function. This problem is useful for showing you how to derive multiple pieces of data from a single function.",
  hints: [
    "There are two main approaches for solving this, either looping through every combination of two numbers in the array, or sorting the array.",
    "Looping through every combination will require nested for loops. You will also need to stored the largest sum in a variable.",
    `If you sort the array, you will need to use the last two numbers for the largest sum in the sorted array. Then you will need to search for those two number's indexes in the original array`,
  ],
  solutionCode: largestSumSolution,
};

export default data;
