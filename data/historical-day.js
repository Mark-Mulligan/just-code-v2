improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function findDay.",
        passed: typeof findDay === "function",
        result: typeof findDay,
    });
    testResults.push({
        test: "Function returns a string.",
        passed: typeof findDay("10-19-1987") === "string",
        result: typeof findDay("10-19-1987"),
    });
    testResults.push({
        test: 'findDay("10-19-1987") returns "Monday"',
        passed: findDay("10-19-1987") === "Monday",
        result: findDay("10-19-1987"),
    });
    testResults.push({
        test: 'findDay("05-25-1977") returns "Wednesday"',
        passed: findDay("05-25-1977") === "Wednesday",
        result: findDay("05-25-1977"),
    });
    testResults.push({
        test: 'findDay("07-21-1969") returns "Monday"',
        passed: findDay("07-21-1969") === "Monday",
        result: findDay("07-21-1969"),
    });
    testResults.push({
        test: 'findDay("06-29-2007") returns "Friday"',
        passed: findDay("06-29-2007") === "Friday",
        result: findDay("06-29-2007"),
    });
    return testResults;
} 
 runTests();