// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const ticTacToeSolution = `const ticTacToe = (gameboard) => {
  let result = 'tie';

  for (let i = 0; i < gameboard.length; i++) {
    // There are 4 ways to win for each player, these variables keep track of these counts
    let xCounts = { horizontal: 0, vertical: 0, topBottomDiag: 0, bottomTopDiag: 0 };
    let oCounts = { horizontal: 0, vertical: 0, topBottomDiag: 0, bottomTopDiag: 0 };

    for (let j = 0; j < gameboard[i].length; j++) {
      // check horizontal rows
      if (gameboard[i][j] === 'X') xCounts.horizontal = xCounts.horizontal + 1;
      if (gameboard[i][j] === 'O') oCounts.horizontal = oCounts.horizontal + 1;

      // check vertical columns
      if (gameboard[j][i] === 'X') xCounts.vertical = xCounts.vertical + 1;
      if (gameboard[j][i] === 'O') oCounts.vertical = oCounts.vertical + 1;

      // check topBottom Diagonal

      if (gameboard[j][j] === 'X') xCounts.topBottomDiag = xCounts.topBottomDiag + 1;
      if (gameboard[j][j] === 'O') oCounts.topBottomDiag = oCounts.topBottomDiag + 1;

      // check bottomTop Diagonal
      if (gameboard[2 - j][j] === 'X') xCounts.bottomTopDiag = xCounts.bottomTopDiag + 1;
      if (gameboard[2 - j][j] === 'O') oCounts.bottomTopDiag = oCounts.bottomTopDiag + 1;
    }

    if (
      xCounts.horizontal === 3 ||
      xCounts.vertical === 3 ||
      xCounts.topBottomDiag === 3 ||
      xCounts.bottomTopDiag === 3
    ) {
      result = 'X wins';
      break;
    } else if (
      oCounts.horizontal === 3 ||
      oCounts.vertical === 3 ||
      oCounts.topBottomDiag === 3 ||
      oCounts.bottomTopDiag === 3
    ) {
      result = 'O wins';
      break;
    }
  }

  return result;
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'ticTacToe',
  'string',
  'areEqual',
  [
    {
      input: [
        [
          ['X', 'X', 'X'],
          ['O', 'O', 'X'],
          ['X', 'O', 'O'],
        ],
      ],
      result: 'X wins',
    },
    {
      input: [
        [
          ['X', 'O', 'X'],
          ['O', 'O', 'X'],
          ['', '', 'X'],
        ],
      ],
      result: 'X wins',
    },
    {
      input: [
        [
          ['X', 'X', 'O'],
          ['X', 'O', ''],
          ['O', '', ''],
        ],
      ],
      result: 'O wins',
    },
    {
      input: [
        [
          ['O', 'X', 'X'],
          ['', 'O', ''],
          ['X', '', 'O'],
        ],
      ],
      result: 'O wins',
    },
    {
      input: [
        [
          ['X', '', 'O'],
          ['X', 'O', ''],
          ['X', 'O', 'X'],
        ],
      ],
      result: 'X wins',
    },
    {
      input: [
        [
          ['X', 'O', 'O'],
          ['O', 'X', 'X'],
          ['X', 'X', 'O'],
        ],
      ],
      result: 'tie',
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Tic-Tac-Toe',
  description:
    'Create a function that determines the winner (if there is one) in a game of tic-tac-toe.',
  instructions:
    'Create a function that takes in an array which contains three arrays (each array within the array represents one row of the tic-tac-toe board).  Using these arrays determine the winner or if the game was a tie. If X wins, return "X wins".  If O wins return "O wins".  If the game was a tie, return "tie". Note, values in the arrays can be "X", "O" or ""',
  difficulty: 3,
  testScriptCode,
  startingCode:
    'const ticTacToe = (gameboard) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'Given an array of arrays that represent a tic tac toe game board, write a function that determines the winner or if there is a tie.',
  hints: [
    'Tic tac toe can be won in 3 different ways, 3 in row, 3 in a column, or 3 diagonally.',
    'You will need to iterate though the arrays in different orders to look for either X to win or O to win',
    'If you use nested for loops, you can change the index values (e.g. gameBoard[firstIndexValue][secondIndexValue]) to iterate over the game board in different ways',
  ],
  solutionCode: ticTacToeSolution,
};

export default data;
