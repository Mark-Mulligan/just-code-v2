// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const calculateTheTipSolution = `const tipCalc = (mealPrice, tipPercent) => {
  let mealPriceAsNum = Number(mealPrice.slice(1));
  let percentTipAsDecimal = Number(tipPercent.slice(0, -1)) / 100;
  let tipCostAsNum = Math.round((mealPriceAsNum * percentTipAsDecimal) * 100) / 100;

  return \`$\${tipCostAsNum.toFixed(2)}\`;
}`;

const tipCalc = (bill: string, pctTip: string) => {
  return "";
};

const calculateTheTipTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function tipCalc.",
    passed: typeof tipCalc === "function",
    result: typeof tipCalc,
  });
  testResults.push({
    test: "Function returns a string.",
    passed: typeof tipCalc("$25.97", "20%") === "string",
    result: typeof tipCalc("$25.97", "20%"),
  });
  testResults.push({
    test: 'tipCalc("$25.97", "20%") returns $5.19',
    passed: tipCalc("$25.97", "20%") === "$5.19",
    result: tipCalc("$25.97", "20%"),
  });
  testResults.push({
    test: 'tipCalc("$43.28", "21%") returns $9.09',
    passed: tipCalc("$43.28", "21%") === "$9.09",
    result: tipCalc("$43.28", "21%"),
  });
  testResults.push({
    test: 'tipCalc("$12.63", "18%") returns $2.27',
    passed: tipCalc("$12.63", "18%") === "$2.27",
    result: tipCalc("$12.63", "18%"),
  });
  testResults.push({
    test: 'tipCalc("101.73", "25%") returns $25.43',
    passed: tipCalc("$101.73", "25%") === "$25.43",
    result: tipCalc("$101.73", "25%"),
  });
  testResults.push({
    test: 'tipCalc("$10.91", "5%") returns $0.55',
    passed: tipCalc("$10.91", "5%") === "$0.55",
    result: tipCalc("$10.91", "5%"),
  });
  testResults.push({
    test: 'tipCalc("$32.12, "19%") returns $6.10',
    passed: tipCalc("$32.12", "19%") === "$6.10",
    result: tipCalc("$32.12", "19%"),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Tip Calculator",
  description:
    "Create function that determines how much tip should be left on a meal dining out.",
  instructions:
    'Create a function that takes in two arguments, the meal price (a string, ex. "$24.94") and the tip percent (a string, ex. "20%"), and returns the amount the tip should be. This amount should be return as a string in dollar format (ex. "$5.23", $10.00"). Include two digits for the decimal place even if they are 0.',
  difficulty: 2,
  testScriptCode: createTestScriptString(calculateTheTipTests),
  startingCode:
    "const tipCalc = (mealPrice, tipPercent) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(calculateTheTipTests()),
  problemExplanation:
    "This problem will require you to convert strings to numbers and back to a string. It also deals with some import aspects in programming such as dealing with percents and money values.",
  hints: [
    "You will need to take the meal price and convert it to a number",
    "You will need to convert the tip percent to a floating point number (decimal)",
    "You will need to round the result to the nearest hundredth",
    "The result needs to be converted to money format (starts with a $ and always has two decimal numbers even if they are 0)",
  ],
  solutionCode: calculateTheTipSolution,
};
export default data;
