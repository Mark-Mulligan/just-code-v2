// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const sortTheDatesSolution = `const sortDates = (inputArrDateStrs) => {
  return inputArrDateStrs.sort((a, b) => {
    return new Date(a) - new Date(b);
  });
};`;

const sortDates = (inputDateArr: string[]) => {
  return inputDateArr;
};

const sortTheDatesTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called sortDates.",
    passed: typeof sortDates === "function",
    result: typeof sortDates,
  });
  testResults.push({
    test: "Function returns an array.",
    passed: Array.isArray(sortDates(["12-2-2020", "12-3-2020", "5-3-2020"])),
    result: JSON.stringify(sortDates(["12-2-2020", "12-3-2020", "5-3-2020"])),
  });
  testResults.push({
    test: 'sortDates(["12-25-2018", "11-24-2018", "10-31-2018"]) returns ["10-31-2018", "11-24-2018", "12-25-2018"]',
    passed:
      JSON.stringify(sortDates(["12-25-2018", "11-24-2018", "10-31-2018"])) ===
      JSON.stringify(["10-31-2018", "11-24-2018", "12-25-2018"]),
    result: JSON.stringify(
      sortDates(["12-25-2018", "11-24-2018", "10-31-2018"])
    ),
  });
  testResults.push({
    test: 'sortDates(["4-1-2000", "4-1-2008", "4-1-1994"]) returns ["4-1-1994", "4-1-2000", "4-1-2008"]',
    passed:
      JSON.stringify(sortDates(["4-1-2000", "4-1-2008", "4-1-1994"])) ===
      JSON.stringify(["4-1-1994", "4-1-2000", "4-1-2008"]),
    result: JSON.stringify(sortDates(["4-1-2000", "4-1-2008", "4-1-1994"])),
  });
  testResults.push({
    test: 'sortDates(["5-1-1990", "5-2-1990", "10-6-1980", "11-7-2000", "7-3-2030"]) returns ["10-6-1980", "5-1-1990", "5-2-1990", "11-7-2000", "7-3-2030"]',
    passed:
      JSON.stringify(
        sortDates([
          "5-1-1990",
          "5-2-1990",
          "10-6-1980",
          "11-7-2000",
          "7-3-2030",
        ])
      ) ===
      JSON.stringify([
        "10-6-1980",
        "5-1-1990",
        "5-2-1990",
        "11-7-2000",
        "7-3-2030",
      ]),
    result: JSON.stringify(
      sortDates(["5-1-1990", "5-2-1990", "10-6-1980", "11-7-2000", "7-3-2030"])
    ),
  });
  return testResults;
};

const data: CodingChallengeData = {
  title: "Sort The Dates",
  description:
    "Create a function that puts an array of dates in order from earliest to latest.",
  instructions:
    'Create a function that takes in an array of date strings (formatted like "12-25-2018") and return an array of those same dates in order from earliest to latest.',
  difficulty: 2,
  testScriptCode: createTestScriptString(sortTheDatesTests),
  startingCode:
    "const sortDates = (inputArrDateStrings) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(sortTheDatesTests()),
  problemExplanation:
    "For this problem, you will need to take an array of date strings and sort them in order from earliest date to latest date.",
  hints: [
    "The javascript sort method would be a good way to sort the dates",
    "You will need to provide a function to the sort method in order for the dates to be sorted",
    "You will need to convert the sorted strings to javascript date objects in order to sort them.",
  ],
  solutionCode: sortTheDatesSolution,
};

export default data;
