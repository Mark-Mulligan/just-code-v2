// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const combineTwoArraysSolution = `const combineArrs = (arr1, arr2) => {
  // create a new array from the two input arrays
  let newArr = [...arr1, ...arr2];

  // if the type of the array is strings, then sort one way
  if (typeof newArr[0] === "string") {
    return newArr.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase())
    })
    // Else sort by number
  } else if (typeof newArr[0] === "number") {
    return newArr.sort((a, b) => {
      return a - b;
    })
  }
}`;

const combineArrs = (arr1: any[], arr2: any[]) => {
  return [] as any[];
};

const combineTwoArraysTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called combineArrs.",
    passed: typeof combineArrs === "function",
    result: typeof combineArrs,
  });
  testResults.push({
    test: "Function returns an array.",
    passed: Array.isArray(combineArrs([1, 3, 5], [2, 4, 6])),
    result: JSON.stringify(combineArrs([1, 3, 5], [2, 4, 6])),
  });

  let arr1 = [1, 3, 5];
  let arr2 = [2, 4, 6];

  const printResult = () => {
    let result = combineArrs(arr1, arr2);

    if (result === arr1) return "Output array references arr1";
    else if (result === arr2) return "Output array references arr2";
    else return "New array created";
  };

  testResults.push({
    test: "The function returns a new array (not a reference to arr1, or arr2).",
    passed:
      combineArrs(arr1, arr2) !== arr1 && combineArrs(arr1, arr2) !== arr2,
    result: printResult(),
  });
  testResults.push({
    test: "combineArrs([1, 3, 5], [2, 4, 6]) \n returns [1, 2, 3, 4, 5, 6]",
    passed:
      JSON.stringify(combineArrs([1, 3, 5], [2, 4, 6])) ===
      JSON.stringify([1, 2, 3, 4, 5, 6]),
    result: JSON.stringify(combineArrs([1, 3, 5], [2, 4, 6])),
  });
  testResults.push({
    test: 'combineArrs(["dogs", "cats", "hampsters"], ["snakes", "rats", "chickens"]) \n returns ["cats", "chickens", "dogs", "hampsters", "rats", "snakes"]',
    passed:
      JSON.stringify(
        combineArrs(
          ["dogs", "cats", "hampsters"],
          ["snakes", "rats", "chickens"]
        )
      ) ===
      JSON.stringify([
        "cats",
        "chickens",
        "dogs",
        "hampsters",
        "rats",
        "snakes",
      ]),
    result: JSON.stringify(
      combineArrs(["dogs", "cats", "hampsters"], ["snakes", "rats", "chickens"])
    ),
  });
  testResults.push({
    test: "combineArrs([5, -3, -1, 8, 2], [10, 9, -2, -4, 7]) \n returns [-4, -3, -2, -1, 2, 5, 7, 8, 9, 10]",
    passed:
      JSON.stringify(combineArrs([5, -3, -1, 8, 2], [10, 9, -2, -4, 7])) ===
      JSON.stringify([-4, -3, -2, -1, 2, 5, 7, 8, 9, 10]),
    result: JSON.stringify(combineArrs([5, -3, -1, 8, 2], [10, 9, -2, -4, 7])),
  });
  testResults.push({
    test: 'combineArrs(["mIxedCasing", "mIXedCase", "MixedcaSes"], ["MIXEDCASED", "mistake", "Mistaken"]) \n returns ["mistake", "Mistaken", "mIXedCase", "MIXEDCASED", "MixedcaSes", "mIxedCasing"]',
    passed:
      JSON.stringify(
        combineArrs(
          ["mIxedCasing", "mIXedCase", "MixedcaSes"],
          ["MIXEDCASED", "mistake", "Mistaken"]
        )
      ) ===
      JSON.stringify([
        "mistake",
        "Mistaken",
        "mIXedCase",
        "MIXEDCASED",
        "MixedcaSes",
        "mIxedCasing",
      ]),
    result: JSON.stringify(
      combineArrs(
        ["mIxedCasing", "mIXedCase", "MixedcaSes"],
        ["MIXEDCASED", "mistake", "Mistaken"]
      )
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Combine Two Arrays",
  description:
    "Create a function that combines two arrays into one array that is sorted.",
  instructions:
    "Create a function that takes in two arguments, both arrays, and combines them into a new array. This array must also be sorted. The arrays will have either strings or numbers so make sure the function can sort alphabetically. Also watch out for capitalization in the string values.",
  difficulty: 2,
  testScriptCode: createTestScriptString(combineTwoArraysTests),
  startingCode:
    "const combineArrs = (arr1, arr2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(combineTwoArraysTests()),
  problemExplanation:
    "For this problem you will need to combine the values from two arrays into a new single array.  This array will also be sorted.  The arrays will either be numbers or strings only.  Make sure to watch out for capitalization as well when putting an array in alphabetical order.",
  hints: [
    "You will need to first combine the two arrays into one",
    "After create the new combination array, you can use the javascript sort method to put the array in the correct order",
    "The sort method will need two different sorting logic passed into it.  One for sorting numbers and the other for sorting strings.",
    "Make sure to account for upper and lower case letters in your string sorting logic (maybe convert all letters to a single case).",
  ],
  solutionCode: combineTwoArraysSolution,
};

export default data;
