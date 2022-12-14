import { TestResult, CustomTest } from '../types/customTypes';

interface testUtilFunction {
  name: string;
  func: Function;
}

export const createTestScriptString = (
  testFunc: Function,
  utilFuncs?: testUtilFunction[]
) => {
  let resultStr = '';
  if (utilFuncs && utilFuncs.length > 0) {
    utilFuncs.forEach((utilFunc) => {
      resultStr += `const ${utilFunc.name} = ${utilFunc.func.toString()} \n`;
    });
  }

  resultStr += `const runTests = ${testFunc.toString()} \n runTests();`;
  return resultStr;
};

const areEqualFunctionAsString = `function areEqual(arg1, arg2) {
  if (
    (arg1 === null && arg2 === null) ||
    (arg1 === undefined && arg2 === undefined)
  ) {
    return true;
  }

  if (typeof arg1 !== typeof arg2) {
    return false;
  }

  if (
    typeof arg1 === "string" ||
    typeof arg1 === "number" ||
    typeof arg1 === "boolean" ||
    arg1 instanceof Date
  ) {
    return arg1.toString() === arg2.toString();
  }

  if (Array.isArray(arg1) || typeof arg1 === "object") {
    if (Object.keys(arg1).length !== Object.keys(arg2).length) {
      return false;
    }

    for (const key in arg1) {
      if (!areEqual(arg1[key], arg2[key])) {
        return false;
      }
    }

    return true;
  }
};`;

const arraysHaveSameValues = `function arraysHaveSameValues(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  const sorted1 = arr1.sort();
  const sorted2 = arr2.sort();
  for (let i = 0; i < sorted1.length; i++) {
    if (!areEqual(sorted1[i], sorted2[i])) {
      return false;
    }
  }
  return true;
}`;

type ReturnTypes =
  | 'string'
  | 'number'
  | 'array'
  | 'object'
  | 'boolean'
  | 'date';

export const generateTestScriptString = (
  funcName: string,
  returnType: ReturnTypes,
  comparisonFunction: 'areEqual' | 'arraysHaveSameValues',
  tests: { input?: any[]; result: any }[],
  customTests?: CustomTest[]
) => {
  let testScriptCode = '';
  const testCriteria: string[] = [];
  let testsAsString = '';

  tests.forEach((test, index) => {
    let argsAsString;
    if (test.input) {
      argsAsString = test.input.map((item) => JSON.stringify(item)).join(',');
    }

    let resultAsString = '';

    if (returnType === 'date') {
      resultAsString = `${JSON.stringify(test.result)}`;
    } else {
      resultAsString = JSON.stringify(test.result);
    }

    const functionCallString = `${funcName}(${argsAsString || ''})`;

    if (index === 0) {
      let testDescription = `User created a function called ${funcName}`;
      let passed = `typeof ${funcName} === "function"`;
      let result = `typeof ${funcName}`;
      testsAsString += `testResults.push({ test: \`${testDescription}\`, passed: ${passed}, result: ${result}})\n`;
      testCriteria.push(testDescription);

      if (returnType === 'array') {
        passed = `Array.isArray(${functionCallString})`;
      } else if (returnType === 'date') {
        passed = `${functionCallString} instanceof Date`;
      } else {
        passed = `typeof ${functionCallString} === "${returnType}"`;
      }

      if (returnType === 'array' || returnType === 'object') {
        testDescription = `${functionCallString} returns an ${returnType}`;
      } else {
        testDescription = `${functionCallString} returns a ${returnType}`;
      }

      if (returnType === 'date') {
        result = `'${test.result}'`;
      } else {
        result = `typeof ${functionCallString}`;
      }

      testsAsString += `testResults.push({ test: \`${testDescription}\`, passed: ${passed}, result: ${result}})\n`;
      testCriteria.push(testDescription);
    }

    let passed = '';
    let result = '';
    let testDescription = '';

    if (returnType === 'date') {
      passed = `${comparisonFunction}(${functionCallString}, new Date('${test.result}'))`;
      result = `'${test.result}'`;
      testDescription = `${functionCallString} returns ${test.result}`;
    } else {
      passed = `${comparisonFunction}(${functionCallString}, ${resultAsString})`;
      result = `JSON.stringify(${functionCallString})`;
      testDescription = `${functionCallString} returns ${resultAsString}`;
    }

    const testResult = `{ test: \`${testDescription}\`, passed: ${passed}, result: ${result}}`;
    testsAsString += `testResults.push(${testResult})\n`;
    testCriteria.push(testDescription);
  });

  if (customTests) {
    customTests.forEach((test) => {
      if (test.customVariables) {
        test.customVariables.forEach((variable) => {
          testsAsString += `${variable}\n`;
        });
      }

      testsAsString += `testResults.push({ test: \`${test.testDescription}\`, passed: ${test.passed}, result: ${test.result}})`;
      testCriteria.push(test.testDescription);
    });
  }

  testScriptCode += `${areEqualFunctionAsString}\n${arraysHaveSameValues}\n
  const runTests = () => {
    const testResults = [];
    ${testsAsString}
    return testResults;
  }\n
  runTests()`;
  return { testScriptCode, testCriteria };
};

export const deepEqual = (
  obj1: { [key: string]: any },
  obj2: { [key: string]: any }
) => {
  if (obj1 === obj2) return true;

  if (isPrimitive(obj1) && isPrimitive(obj2)) return obj1 === obj2;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
};

function isPrimitive(obj: { [key: string]: any }) {
  return obj !== Object(obj);
}

export function object_equals(x: any, y: any) {
  if (x === y) return true;
  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  if (x.constructor !== y.constructor) return false;

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue;
    if (!y.hasOwnProperty(p)) return false;
    if (x[p] === y[p]) continue;
    if (typeof x[p] !== 'object') return false;
    if (!object_equals(x[p], y[p])) return false;
  }

  for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;

  return true;
}

export const largestSumReturnTypeCheck = (largestSumResult: {
  largestSum: number;
  indexes: number[];
}) => {
  if (typeof largestSumResult !== 'object') {
    return false;
  }

  if (Object.keys(largestSumResult).length !== 2) {
    return false;
  }

  if (
    !largestSumResult.hasOwnProperty('largestSum') ||
    !largestSumResult.hasOwnProperty('indexes')
  ) {
    return false;
  }

  if (
    typeof largestSumResult['largestSum'] !== 'number' ||
    !Array.isArray(largestSumResult['indexes']) ||
    largestSumResult['indexes'].length !== 2
  ) {
    return false;
  }

  if (
    typeof largestSumResult['indexes'][0] !== 'number' ||
    typeof largestSumResult['indexes'][1] !== 'number'
  ) {
    return false;
  }

  return true;
};
