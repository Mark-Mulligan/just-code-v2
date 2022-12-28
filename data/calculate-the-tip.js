improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function tipCalc.",
        passed: typeof tipCalc === "function",
        result: typeof tipCalc,
    });
    testResults.push({
        test: "Function returns a string.",
        passed: typeof tipCalc("$25.97", "20%") === "string",
        result: typeof tipCalc("$25.97", "20%"),
    });
    testResults.push({
        test: 'tipCalc("$25.97", "20%") returns $5.19',
        passed: tipCalc("$25.97", "20%") === "$5.19",
        result: tipCalc("$25.97", "20%"),
    });
    testResults.push({
        test: 'tipCalc("$43.28", "21%") returns $9.09',
        passed: tipCalc("$43.28", "21%") === "$9.09",
        result: tipCalc("$43.28", "21%"),
    });
    testResults.push({
        test: 'tipCalc("$12.63", "18%") returns $2.27',
        passed: tipCalc("$12.63", "18%") === "$2.27",
        result: tipCalc("$12.63", "18%"),
    });
    testResults.push({
        test: 'tipCalc("101.73", "25%") returns $25.43',
        passed: tipCalc("$101.73", "25%") === "$25.43",
        result: tipCalc("$101.73", "25%"),
    });
    testResults.push({
        test: 'tipCalc("$10.91", "5%") returns $0.55',
        passed: tipCalc("$10.91", "5%") === "$0.55",
        result: tipCalc("$10.91", "5%"),
    });
    testResults.push({
        test: 'tipCalc("$32.12, "19%") returns $6.10',
        passed: tipCalc("$32.12", "19%") === "$6.10",
        result: tipCalc("$32.12", "19%"),
    });
    return testResults;
} 
 runTests();