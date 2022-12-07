// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const sortTheDaysSolution = `const sortDays = (dayStr) => {
  // All possible day values in correct order
  let dayValues = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

  // split the day string into an array to make it easier to work with
  let dayArr = dayStr.split(',');
  let resultArr = [];

  // Iterate over all the possible day values.  If they exsist in our given dayArr, push them to
  // resultArr. This will put the values in order.
  for (let i = 0; i < dayValues.length; i++) {
    if (dayArr.includes(dayValues[i])) {
      resultArr.push(dayValues[i])
    }
  }

  // join the new array we created to format the anwser to a single comma seperated string
  return resultArr.join(',');
}`;

const sortDays = (inputStr: string) => {
  return inputStr;
};

const sortTheDaysTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function called sortDays.",
    passed: typeof sortDays === "function",
    result: typeof sortDays,
  });
  testResults.push({
    test: "Function returns a string",
    passed: typeof sortDays("mon,wed,tues") === "string",
    result: typeof sortDays("mon,wed,tues"),
  });
  testResults.push({
    test: 'sortDays("mon,wed,tues,sat") returns "mon,tues,wed,sat" ',
    passed: sortDays("mon,wed,tues,sat") === "mon,tues,wed,sat",
    result: sortDays("mon,wed,tues,sat"),
  });
  testResults.push({
    test: 'sortDays("sun,sat,fri,thurs,wed,tues,mon") returns "mon,tues,wed,thurs,fri,sat,sun"',
    passed:
      sortDays("sun,sat,fri,thurs,wed,tues,mon") ===
      "mon,tues,wed,thurs,fri,sat,sun",
    result: sortDays("sun,sat,fri,thurs,wed,tues,mon"),
  });
  testResults.push({
    test: 'vowelCount("wed,tues,sat,fri") returns "tues,wed,fri,sat"',
    passed: sortDays("wed,tues,sat,fri") === "tues,wed,fri,sat",
    result: sortDays("wed,tues,sat,fri"),
  });
  return testResults;
};

const data: CodingChallengeData = {
  title: "Sort The Days",
  description: "Create a function that sorts the given days of the week.",
  instructions:
    "Create a function that takes in a string of days separated by commas (ex. 'mon,wed,tues').  Return a string of days sorted with Monday being the start of the week and sunday being the last. The possible values in the provided string are 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'.",
  difficulty: 2,
  testScriptCode: createTestScriptString(sortTheDaysTests),
  startingCode:
    "const sortDays = (dayStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(sortTheDaysTests()),
  problemExplanation:
    "For this problem, you are given a comma separated string of abbreviated day values. You will need to sort these values and return the new sorted string. Note that for this problem, first value will be monday (not sunday which is the default in javascript). This problem will require several steps to complete and will require you to convert and format different data types.",
  hints: [
    "You will need to find a way to give values to the day strings.",
    "The javascript split() and join() functions may be of use in this challenge.",
    "There are only 7 possible day values so use that to your advantage",
  ],
  solutionCode: sortTheDaysSolution,
};

export default data;
