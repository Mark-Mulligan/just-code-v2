improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function called addNumbersInRange.",
        passed: typeof addNumbersInRange === "function",
        result: typeof addNumbersInRange,
    });
    testResults.push({
        test: "Function returns a number",
        passed: typeof addNumbersInRange(1, 5) === "number",
        result: typeof addNumbersInRange(1, 5),
    });
    testResults.push({
        test: "addNumbersInRange(1, 5) returns 15",
        passed: addNumbersInRange(1, 5) === 15,
        result: addNumbersInRange(1, 5),
    });
    testResults.push({
        test: "addNumbersInRange(5, 10) returns 45",
        passed: addNumbersInRange(5, 10) === 45,
        result: addNumbersInRange(5, 10),
    });
    testResults.push({
        test: "addNumbersInRange(1, 100) returns 5050",
        passed: addNumbersInRange(1, 100) === 5050,
        result: addNumbersInRange(1, 100),
    });
    testResults.push({
        test: "addNumbersInRange(85, 9783) returns 47854866",
        passed: addNumbersInRange(85, 9783) === 47854866,
        result: addNumbersInRange(85, 9783),
    });
    return testResults;
} 
 runTests();