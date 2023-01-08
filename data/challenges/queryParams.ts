// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const queryParametersSolution = `const extractQueryParams = (urlStr) => {
  // Extract the query string from the url
  let queryParamsRegex = ${/\?.*/}
  let queryParamsStr = urlStr.match(queryParamsRegex)[0].slice(1);

  // Split the query string into key values groupings
  let queryParamsArr = queryParamsStr.split("&");
  let result = {};

  // Format the single string key value groupings into an object
  queryParamsArr.forEach(queryParamGrouping => {
    let grouping = queryParamGrouping.split("=");
    result[grouping[0]] = grouping[1];
  })

  return result;
}`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'extractQueryParams',
  'object',
  'areEqual',
  [
    {
      input: ['https://example?search=test&length=3'],
      result: { search: 'test', length: '3' },
    },
    {
      input: ['https://mysearchwebsite?q=google&results=50&past=false'],
      result: {
        q: 'google',
        results: '50',
        past: 'false',
      },
    },
    {
      input: ['https://weather?city=dallas&forecast=3day&unit=fahrenheit'],
      result: {
        city: 'dallas',
        forecast: '3day',
        unit: 'fahrenheit',
      },
    },
  ]
);

const data: CodingChallengeData = {
  title: 'Query Parameters',
  description:
    'Create a function that extracts the query parameters from a search url.',
  instructions:
    'Create a function called extractQueryParams that gets the query parameters from a search and stores them in an object. For example "https://example?search=test&length=3" would return { search: "test", length: "3" }. Normally I would recommend using URL and URLSearchParams api. However, due to the sandbox environment, you will not have access to these javascript apis, so you have have to find a different way to get the query parameters.',
  difficulty: 2,
  testScriptCode,
  startingCode:
    'const extractQueryParams = (urlStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'This problem simulates a real world example of working with a url string. For this, you will be tasked with removing the query parameters from the url string and putting them into a javascript object.',
  hints: [
    'Normally when working with url strings, javascript has some built in options.  However, for this problem, you will not be able to use those.',
    'Try using regex or some other method for search through the string.',
    'Begin by breaking off the search parameters in the string (everything after the ?)',
    'From this point note all search params will be stored as [key]=[value] in the string',
    'Each parameter grouping is separated by an "&" sign.',
  ],
  solutionCode: queryParametersSolution,
};

export default data;
