// Custom Types
import { AllCodingChallengesData } from "../types/customTypes";

// Challenge Data
import sumTwoInts from "./challenges/sumTwoInts";
import evenOrOdd from "./challenges/evenOrOdd";
import rockPaperScissors from "./challenges/rockPaperScissors";
import findTheTotalLength from "./challenges/findTheTotalLength";
import divideAndRound from "./challenges/divideAndRound";
import reverseString from "./challenges/reverseString";
import largestNumInArr from "./challenges/largestNumInArr";
import addNumbersInRange from "./challenges/addNumbersInRange";
import checkObjectKeys from "./challenges/checkObjectKeys";
import longestWord from "./challenges/longestWord";
import fizzBuzz from "./challenges/fizzBuzz";

export const codingChallengesData: AllCodingChallengesData = {
  "sum-two-ints": sumTwoInts,
  "even-or-odd": evenOrOdd,
  "rock-paper-scissors": rockPaperScissors,
  "find-the-total-length": findTheTotalLength,
  "divide-and-round": divideAndRound,
  "reverse-string": reverseString,
  "largest-num-in-array": largestNumInArr,
  "add-numbers-in-range": addNumbersInRange,
  "check-object-keys": checkObjectKeys,
  "longest-word": longestWord,
  "fizz-buzz": fizzBuzz,
};
