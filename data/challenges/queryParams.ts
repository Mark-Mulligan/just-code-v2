// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const queryParametersSolution = `const extractQueryParams = (urlStr) => {
  // Extract the query string from the url
  let queryParamsRegex = ${/\?.*/}
  let queryParamsStr = urlStr.match(queryParamsRegex)[0].slice(1);

  // Split the query string into key values gropuings
  let queryParamsArr = queryParamsStr.split("&");
  let result = {};

  // Format the single string key value groupings into an object
  queryParamsArr.forEach(queryParamGrouping => {
    let grouping = queryParamGrouping.split("=");
    result[grouping[0]] = grouping[1];
  })

  return result;
}`;

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

const extractQueryParams = (urlStr: string) => {
  return {};
};

export const queryParametersTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User create a function called extractQueryParams",
    passed: typeof extractQueryParams === "function",
    result: typeof extractQueryParams,
  });
  testResults.push({
    test: "Function returns an object",
    passed:
      typeof extractQueryParams("https://example?search=test&length=3") ===
      "object",
    result: typeof extractQueryParams("https://example?search=test&length=3"),
  });
  testResults.push({
    test: 'extractQueryParams("https://example?search=test&length=3") returns { search: "test", length: "3" }',
    passed: object_equals(
      extractQueryParams("https://example?search=test&length=3"),
      { search: "test", length: "3" }
    ),
    result: JSON.stringify(
      extractQueryParams("https://example?search=test&length=3")
    ),
  });
  testResults.push({
    test: 'extractQueryParams("https://mysearchwebsite?q=google&results=50&past=false") returns { q: "google", results: "50", past: "false" }',
    passed: object_equals(
      extractQueryParams(
        "https://mysearchwebsite?q=google&results=50&past=false"
      ),
      {
        q: "google",
        results: "50",
        past: "false",
      }
    ),
    result: JSON.stringify(
      extractQueryParams(
        "https://mysearchwebsite?q=google&results=50&past=false"
      )
    ),
  });
  testResults.push({
    test: 'extractQueryParams("https://weather?city=dallas&forecast=3day&unit=fahrenheit") returns { city: "dallas", forecast: "3day", unit: "fahrenheit" }',
    passed: object_equals(
      extractQueryParams(
        "https://weather?city=dallas&forecast=3day&unit=fahrenheit"
      ),
      {
        city: "dallas",
        forecast: "3day",
        unit: "fahrenheit",
      }
    ),
    result: JSON.stringify(
      extractQueryParams(
        "https://weather?city=dallas&forecast=3day&unit=fahrenheit"
      )
    ),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Query Parameters",
  description:
    "Create a function that extracts the query parameters from a search url.",
  instructions:
    'Create a function called extractQueryParams that gets the query parameters from a search and stores them in an object. For example "https://example?search=test&length=3" would return { search: "test", length: "3" }. Normally I would recommend using URL and URLSearchParams api. However, due to the sandbox environment, you will not have access to these javascript apis, so you have have to find a different way to get the query parameters.',
  difficulty: 2,
  testScriptCode: createTestScriptString(queryParametersTests, [
    { name: "object_equals", func: object_equals },
  ]),
  startingCode:
    "const extractQueryParams = (urlStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(queryParametersTests()),
  problemExplanation:
    "This problem simulates a real world example of working with a url string. For this, you will be tasked with removing the query parameters from the url string and putting them into a javascript object.",
  hints: [
    "Normally when working with url strings, javascript has some built in options.  However, for this problem, you will not be able to use those.",
    "Try using regex or some other method for search through the string.",
    "Begin by breaking off the search parameters in the string (everything after the ?)",
    "From this point note all search params will be stored as [key]=[value] in the string",
    'Each parameter grouping is separated by an "&" sign.',
  ],
  solutionCode: queryParametersSolution,
};

export default data;
