// Testing Utils
import { generateTestScriptString } from '../utils';

// Custom Types
import { CodingChallengeData } from '../../types/customTypes';

const snakeToCamelSolution = `const snakeToCamel = (str) => {
  return str.toLowerCase().replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
};`;

const { testCriteria, testScriptCode } = generateTestScriptString(
  'snakeToCamel',
  'string',
  'areEqual',
  [
    { input: ['python_style'], result: 'pythonStyle' },
    { input: ['did_you_use_regex'], result: 'didYouUseRegex' },
    { input: ['what_about_stack_overflow'], result: 'whatAboutStackOverflow' },
    { input: ['Bad_ExAMPle_Of_SnakE_Case'], result: 'badExampleOfSnakeCase' },
  ]
);

const data: CodingChallengeData = {
  title: 'Snake Case to Camel Case',
  description:
    'Create a function that converts a snake case string to a camel case string.',
  instructions:
    'Create a function that takes in one argument, a snake case string, and converts that string into camel case',
  difficulty: 3,
  testScriptCode,
  startingCode:
    'const snakeToCamel = (str) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
  testCriteria,
  problemExplanation:
    'This problem will involve you having to work and manipulate strings in javascript. Most variables in python are formatted in snake case while javascript mainly uses camel case. By creating a function that converts snake case to camel case, you will not only learn about the two naming conventions, you will also get exposed to many of javascript tools for working with strings.',
  hints: [
    'regex (aka regular expressions) might be useful for solving this problem.',
    'Some of the inputs are not 100% correct versions of snake case so account for that.',
  ],
  solutionCode: snakeToCamelSolution,
};

export default data;
