improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function called sortDates.",
        passed: typeof sortDates === "function",
        result: typeof sortDates,
    });
    testResults.push({
        test: "Function returns an array.",
        passed: Array.isArray(sortDates(["12-2-2020", "12-3-2020", "5-3-2020"])),
        result: JSON.stringify(sortDates(["12-2-2020", "12-3-2020", "5-3-2020"])),
    });
    testResults.push({
        test: 'sortDates(["12-25-2018", "11-24-2018", "10-31-2018"]) returns ["10-31-2018", "11-24-2018", "12-25-2018"]',
        passed: JSON.stringify(sortDates(["12-25-2018", "11-24-2018", "10-31-2018"])) ===
            JSON.stringify(["10-31-2018", "11-24-2018", "12-25-2018"]),
        result: JSON.stringify(sortDates(["12-25-2018", "11-24-2018", "10-31-2018"])),
    });
    testResults.push({
        test: 'sortDates(["4-1-2000", "4-1-2008", "4-1-1994"]) returns ["4-1-1994", "4-1-2000", "4-1-2008"]',
        passed: JSON.stringify(sortDates(["4-1-2000", "4-1-2008", "4-1-1994"])) ===
            JSON.stringify(["4-1-1994", "4-1-2000", "4-1-2008"]),
        result: JSON.stringify(sortDates(["4-1-2000", "4-1-2008", "4-1-1994"])),
    });
    testResults.push({
        test: 'sortDates(["5-1-1990", "5-2-1990", "10-6-1980", "11-7-2000", "7-3-2030"]) returns ["10-6-1980", "5-1-1990", "5-2-1990", "11-7-2000", "7-3-2030"]',
        passed: JSON.stringify(sortDates([
            "5-1-1990",
            "5-2-1990",
            "10-6-1980",
            "11-7-2000",
            "7-3-2030",
        ])) ===
            JSON.stringify([
                "10-6-1980",
                "5-1-1990",
                "5-2-1990",
                "11-7-2000",
                "7-3-2030",
            ]),
        result: JSON.stringify(sortDates(["5-1-1990", "5-2-1990", "10-6-1980", "11-7-2000", "7-3-2030"])),
    });
    return testResults;
} 
 runTests();