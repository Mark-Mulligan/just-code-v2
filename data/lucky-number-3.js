improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function called hasThreeRepeatingValues.",
        passed: typeof hasThreeRepeatingValues === "function",
        result: typeof hasThreeRepeatingValues,
    });
    testResults.push({
        test: "Function returns a boolean",
        passed: typeof hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]) ===
            "boolean",
        result: typeof hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]),
    });
    testResults.push({
        test: "hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]) returns true",
        passed: hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]) === true,
        result: JSON.stringify(hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1])),
    });
    testResults.push({
        test: "hasThreeRepeatingValues([10, 12, 12, 10, 90, 9, 87, 90]) returns false",
        passed: hasThreeRepeatingValues([10, 12, 12, 10, 90, 9, 87, 90]) === false,
        result: JSON.stringify(hasThreeRepeatingValues([10, 12, 12, 10, 90, 9, 87, 90])),
    });
    testResults.push({
        test: 'hasThreeRepeatingValues(["repeat", "repeats", "repeat", "repeating", "repeats", "repeating", "repeat"]) returns true',
        passed: hasThreeRepeatingValues([
            "repeat",
            "repeats",
            "repeat",
            "repeating",
            "repeats",
            "repeating",
            "repeat",
        ]) === true,
        result: JSON.stringify(hasThreeRepeatingValues([
            "repeat",
            "repeats",
            "repeat",
            "repeating",
            "repeats",
            "repeating",
            "repeat",
        ])),
    });
    testResults.push({
        test: 'hasThreeRepeatingValues(["repeat", "repeats", "repeat", "repeating", "repeats", "repeated"]) returns false',
        passed: hasThreeRepeatingValues([
            "repeat",
            "repeats",
            "repeat",
            "repeating",
            "repeats",
            "repeated",
        ]) === false,
        result: JSON.stringify(hasThreeRepeatingValues([
            "repeat",
            "repeats",
            "repeat",
            "repeating",
            "repeats",
            "repeated",
        ])),
    });
    testResults.push({
        test: "hasThreeRepeatingValues([true, false, true, false, true]) returns true",
        passed: hasThreeRepeatingValues([true, false, true, false, true]) === true,
        result: JSON.stringify(hasThreeRepeatingValues([true, false, true, false, true])),
    });
    return testResults;
} 
 runTests();