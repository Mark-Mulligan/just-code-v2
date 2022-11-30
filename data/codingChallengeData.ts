// Custom Types
import { AllCodingChallengesData } from "../types/customTypes";

// Challenge Data
import sumTwoInts from "./challenges/sumTwoInts";

export const codingChallengesData: AllCodingChallengesData = {
  "sum-two-ints": sumTwoInts,
  "even-or-odd": {
    title: "Even or Odd?",
    description:
      "Create a function that determines whether a number is even or odd.",
    instructions:
      'Create a function that takes in a single argument, an integer greater than 0, and returns "even" if the number is even or "odd" if the number is odd.',
    testScriptCode: "",
    startingCode:
      "const evenOrOdd = (num) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
    testCriteria: [""],
    problemExplanation:
      "There are only two possibilities for the numbers to be even or odd. Even numbers divided by 2 always equal zero.",
    hints: [
      "The % operator gives the remainder after a dividing operation. For example, 4 % 2 = 0 and 5 % 2 = 1.",
    ],
    solutionCode: "",
  },
};
