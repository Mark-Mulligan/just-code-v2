// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const thanksgivingDateSolution = `const findThanksgivingDate = (year) => {
  let numberOfThursdays = 0;
  let thanksgivingDate;

  for (let day = 1; day < 31; day++) {
    let date = new Date(\`11-\${day}-\${year}\`);

    if (date.getDay() === 4) {
      numberOfThursdays++;
    }

    if (numberOfThursdays === 4) {
      thanksgivingDate = date;
      break;
    }
  }

  return thanksgivingDate;
};`;

const findThanksgivingDate = (year: number) => {
  let numberOfThursdays = 0;
  let thanksgivingDate;

  for (let day = 1; day < 31; day++) {
    let date = new Date(`11-${day}-${year}`);

    if (date.getDay() === 4) {
      numberOfThursdays++;
    }

    if (numberOfThursdays === 4) {
      thanksgivingDate = date;
      break;
    }
  }

  return thanksgivingDate;
};

const thanksgivingDateTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called findThanksgivingDate.",
    passed: typeof findThanksgivingDate === "function",
    result: typeof findThanksgivingDate,
  });
  testResults.push({
    test: "Function returns a date object",
    passed:
      Object.prototype.toString.call(findThanksgivingDate(2022)) ===
      "[object Date]",
    result: JSON.stringify(findThanksgivingDate(2022)),
  });
  testResults.push({
    test: "findThanksgivingDate(2022) returns \n2022-11-24T06:00:00.000Z",
    passed:
      findThanksgivingDate(2022)?.toDateString() ===
      new Date("11-24-2022").toDateString(),
    result: JSON.stringify(findThanksgivingDate(2022)),
  });
  testResults.push({
    test: "findThanksgivingDate(1980) returns \n 1980-11-27T06:00:00.000Z",
    passed:
      findThanksgivingDate(1980)?.toDateString() ===
      new Date("11-27-1980").toDateString(),
    result: JSON.stringify(findThanksgivingDate(1980)),
  });
  testResults.push({
    test: "findThanksgivingDate(1995) returns \n 1995-11-23T06:00:00.000Z",
    passed:
      findThanksgivingDate(1995)?.toDateString() ===
      new Date("11-23-1995").toDateString(),
    result: JSON.stringify(findThanksgivingDate(1995)),
  });
  testResults.push({
    test: "findThanksgivingDate(2030) returns \n2030-11-28T06:00:00.000Z",
    passed:
      findThanksgivingDate(2030)?.toDateString() ===
      new Date("11-28-2030").toDateString(),
    result: JSON.stringify(findThanksgivingDate(2030)),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Thanksgiving Date",
  description:
    "Create a function that returns the date that Thanksgiving will occur in a given year.",
  instructions:
    "Create a function called findThanksgivingDate.  This function will take in a number (a target year), and return a date object representing the date Thanksgiving will occur that year. Thanksgiving always occurs on the fourth Thursday in November each year.",
  difficulty: 2,
  testScriptCode: createTestScriptString(thanksgivingDateTests),
  startingCode:
    "const findThanksgivingDate = (year) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(thanksgivingDateTests()),
  problemExplanation: `To solve this problem, you will need to create a date object given the year. You will also need to loop through the month of November to find the fourth Thursday in that month. Then you will need to return the corresponding date object.`,
  hints: [
    `Create a date object using the year and November 1st`,
    `Iterate through the month of november, create a new date during each iteration.`,
    `You can check what day each date is by using date.getDay()`,
    `You will need to keep track of all the thursday since Thanksgiving occurs on the 4th Thursday in November.`,
    `Make sure to return the date object.`,
  ],
  solutionCode: thanksgivingDateSolution,
};

export default data;
