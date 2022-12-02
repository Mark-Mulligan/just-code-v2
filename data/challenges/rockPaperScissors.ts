// Testing Utils
import { createTestScriptString } from "../utils";
import { extractTestCriteria } from "../utils";

// Custom Types
import { TestResult } from "../../types/customTypes";
import { CodingChallengeData } from "../../types/customTypes";

const rockPaperScissorsSolution = `const rockPaperScissors = (turn) => {
  if (turn === "rock") return "paper";
  if (turn === "paper") return "scissors";
  return "rock";
}`;

const rockPaperScissors = (hand: string) => {
  if (hand === "rock") return "paper";
  if (hand === "paper") return "scissors";
  return "rock";
};

const rockPaperScissorsTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function rockPaperScissors.",
    passed: typeof rockPaperScissors === "function",
    result: typeof rockPaperScissors,
  });
  testResults.push({
    test: "Function returns a string.",
    passed: typeof rockPaperScissors("rock") === "string",
    result: typeof rockPaperScissors("rock"),
  });
  testResults.push({
    test: 'rockPaperScissors("rock") returns "paper"',
    passed: rockPaperScissors("rock") === "paper",
    result: rockPaperScissors("rock"),
  });
  testResults.push({
    test: 'rockPaperScissors("paper") returns "scissors"',
    passed: rockPaperScissors("paper") === "scissors",
    result: rockPaperScissors("paper"),
  });
  testResults.push({
    test: 'rockPaperScissors("scissors") returns "rock"',
    passed: rockPaperScissors("scissors") === "rock",
    result: rockPaperScissors("scissors"),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Rock, Paper, Scissors",
  description:
    "Create a function that returns the winning choice in rock, paper, scissors.",
  instructions:
    'Create a function that takes in a string ("rock", "paper", or "scissors") and returns the hand that would beat it. For example, if "rock" is passed in, the function would return "paper"',
  testScriptCode: createTestScriptString(rockPaperScissorsTests),
  difficulty: 1,
  startingCode:
    "const rockPaperScissors = (turn) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(rockPaperScissorsTests()),
  problemExplanation:
    "Remember there are only 3 possible hands a player can play.  You will probably need to use a conditional statement (either an if or switch) to determine the answer based on the string passed to the function",
  hints: [
    "You should probably use if statements or switch statements.",
    "Remember you can use === to see if two strings equal one another",
  ],
  solutionCode: rockPaperScissorsSolution,
};

export default data;
