improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function called reverseStr.",
        passed: typeof reverseStr === "function",
        result: typeof reverseStr,
    });
    testResults.push({
        test: "Function returns a string",
        passed: typeof reverseStr("test") === "string",
        result: typeof reverseStr("test"),
    });
    testResults.push({
        test: 'reverseStr("Hello World") returns "dlroW olleH"',
        passed: reverseStr("Hello World") === "dlroW olleH",
        result: reverseStr("Hellow World"),
    });
    testResults.push({
        test: 'reverseStr("Reverse Me") returns "eM esreveR"',
        passed: reverseStr("Reverse Me") === "eM esreveR",
        result: reverseStr("Reverse Me"),
    });
    testResults.push({
        test: 'reverseStr("racecar") returns "racecar"',
        passed: reverseStr("racecar") === "racecar",
        result: reverseStr("racecar"),
    });
    return testResults;
} 
 runTests();