// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const luckyNumberThreeSolution = `const hasThreeRepeatingValues = (arr) => {
  const uniqueValCount = {};

  for (let i = 0; i < arr.length; i++) {
    if (uniqueValCount.hasOwnProperty(arr[i])) {
      uniqueValCount[arr[i]] = uniqueValCount[arr[i]] + 1;
    } else {
      uniqueValCount[arr[i]] = 1;
    }

    if (uniqueValCount[arr[i]] === 3) {
      return true;
    }
  }

  return false;
};`;

const hasThreeRepeatingValues = (arr: any[]) => {
  return true;
};

const luckyNumberThreeTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called hasThreeRepeatingValues.",
    passed: typeof hasThreeRepeatingValues === "function",
    result: typeof hasThreeRepeatingValues,
  });
  testResults.push({
    test: "Function returns a boolean",
    passed:
      typeof hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]) ===
      "boolean",
    result: typeof hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]),
  });
  testResults.push({
    test: "hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]) returns true",
    passed: hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]) === true,
    result: JSON.stringify(
      hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1])
    ),
  });
  testResults.push({
    test: "hasThreeRepeatingValues([10, 12, 12, 10, 90, 9, 87, 90]) returns false",
    passed: hasThreeRepeatingValues([10, 12, 12, 10, 90, 9, 87, 90]) === false,
    result: JSON.stringify(
      hasThreeRepeatingValues([10, 12, 12, 10, 90, 9, 87, 90])
    ),
  });
  testResults.push({
    test: 'hasThreeRepeatingValues(["repeat", "repeats", "repeat", "repeating", "repeats", "repeating", "repeat"]) returns true',
    passed:
      hasThreeRepeatingValues([
        "repeat",
        "repeats",
        "repeat",
        "repeating",
        "repeats",
        "repeating",
        "repeat",
      ]) === true,
    result: JSON.stringify(
      hasThreeRepeatingValues([
        "repeat",
        "repeats",
        "repeat",
        "repeating",
        "repeats",
        "repeating",
        "repeat",
      ])
    ),
  });
  testResults.push({
    test: 'hasThreeRepeatingValues(["repeat", "repeats", "repeat", "repeating", "repeats", "repeated"]) returns false',
    passed:
      hasThreeRepeatingValues([
        "repeat",
        "repeats",
        "repeat",
        "repeating",
        "repeats",
        "repeated",
      ]) === false,
    result: JSON.stringify(
      hasThreeRepeatingValues([
        "repeat",
        "repeats",
        "repeat",
        "repeating",
        "repeats",
        "repeated",
      ])
    ),
  });
  testResults.push({
    test: "hasThreeRepeatingValues([true, false, true, false, true]) returns true",
    passed: hasThreeRepeatingValues([true, false, true, false, true]) === true,
    result: JSON.stringify(
      hasThreeRepeatingValues([true, false, true, false, true])
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Lucky Number 3",
  description:
    "Create a function that determines whether an array has 3 or more repeating values.",
  instructions:
    "Write a function called hasThreeRepeatingValues that takes in an array of primitives. The function should return a boolean of whether or not there are three repeating values in the given array.",
  difficulty: 1,
  testScriptCode: createTestScriptString(luckyNumberThreeTests),
  startingCode:
    "const hasThreeRepeatingValues = () => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(luckyNumberThreeTests()),
  problemExplanation:
    "For this problem, you will need a way to count how many times each value occurs in an array. The best way to do this would be to create an object where each unique value in the array is a key and the value of those keys is the number of times that unique value occurs in the given array.",
  hints: [
    "You need a way to count how many time each value occurs in the array.",
    "You then need to check to see if the number of repeating values is 3 or more.",
  ],
  solutionCode: luckyNumberThreeSolution,
};

export default data;
