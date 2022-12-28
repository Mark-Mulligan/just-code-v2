improperCode/
const object_equals = (x, y) => {
    if (x === y)
        return true;
    if (!(x instanceof Object) || !(y instanceof Object))
        return false;
    if (x.constructor !== y.constructor)
        return false;
    for (var p in x) {
        if (!x.hasOwnProperty(p))
            continue;
        if (!y.hasOwnProperty(p))
            return false;
        if (x[p] === y[p])
            continue;
        if (typeof x[p] !== "object")
            return false;
        if (!object_equals(x[p], y[p]))
            return false;
    }
    for (p in y)
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p))
            return false;
    return true;
} 
const largestSumReturnTypeCheck = (largestSumResult) => {
    if (typeof largestSumResult !== "object") {
        return false;
    }
    if (Object.keys(largestSumResult).length !== 2) {
        return false;
    }
    if (!largestSumResult.hasOwnProperty("largestSum") ||
        !largestSumResult.hasOwnProperty("indexes")) {
        return false;
    }
    if (typeof largestSumResult["largestSum"] !== "number" ||
        !Array.isArray(largestSumResult["indexes"]) ||
        largestSumResult["indexes"].length !== 2) {
        return false;
    }
    if (typeof largestSumResult["indexes"][0] !== "number" ||
        typeof largestSumResult["indexes"][1] !== "number") {
        return false;
    }
    return true;
} 
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User create a function called largestSum",
        passed: typeof largestSum === "function",
        result: typeof largestSum,
    });
    testResults.push({
        test: "Function returns an object containing two keys, largestSum (number), and indexes, (number[])",
        passed: largestSumReturnTypeCheck(largestSum([1, 2, 3])),
        result: JSON.stringify(largestSum([1, 2, 3])),
    });
    testResults.push({
        test: "largestSum([1, 2, 3]) returns { largestSum: 5, indexes: [1, 2] }",
        passed: object_equals(largestSum([1, 2, 3]), {
            largestSum: 5,
            indexes: [1, 2],
        }),
        result: JSON.stringify(largestSum([1, 2, 3])),
    });
    testResults.push({
        test: "largestSum([10, 6, 2, 7]) returns { largestSum: 17, indexes: [0, 3]}",
        passed: object_equals(largestSum([10, 6, 2, 7]), {
            largestSum: 17,
            indexes: [0, 3],
        }),
        result: JSON.stringify(largestSum([10, 6, 2, 7])),
    });
    testResults.push({
        test: "largestSum([3, 27, 31, 4]) returns { largestSum: 58, indexes: [1, 2] }",
        passed: object_equals(largestSum([3, 27, 31, 4]), {
            largestSum: 58,
            indexes: [1, 2],
        }),
        result: JSON.stringify(largestSum([3, 27, 31, 4])),
    });
    return testResults;
} 
 runTests();