improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function hasKey.",
        passed: typeof hasKey === "function",
        result: typeof hasKey,
    });
    testResults.push({
        test: "Function returns a boolean.",
        passed: typeof hasKey({ firstName: "Mark", lastName: "Mulligan" }, "firstName") === "boolean",
        result: typeof hasKey({ firstName: "Mark", lastName: "Mulligan" }, "firstName"),
    });
    testResults.push({
        test: 'hasKey({ firstName: "Mark", lastName: "Mulligan" }, "firstName") returns true',
        passed: hasKey({ firstName: "Mark", lastName: "Mulligan" }, "firstName") === true,
        result: JSON.stringify(hasKey({ firstName: "Mark", lastName: "Mulligan" }, "firstName")),
    });
    testResults.push({
        test: 'hasKey({ label: "Program on", value: "1" }, "labels") returns false',
        passed: hasKey({ label: "Program on", value: "1" }, "labels") === false,
        result: JSON.stringify(hasKey({ label: "Program on", value: "1" }, "labels")),
    });
    testResults.push({
        test: 'hasKey({ dates: ["12-4-2022", "12-11-2022"], amounts: [10, 20] }, "dates") returns true',
        passed: hasKey({ dates: ["12-4-2022", "12-11-2022"], amounts: [10, 20] }, "dates") === true,
        result: JSON.stringify(hasKey({ dates: ["12-4-2022", "12-11-2022"], amounts: [10, 20] }, "dates")),
    });
    testResults.push({
        test: 'hasKey({ test: "Test", tester: "Tester" }, "testing") returns false',
        passed: hasKey({ test: "Test", tester: "Tester" }, "testing") === false,
        result: JSON.stringify(hasKey({ test: "Test", tester: "Tester" }, "testing")),
    });
    return testResults;
} 
 runTests();