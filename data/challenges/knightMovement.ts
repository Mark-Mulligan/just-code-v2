// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const knightMovementSolution = `const knightMoves = (position) => {
  const columnsToNums = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8 };
  const numsToColumns = { 1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H' };
  const columnNum = columnsToNums[position.split('')[0]];
  const rowNum = Number(position.split('')[1]);
  const moves = [];

  if (columnNum + 2 < 9) {
    if (rowNum + 1 < 9) moves.push(\`\${numsToColumns[columnNum + 2]}\${rowNum + 1}\`);
    if (rowNum - 1 > 0) moves.push(\`\${numsToColumns[columnNum + 2]}\${rowNum - 1}\`);
  }

  if (columnNum - 2 > 0) {
    if (rowNum + 1 < 9) moves.push(\`\${numsToColumns[columnNum - 2]}\${rowNum + 1}\`);
    if (rowNum - 1 > 0) moves.push(\`\${numsToColumns[columnNum - 2]}\${rowNum - 1}\`);
  }

  if (columnNum + 1 < 9) {
    if (rowNum + 2 < 9) moves.push(\`\${numsToColumns[columnNum + 1]}\${rowNum + 2}\`);
    if (rowNum - 2 > 0) moves.push(\`\${numsToColumns[columnNum + 1]}\${rowNum - 2}\`);
  }

  if (columnNum - 1 > 0) {
    if (rowNum + 2 < 9) moves.push(\`\${numsToColumns[columnNum - 1]}\${rowNum + 2}\`);
    if (rowNum - 2 > 0) moves.push(\`\${numsToColumns[columnNum - 1]}\${rowNum - 2}\`);
  }

  return moves;
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'knightMoves',
  'array',
  'arraysHaveSameValues',
  [
    { input: ['C3'], result: ['A4', 'A2', 'E4', 'E2', 'B5', 'B1', 'D5', 'D1'] },
    { input: ['E5'], result: ['C6', 'C4', 'G6', 'G4', 'D7', 'D3', 'F7', 'F3'] },
    { input: ['G1'], result: ['H3', 'F3', 'E2'] },
    { input: ['B3'], result: ['A5', 'A1', 'C5', 'C1', 'D4', 'D2'] },
    { input: ['F7'], result: ['D8', 'D6', 'H8', 'H6', 'E5', 'G5'] },
    { input: ['H4'], result: ['G6', 'G2', 'F5', 'F3'] },
    { input: ['A5'], result: ['C6', 'C4', 'B7', 'B3'] },
    { input: ['B8'], result: ['D7', 'A6', 'C6'] },
  ]
);

const data: CodingChallengeData = {
  title: 'Knight Movement',
  description:
    'Create a function that determines where a knight can move on a chess board.',
  instructions: `A knight is on of the pieces in the game of chess. Knights must move 3 spaces in a L shape path on the board.  This gives an open knight 8 possible moves (up 2 spaces and right or left 1, down 2spaces and right or left 1, down 2 spaces right 1, up 1 and right or left 2 spaces, down 1 and right or left 2 spaces. A chessboard is 8 squares by 8 squares with the rows represented as numbers 1-8 going top down, and the columns represented as letters A-H going from left to right. Columns are listed first so a position on the board would be listed as B2. Create a function called knightMoves that takes in a starting spot for a knight and returns all possible moves as an array of strings (order does not matter). For this problem, pretend there are not other pieces in the way of the knight's movement. Also, don't forget the knight cannot move off the board.`,
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const knightMoves = (position) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'This problem will combine manipulating strings, arrays and numbers. You will probably need some kind of conditional statements in order to handle all the different scenarios presented in this challenge.',
  hints: [
    'You might consider assigning the row letters to number values to make it easier to move up and down rows.',
    'You will need to account for times the knight has less that 8 moves since some of those moves will be off the board.',
    'Make sure to account for all 8 moves the knight can normally make.',
  ],
  solutionCode: knightMovementSolution,
};

export default data;
