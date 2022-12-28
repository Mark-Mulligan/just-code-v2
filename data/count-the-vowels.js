improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function called vowelCount.",
        passed: typeof vowelCount === "function",
        result: typeof vowelCount,
    });
    testResults.push({
        test: "Function returns a number",
        passed: typeof vowelCount("abcdefg") === "number",
        result: typeof vowelCount("abcdefg"),
    });
    testResults.push({
        test: 'vowelCount("This is a test sentence.") returns 7 ',
        passed: vowelCount("This is a test sentence.") === 7,
        result: vowelCount("This is a test sentence."),
    });
    testResults.push({
        test: 'vowelCount("If you have not checked out FreeCodeCamp, you should. It is Awesome!!!") returns 25',
        passed: vowelCount("If you have not checked out FreeCodeCamp, you should. It is Awesome!!!") === 25,
        result: vowelCount("If you have not checked out FreeCodeCamp, you should. It is Awesome!!!"),
    });
    testResults.push({
        test: 'vowelCount("THIS IS UPPER CASE. this is lowercase.") returns 12',
        passed: vowelCount("THIS IS UPPER CASE. this is lowercase.") === 12,
        result: vowelCount("THIS IS UPPER CASE. this is lowercase."),
    });
    return testResults;
} 
 runTests();