// Custom Types
import { CodingChallengeData } from "../types/customTypes";

export const codingChallengesData: CodingChallengeData = {
  "sum-two-ints": {
    title: "Sum Two Integers",
    description: "Create a function that returns the sum of two integers.",
    instructions:
      "Create a function that takes in two arguments (num1 & num2 that will both be integers) and returns a number that is the sum of the two integers provided.",
    testScriptCode: "",
    startingCode:
      "const sum = (num1, num2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
    testCriteria: [""],
    problemExplanation:
      "This one is pretty straight forward. Add two numbers together and make sure to return the result.",
    hints: ["Make sure you are returning the result in the function."],
    solutionCode: "",
  },
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
