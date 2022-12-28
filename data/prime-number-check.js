improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function isPrime.",
        passed: typeof isPrime === "function",
        result: typeof isPrime,
    });
    testResults.push({
        test: "Function returns a boolean.",
        passed: typeof isPrime(11) === "boolean",
        result: typeof isPrime(11),
    });
    testResults.push({
        test: "isPrime(29) returns true",
        passed: isPrime(29) === true,
        result: JSON.stringify(isPrime(29)),
    });
    testResults.push({
        test: "isPrime(32) returns false",
        passed: isPrime(32) === false,
        result: JSON.stringify(isPrime(32)),
    });
    testResults.push({
        test: "isPrime(97) returns true",
        passed: isPrime(97) === true,
        result: JSON.stringify(isPrime(97)),
    });
    testResults.push({
        test: "isPrime(100) returns false",
        passed: isPrime(100) === false,
        result: JSON.stringify(isPrime(100)),
    });
    testResults.push({
        test: "isPrime(5851) returns true",
        passed: isPrime(5851) === true,
        result: JSON.stringify(isPrime(5851)),
    });
    testResults.push({
        test: "isPrime(5853) returns false",
        passed: isPrime(5853) === false,
        result: JSON.stringify(isPrime(5853)),
    });
    return testResults;
} 
 runTests();