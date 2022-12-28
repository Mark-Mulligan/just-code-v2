improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function hasDuplicateValues.",
        passed: typeof hasDuplicateValues === "function",
        result: typeof hasDuplicateValues,
    });
    testResults.push({
        test: "Function returns a boolean.",
        passed: typeof hasDuplicateValues([1, 2, 3, 4, 5, 1]) === "boolean",
        result: typeof hasDuplicateValues([1, 2, 3, 4, 5, 1]),
    });
    testResults.push({
        test: "hasDuplicateValues([1, 2, 3, 4, 5, 1]) returns true",
        passed: hasDuplicateValues([1, 2, 3, 4, 5, 1]) === true,
        result: JSON.stringify(hasDuplicateValues([1, 2, 3, 4, 5, 1])),
    });
    testResults.push({
        test: "hasDuplicateValues(10, 12, 31, 4, 25, -3]) returns false",
        passed: hasDuplicateValues([10, 12, 31, 4, 25, -3]) === false,
        result: JSON.stringify(hasDuplicateValues([10, 12, 31, 4, 25, -3])),
    });
    testResults.push({
        test: `hasDuplicateValues(['cheese', 'cake', 'cookies', 'fries']) returns false`,
        passed: hasDuplicateValues(["cheese", "cake", "cookies", "fries"]) === false,
        result: JSON.stringify(hasDuplicateValues(["cheese", "cake", "cookies", "fries"])),
    });
    testResults.push({
        test: `hasDuplicateValues(['test', 'testing', 'test', 'testing', 'tested']) returns true`,
        passed: hasDuplicateValues(["test", "testing", "test", "testing", "tested"]) ===
            true,
        result: JSON.stringify(hasDuplicateValues(["test", "testing", "test", "testing", "tested"])),
    });
    return testResults;
} 
 runTests();