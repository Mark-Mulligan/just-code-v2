// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const rockPaperScissorsSolution = `const rockPaperScissors = (turn) => {
  if (turn === "rock") return "paper";
  if (turn === "paper") return "scissors";
  return "rock";
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'rockPaperScissors',
  'string',
  [
    { input: ['rock'], result: 'paper' },
    { input: ['paper'], result: 'scissors' },
    { input: ['scissors'], result: 'rock' },
  ]
);

const data: CodingChallengeData = {
  title: 'Rock, Paper, Scissors',
  description:
    'Create a function that returns the winning choice in rock, paper, scissors.',
  instructions:
    'Create a function that takes in a string ("rock", "paper", or "scissors") and returns the hand that would beat it. For example, if "rock" is passed in, the function would return "paper"',
  testScriptCode,
  difficulty: 1,
  startingCode:
    'const rockPaperScissors = (turn) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'Remember there are only 3 possible hands a player can play.  You will probably need to use a conditional statement (either an if or switch) to determine the answer based on the string passed to the function',
  hints: [
    'You should probably use if statements or switch statements.',
    'Remember you can use === to see if two strings equal one another',
  ],
  solutionCode: rockPaperScissorsSolution,
};

export default data;
