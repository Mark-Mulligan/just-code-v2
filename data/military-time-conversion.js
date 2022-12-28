improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function militaryTimeConverter.",
        passed: typeof militaryTimeConverter === "function",
        result: typeof militaryTimeConverter,
    });
    testResults.push({
        test: "Function returns a string.",
        passed: typeof militaryTimeConverter("22:33:06") === "string",
        result: typeof militaryTimeConverter("22:33:06"),
    });
    testResults.push({
        test: 'militaryTimeConverter("22:33:06") returns "10:33:06 PM"',
        passed: militaryTimeConverter("22:33:06") === "10:33:06 PM",
        result: militaryTimeConverter("22:33:06"),
    });
    testResults.push({
        test: 'militaryTimeConverter("08:15:27") returns "8:15:27 AM"',
        passed: militaryTimeConverter("08:15:27") === "8:15:27 AM",
        result: militaryTimeConverter("08:15:27"),
    });
    testResults.push({
        test: 'militaryTimeConverter("15:45:00") returns "3:45:00 PM"',
        passed: militaryTimeConverter("15:45:00") === "3:45:00 PM",
        result: militaryTimeConverter("15:45:00"),
    });
    testResults.push({
        test: 'militaryTimeConverter("18:00:10") returns "6:00:10 PM"',
        passed: militaryTimeConverter("18:00:10") === "6:00:10 PM",
        result: militaryTimeConverter("18:00:10"),
    });
    return testResults;
} 
 runTests();