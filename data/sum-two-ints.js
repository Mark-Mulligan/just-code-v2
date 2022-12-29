const sum = (num1, num2) => {
  // Add Code Below
  return num1 - num2;

  // Add Code Above
}
function areEqual(arg1, arg2) {
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
      if (!isEqual(arg1[key], arg2[key])) {
        return false;
      }
    }

    return true;
  }
};

  const runTests = () => {
    const testResults = [];
    testResults.push({ test: "User created a function called sum", passed: typeof sum === "function", result: typeof sum})
testResults.push({ test: "sum(1,2) returns a number", passed: typeof sum(1,2) === "number", result: typeof sum(1,2)})
testResults.push({ test: "sum(1,2) returns 3", passed: areEqual(sum(1,2), 3), result: JSON.stringify(sum(1,2))})
testResults.push({ test: "sum(5,10) returns 15", passed: areEqual(sum(5,10), 15), result: JSON.stringify(sum(5,10))})
testResults.push({ test: "sum(-1,-4) returns -5", passed: areEqual(sum(-1,-4), -5), result: JSON.stringify(sum(-1,-4))})

    return testResults;
  }

  runTests()