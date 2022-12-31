const totalLength = (strArr) => {
  // Add Code Below
  let total = 0;
  strArr.forEach(str => {
    total += str.length;
  });
  return total;

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
      if (!areEqual(arg1[key], arg2[key])) {
        return false;
      }
    }

    return true;
  }
};

  const runTests = () => {
    const testResults = [];
    testResults.push({ test: `User created a function called totalLength`, passed: typeof totalLength === "function", result: typeof totalLength})
testResults.push({ test: `totalLength(["this","is","a","test"]) returns a number`, passed: typeof totalLength(["this","is","a","test"]) === "number", result: typeof totalLength(["this","is","a","test"])})
testResults.push({ test: `totalLength(["this","is","a","test"]) returns 11`, passed: areEqual(totalLength(["this","is","a","test"]), 11), result: JSON.stringify(totalLength(["this","is","a","test"]))})
testResults.push({ test: `totalLength(["Somebody","once","told","me"]) returns 18`, passed: areEqual(totalLength(["Somebody","once","told","me"]), 18), result: JSON.stringify(totalLength(["Somebody","once","told","me"]))})
testResults.push({ test: `totalLength(["the","world","is","gonna","roll","me"]) returns 21`, passed: areEqual(totalLength(["the","world","is","gonna","roll","me"]), 21), result: JSON.stringify(totalLength(["the","world","is","gonna","roll","me"]))})
testResults.push({ test: `totalLength(["I","ain't","the","sharpest","tool","in","the","shed"]) returns 30`, passed: areEqual(totalLength(["I","ain't","the","sharpest","tool","in","the","shed"]), 30), result: JSON.stringify(totalLength(["I","ain't","the","sharpest","tool","in","the","shed"]))})

    return testResults;
  }

  runTests()