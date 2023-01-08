// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const evenOrOddSolution = `const evenOrOdd = (num) => {
  return (num % 2 === 0) ? 'even' : 'odd';
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'evenOrOdd',
  'string',
  'areEqual',
  [
    { input: [11], result: 'odd' },
    { input: [30], result: 'even' },
    { input: [17], result: 'odd' },
    { input: [22], result: 'even' },
  ]
);

const data: CodingChallengeData = {
  title: 'Even or Odd?',
  description:
    'Create a function that determines whether a number is even or odd.',
  instructions:
    'Create a function that takes in a single argument, an integer greater than 0, and returns "even" if the number is even or "odd" if the number is odd.',
  testScriptCode,
  difficulty: 1,
  startingCode:
    'const evenOrOdd = (num) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'There are only two possibilities for the numbers to be even or odd. Even numbers divided by 2 always equal zero.',
  hints: [
    'The % operator gives the remainder after a dividing operation. For example, 4 % 2 = 0 and 5 % 2 = 1.',
  ],
  solutionCode: evenOrOddSolution,
};

export default data;
