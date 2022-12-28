improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function called removeDuplicates.",
        passed: typeof removeDuplicates === "function",
        result: typeof removeDuplicates,
    });
    testResults.push({
        test: "Function returns an array.",
        passed: Array.isArray(removeDuplicates([1, 2, 2, 3, 4])),
        result: JSON.stringify(removeDuplicates([1, 2, 2, 3, 4])),
    });
    testResults.push({
        test: "removeDuplcates([1, 2, 1, 3, 2, 3, 4]) returns [1, 2, 3, 4]",
        passed: JSON.stringify(removeDuplicates([1, 2, 1, 3, 2, 3, 4])) ===
            JSON.stringify([1, 2, 3, 4]),
        result: JSON.stringify(removeDuplicates([1, 2, 1, 3, 2, 3, 4])),
    });
    testResults.push({
        test: "removeDuplcates([1, 2, 1, 3, 2, 3, 4]) returns [1, 2, 3, 4]",
        passed: JSON.stringify(removeDuplicates(["Sam", "Frodo", "Sam", "Gollum", "Gollum", "Aragon"])) === JSON.stringify(["Sam", "Frodo", "Gollum", "Aragon"]),
        result: JSON.stringify(removeDuplicates(["Sam", "Frodo", "Sam", "Gollum", "Gollum", "Aragon"])),
    });
    testResults.push({
        test: 'removeDuplcates(["Sam", "Frodo", "Sam", "Gollum", "Gollum", "Aragon"]) returns ["Sam", "Frodo", "Gollum", "Aragon"]',
        passed: JSON.stringify(removeDuplicates([10, 10, "test", "test", 73, "73"])) ===
            JSON.stringify([10, "test", 73, "73"]),
        result: JSON.stringify(removeDuplicates([10, 10, "test", "test", 73, "73"])),
    });
    return testResults;
} 
 runTests();