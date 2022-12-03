import { TestResult } from "../types/customTypes";

interface testUtilFunction {
  name: string;
  func: Function;
}

export const createTestScriptString = (
  testFunc: Function,
  utilFuncs?: testUtilFunction[]
) => {
  let resultStr = "";
  if (utilFuncs && utilFuncs.length > 0) {
    utilFuncs.forEach((utilFunc) => {
      resultStr += `const ${utilFunc.name} = ${utilFunc.func.toString()} \n`;
    });
  }

  resultStr += `const runTests = ${testFunc.toString()} \n runTests();`;
  return resultStr;
};

export const extractTestCriteria = (testLogic: TestResult[]) => {
  return testLogic.map((testResult) => {
    return testResult.test;
  });
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
    if (typeof x[p] !== "object") return false;
    if (!object_equals(x[p], y[p])) return false;
  }

  for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;

  return true;
}

export const largestSumReturnTypeCheck = (largestSumResult: {
  largestSum: number;
  indexes: number[];
}) => {
  if (typeof largestSumResult !== "object") {
    return false;
  }

  if (Object.keys(largestSumResult).length !== 2) {
    return false;
  }

  if (
    !largestSumResult.hasOwnProperty("largestSum") ||
    !largestSumResult.hasOwnProperty("indexes")
  ) {
    return false;
  }

  if (
    typeof largestSumResult["largestSum"] !== "number" ||
    !Array.isArray(largestSumResult["indexes"]) ||
    largestSumResult["indexes"].length !== 2
  ) {
    return false;
  }

  if (
    typeof largestSumResult["indexes"][0] !== "number" ||
    typeof largestSumResult["indexes"][1] !== "number"
  ) {
    return false;
  }

  return true;
};

export const checkArrContents = (inputArr: (string | number)[]) => {
  let hasNumbers = false;
  let hasStrings = false;

  if (!Array.isArray(inputArr)) {
    return { passed: false, message: "Function did not return an array." };
  } else if (inputArr.length !== 100) {
    return {
      passed: false,
      message: "Return array did not contain 100 values",
    };
  }

  for (let i = 0; i < inputArr.length; i++) {
    if (typeof inputArr[i] === "number") hasNumbers = true;
    if (typeof inputArr[i] === "string") hasStrings = true;

    if (hasNumbers && hasStrings) {
      break;
    }
  }

  if (hasNumbers && hasStrings) {
    return {
      passed: true,
      message:
        "Funtion returns an array containing 100 values with numbers and strings.",
    };
  } else if (!hasNumbers) {
    return { passed: false, message: "Return array does not have numbers." };
  } else if (!hasStrings) {
    return { passed: false, message: "Return array does not have strings." };
  } else {
    return {
      passed: false,
      message: "Return array does not have numbers or strings.",
    };
  }
};
