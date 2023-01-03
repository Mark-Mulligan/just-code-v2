// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const primeNumberCheckSolution = `const isPrime = (num) => {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  } 
  
  return num >= 2; 
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'isPrime',
  'boolean',
  [
    { input: [29], result: true },
    { input: [32], result: false },
    { input: [97], result: true },
    { input: [100], result: false },
    { input: [5851], result: true },
    { input: [5853], result: false },
  ]
);

const data: CodingChallengeData = {
  title: 'Prime Number',
  description:
    'Create a function that determines wether or not a given number is a prime number.',
  instructions:
    'Create a function called isPrime that takes in an integer and returns true if that integer is prime or false if it is not prime.',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const isPrime = (num) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'A prime number is any number that is only divisible by itself and not any other number.  For example 17 is a prime number, 16 is not.',
  hints: [
    'You will need to check to see if the num is divisible by any number smaller than it excluding 1.',
    'You can use the % operator to see if there is a remainder in a division problem. If a number is divisible by another number, the % operator will return 0.',
  ],
  solutionCode: primeNumberCheckSolution,
};

export default data;
