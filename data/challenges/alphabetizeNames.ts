// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const alphabetizeNamesSolution = `const alphabetizeNames = (nameList, sortBy) => {
  let opposite = sortBy === 'last' ? 'first' : 'last';

  return nameList.sort((a, b) => {
    if (a[sortBy].localeCompare(b[sortBy]) === 0) {
      return a[opposite].localeCompare(b[opposite]);
    }

    return a[sortBy].localeCompare(b[sortBy]);
  });
};`;

interface Name {
  first: string;
  last: string;
}

const alphabetizeNames = (nameList: Name[], sortBy: "first" | "last") => {
  let opposite: "first" | "last" = sortBy === "last" ? "first" : "last";

  return nameList.sort((a, b) => {
    if (a[sortBy].localeCompare(b[sortBy]) === 0) {
      return a[opposite].localeCompare(b[opposite]);
    }

    return a[sortBy].localeCompare(b[sortBy]);
  });
};

const checkFunctionReturnsAListOfNames = (functionResult: any) => {
  if (!Array.isArray(functionResult)) return false;

  let result = true;

  for (let i = 0; i < functionResult.length; i++) {
    if (
      !functionResult[i].hasOwnProperty("first") ||
      !functionResult[i].hasOwnProperty("last")
    ) {
      result = false;
      break;
    }
    if (
      typeof functionResult[i].first !== "string" ||
      typeof functionResult[i].last !== "string"
    ) {
      result = false;
      break;
    }
  }

  return result;
};

const object_equals = (x: any, y: any) => {
  if (x === y) return true;
  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  if (x.constructor !== y.constructor) return false;

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue;
    if (!y.hasOwnProperty(p)) return false;
    if (x[p] === y[p]) continue;
    if (typeof x[p] !== "object") return false;
    if (!object_equals(x[p], y[p])) return false;
  }

  for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;

  return true;
};

const alphabetizeNamesTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function alphabetizeNames.",
    passed: typeof alphabetizeNames === "function",
    result: typeof alphabetizeNames,
  });
  testResults.push({
    test: "Function an array of name objects",
    passed: checkFunctionReturnsAListOfNames(
      alphabetizeNames(
        [
          { first: "Harry", last: "Potter" },
          { first: "Ron", last: "Weasly" },
          { first: "Draco", last: "Malfoy" },
        ],
        "last"
      )
    ),

    result: JSON.stringify(
      alphabetizeNames(
        [
          { first: "Harry", last: "Potter" },
          { first: "Ron", last: "Weasly" },
          { first: "Draco", last: "Malfoy" },
        ],
        "last"
      )
    ),
  });
  testResults.push({
    test: `alphabetizeNames(
      [
        { first: 'Harry', last: 'Potter' },
        { first: 'Ron', last: 'Weasly' },
        { first: 'Draco', last: 'Malfoy' },
      ],
      'last',
    ), \n returns [
      { first: 'Draco', last: 'Malfoy'}, 
      { first: 'Harry', last: 'Potter' }, 
      { first: 'Ron', last: 'Weasly' }
    ]`,
    passed:
      JSON.stringify(
        alphabetizeNames(
          [
            { first: "Harry", last: "Potter" },
            { first: "Ron", last: "Weasly" },
            { first: "Draco", last: "Malfoy" },
          ],
          "last"
        )
      ) ===
      JSON.stringify([
        { first: "Draco", last: "Malfoy" },
        { first: "Harry", last: "Potter" },
        { first: "Ron", last: "Weasly" },
      ]),
    result: JSON.stringify(
      alphabetizeNames(
        [
          { first: "Harry", last: "Potter" },
          { first: "Ron", last: "Weasly" },
          { first: "Draco", last: "Malfoy" },
        ],
        "last"
      )
    ),
  });
  testResults.push({
    test: `alphabetizeNames(
      [
        { first: 'Michael', last: 'Scott' },
        { first: 'Pam', last: 'Beasly' },
        { first: 'Dwight', last: 'Schrute' },
        { first: 'Jim', last: 'Halpert' },
      ],
      'first',
    ), \n returns [
      { first: 'Dwight', last: 'Schrute' },
      { first: 'Jim', last: 'Halpert' },
      { first: 'Michael', last: 'Scott' },
      { first: 'Pam', last: 'Beasly' },
    ]`,
    passed:
      JSON.stringify(
        alphabetizeNames(
          [
            { first: "Michael", last: "Scott" },
            { first: "Pam", last: "Beasly" },
            { first: "Dwight", last: "Schrute" },
            { first: "Jim", last: "Halpert" },
          ],
          "first"
        )
      ) ===
      JSON.stringify([
        { first: "Dwight", last: "Schrute" },
        { first: "Jim", last: "Halpert" },
        { first: "Michael", last: "Scott" },
        { first: "Pam", last: "Beasly" },
      ]),
    result: JSON.stringify(
      alphabetizeNames(
        [
          { first: "Dwight", last: "Schrute" },
          { first: "Jim", last: "Halpert" },
          { first: "Michael", last: "Scott" },
          { first: "Pam", last: "Beasly" },
        ],
        "first"
      )
    ),
  });
  testResults.push({
    test: `alphabetizeNames(
      [
        { first: 'John', last: 'Smith' },
        { first: 'Jane', last: 'Smith' },
        { first: 'Other', last: 'Name' },
        { first: 'Another', last: 'Name' },
      ],
      'last',
    ), \n returns [
      { first: 'Another', last: 'Name' },
      { first: 'Other', last: 'Name' },
      { first: 'Jane', last: 'Smith' },
      { first: 'John', last: 'Smith' },
    ]`,
    passed:
      JSON.stringify(
        alphabetizeNames(
          [
            { first: "John", last: "Smith" },
            { first: "Jane", last: "Smith" },
            { first: "Other", last: "Name" },
            { first: "Another", last: "Name" },
          ],
          "last"
        )
      ) ===
      JSON.stringify([
        { first: "Another", last: "Name" },
        { first: "Other", last: "Name" },
        { first: "Jane", last: "Smith" },
        { first: "John", last: "Smith" },
      ]),
    result: JSON.stringify(
      alphabetizeNames(
        [
          { first: "John", last: "Smith" },
          { first: "Jane", last: "Smith" },
          { first: "Other", last: "Name" },
          { first: "Another", last: "Name" },
        ],
        "last"
      )
    ),
  });
  testResults.push({
    test: `alphabetizeNames(
      [
        { first: 'John', last: 'Stewart' },
        { first: 'John', last: 'Stamos' },
        { first: 'Chris', last: 'Evans' },
        { first: 'Chris', last: 'Stapleton' },
      ],
      'last',
    ), \n returns [
      { first: 'Chris', last: 'Evans' },
      { first: 'Chris', last: 'Stapleton' },
      { first: 'John', last: 'Stamos' },
      { first: 'John', last: 'Stewart' },
    ]`,
    passed:
      JSON.stringify(
        alphabetizeNames(
          [
            { first: "John", last: "Stewart" },
            { first: "John", last: "Stamos" },
            { first: "Chris", last: "Evans" },
            { first: "Chris", last: "Stapleton" },
          ],
          "first"
        )
      ) ===
      JSON.stringify([
        { first: "Chris", last: "Evans" },
        { first: "Chris", last: "Stapleton" },
        { first: "John", last: "Stamos" },
        { first: "John", last: "Stewart" },
      ]),

    result: JSON.stringify(
      alphabetizeNames(
        [
          { first: "John", last: "Stewart" },
          { first: "John", last: "Stamos" },
          { first: "Chris", last: "Evans" },
          { first: "Chris", last: "Stapleton" },
        ],
        "first"
      )
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Alphabetize Names",
  description:
    "Create a function that returns a list of name objects alphabetized.",
  instructions:
    'Create a function alphabetizeNames that takes in an two arguments, an array of name objects ex. [{ firstName: string, lastName: string }, {...}]. and a string that represents which name to order by (either "first" or "last").  Return a new array container all the name objects in the correct alphabetic order. If grouping by last name and two names are the same, use the first name to decide the order.  Vice versa if ordering by first name.',
  difficulty: 2,
  testScriptCode: createTestScriptString(alphabetizeNamesTests, [
    {
      name: "checkFunctionReturnsAListOfNames",
      func: checkFunctionReturnsAListOfNames,
    },
    { name: "object_equals", func: object_equals },
  ]),
  startingCode:
    "const alphabetizeNames = (nameList, sortBy) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(alphabetizeNamesTests()),
  problemExplanation:
    "There are a few parts of this problem that need to be worked out.  First, you will need to find some sort of sorting method.  Then, you will need to iterate over an array of objects.  Lastly, you will need some condition that if two names are the same, you can sort by the other name.",
  hints: [
    "Maybe try using the built in sort() method for javascript.",
    "You can use the javascript localeCompare() to compare two strings for alphabetic order.",
    "You can use the second argument in the function to index the object.",
  ],
  solutionCode: alphabetizeNamesSolution,
};

export default data;
