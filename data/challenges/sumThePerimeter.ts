// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const sumThePerimeterSolution = `const sum = (num1, num2) => {
  let sum = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (row === 0 || row === grid.length - 1 || column === 0 || column === grid[row].length - 1) {
        sum += grid[row][column];
      }
    }
  }
  
  return sum;
};`;

const tests = [
  {
    input: [
      [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
      ],
    ],
    result: 30,
  },
  {
    input: [
      [
        [20, 1, -1],
        [5, 2, 4],
        [-4, 2, 2],
      ],
    ],
    result: 29,
  },
  {
    input: [
      [
        [9, 12, 2],
        [1, 100, 1],
        [2, 7, 8],
      ],
    ],
    result: 42,
  },
  {
    input: [
      [
        [10, 12, 14, 16],
        [18, 20, 22, 24],
        [26, 28, 30, 32],
      ],
    ],
    result: 210,
  },
];

const { testScriptCode, testCriteria } = generateTestScriptString(
  'perimeterSum',
  'number',
  'areEqual',
  tests
);

const data: CodingChallengeData = {
  title: 'Sum The Perimeter',
  description:
    'Create a function that returns the sum of the perimeter of a 2 dimensional array.',
  instructions:
    'Create a function called perimeterSum that takes in one argument, a two dimensional array of integers. The function should return the sum of all the outside integers. For example, given the input [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]], the result should be 30. Picture the rows all stacked on top of each other. Only the values on the border of the grid should be included in the sum.',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const perimeterSum = (grid) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'This challenge is focusing on traversing multi dimensional arrays. The best way to visualize what is going on in this challenge would be to write the arrays out so that each row is stacked on top of the other, that way you can see what the perimeter would loop like and craft a way to count only those values.',
  hints: [
    'You will need a way to iterate over a two dimensional array.',
    'You will need to keep of your position, such as are you on row 0 or column 0 etc.',
    'You will also need a way to keep track of the total.',
  ],

  solutionCode: sumThePerimeterSolution,
};

export default data;
