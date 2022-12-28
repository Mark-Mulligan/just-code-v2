improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function called largestNum.",
        passed: typeof largestNum === "function",
        result: typeof largestNum,
    });
    testResults.push({
        test: "Function returns a number",
        passed: typeof largestNum([1, 2, 3, 4]) === "number",
        result: typeof largestNum([1, 2, 3, 4]),
    });
    testResults.push({
        test: "largestNum([1, 8, 10, 5, 12]) returns 12",
        passed: largestNum([1, 8, 10, 5, 12]) === 12,
        result: largestNum([1, 8, 10, 5, 12]),
    });
    testResults.push({
        test: "largestNum([1, 8, 10, 5, 12]) returns 80",
        passed: largestNum([-4, 1, 80, 2, 1]) === 80,
        result: largestNum([-4, 1, 80, 2, 1]),
    });
    testResults.push({
        test: "largestNum([-5, -2, -1, -3, -20]) returns -1",
        passed: largestNum([-5, -2, -1, -3, -20]) === -1,
        result: largestNum([-5, -2, -1, -3, -20]),
    });
    return testResults;
} 
 runTests();