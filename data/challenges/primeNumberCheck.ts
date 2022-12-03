// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const primeNumberCheckSolution = `const isPrime = (num) => {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  } 
  
  return num >= 2; 
}`;

const isPrime = (num: number) => {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return num >= 2;
};

const primeNumberTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function isPrime.",
    passed: typeof isPrime === "function",
    result: typeof isPrime,
  });
  testResults.push({
    test: "Function returns a boolean.",
    passed: typeof isPrime(11) === "boolean",
    result: typeof isPrime(11),
  });
  testResults.push({
    test: "isPrime(29) returns true",
    passed: isPrime(29) === true,
    result: JSON.stringify(isPrime(29)),
  });
  testResults.push({
    test: "isPrime(32) returns false",
    passed: isPrime(32) === false,
    result: JSON.stringify(isPrime(32)),
  });
  testResults.push({
    test: "isPrime(97) returns true",
    passed: isPrime(97) === true,
    result: JSON.stringify(isPrime(97)),
  });
  testResults.push({
    test: "isPrime(100) returns false",
    passed: isPrime(100) === false,
    result: JSON.stringify(isPrime(100)),
  });
  testResults.push({
    test: "isPrime(5851) returns true",
    passed: isPrime(5851) === true,
    result: JSON.stringify(isPrime(5851)),
  });
  testResults.push({
    test: "isPrime(5853) returns false",
    passed: isPrime(5853) === false,
    result: JSON.stringify(isPrime(5853)),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Prime Number",
  description:
    "Create a function that determines wether or not a given number is a prime number.",
  instructions:
    "Create a function called isPrime that takes in an integer and returns true if that integer is prime or false if it is not prime.",
  difficulty: 2,
  testScriptCode: createTestScriptString(primeNumberTests),
  startingCode:
    "const isPrime = (num) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(primeNumberTests()),
  problemExplanation:
    "A prime number is any number that is only divisible by itself and not any other number.  For example 17 is a prime number, 16 is not.",
  hints: [
    "You will need to check to see if the num is divisible by any number smaller than it excluding 1.",
    "You can use the % operator to see if there is a remainder in a division problem. If a number is divisible by another number, the % operator will return 0.",
  ],
  solutionCode: primeNumberCheckSolution,
};

export default data;
