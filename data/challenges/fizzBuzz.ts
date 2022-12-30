// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const fizzBuzzResult = [
    1,
    2,
    'fizz',
    4,
    'buzz',
    'fizz',
    7,
    8,
    'fizz',
    'buzz',
    11,
    'fizz',
    13,
    14,
    'fizzbuzz',
    16,
    17,
    'fizz',
    19,
    'buzz',
    'fizz',
    22,
    23,
    'fizz',
    'buzz',
    26,
    'fizz',
    28,
    29,
    'fizzbuzz',
    31,
    32,
    'fizz',
    34,
    'buzz',
    'fizz',
    37,
    38,
    'fizz',
    'buzz',
    41,
    'fizz',
    43,
    44,
    'fizzbuzz',
    46,
    47,
    'fizz',
    49,
    'buzz',
    'fizz',
    52,
    53,
    'fizz',
    'buzz',
    56,
    'fizz',
    58,
    59,
    'fizzbuzz',
    61,
    62,
    'fizz',
    64,
    'buzz',
    'fizz',
    67,
    68,
    'fizz',
    'buzz',
    71,
    'fizz',
    73,
    74,
    'fizzbuzz',
    76,
    77,
    'fizz',
    79,
    'buzz',
    'fizz',
    82,
    83,
    'fizz',
    'buzz',
    86,
    'fizz',
    88,
    89,
    'fizzbuzz',
    91,
    92,
    'fizz',
    94,
    'buzz',
    'fizz',
    97,
    98,
    'fizz',
    'buzz',
];

const { testCriteria, testScriptCode } = generateTestScriptString(
    'fizzBuzz',
    'array',
    [{ result: fizzBuzzResult }]
);

const fizzBuzzSolution = `const fizzBuzz = () => {
  let result = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('fizzbuzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else {
      result.push(i);
    }
  }

  return result;
};`;

const data: CodingChallengeData = {
    title: 'Fizz Buzz',
    description:
        'The classic fizzBuzz exercise used in a lot of coding interviews.',
    instructions: `Write a function called fizzBuzz that returns an array of numbers from 1 to 100. If the number is number is a multiple of 3, it should print 'fizz'. If the number is a multiple of 5, it should print 'buzz'.  If the number is a multiple of 3 and 5, it should print 'fizzbuzz'. All other numbers should just be printed as numbers (ex 1 would print 1).`,
    difficulty: 1,
    testScriptCode,

    startingCode:
        'const fizzBuzz = () => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria,
    problemExplanation:
        'This problem is a take on the famous fizzBuzz interview question. In this case, your function will return an array of number from 1 to 100, replacing those numbers divisible by 3 with "fizz", numbers divisible by 5 with "buzz", and numbers divisible by both 3 and 5 with "fizzbuzz".  All other numbers will be exist as themselves in the returned array.',
    hints: [
        'You will need to use an iterator to move from 1 to 100.',
        'You will need to push values into an array.',
        `The '%' operator can be used to see how much is left over after dividing by a number.`,
        'Remember in conditional statements, start with the most specific cases first.',
    ],
    solutionCode: fizzBuzzSolution,
};

export default data;
