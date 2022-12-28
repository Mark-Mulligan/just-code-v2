improperCode/
const runTests = () => {
    var _a, _b, _c, _d;
    const testResults = [];
    testResults.push({
        test: "User created a function called findThanksgivingDate.",
        passed: typeof findThanksgivingDate === "function",
        result: typeof findThanksgivingDate,
    });
    testResults.push({
        test: "Function returns a date object",
        passed: Object.prototype.toString.call(findThanksgivingDate(2022)) ===
            "[object Date]",
        result: JSON.stringify(findThanksgivingDate(2022)),
    });
    testResults.push({
        test: "findThanksgivingDate(2022) returns \n2022-11-24T06:00:00.000Z",
        passed: ((_a = findThanksgivingDate(2022)) === null || _a === void 0 ? void 0 : _a.toDateString()) ===
            new Date("11-24-2022").toDateString(),
        result: JSON.stringify(findThanksgivingDate(2022)),
    });
    testResults.push({
        test: "findThanksgivingDate(1980) returns \n 1980-11-27T06:00:00.000Z",
        passed: ((_b = findThanksgivingDate(1980)) === null || _b === void 0 ? void 0 : _b.toDateString()) ===
            new Date("11-27-1980").toDateString(),
        result: JSON.stringify(findThanksgivingDate(1980)),
    });
    testResults.push({
        test: "findThanksgivingDate(1995) returns \n 1995-11-23T06:00:00.000Z",
        passed: ((_c = findThanksgivingDate(1995)) === null || _c === void 0 ? void 0 : _c.toDateString()) ===
            new Date("11-23-1995").toDateString(),
        result: JSON.stringify(findThanksgivingDate(1995)),
    });
    testResults.push({
        test: "findThanksgivingDate(2030) returns \n2030-11-28T06:00:00.000Z",
        passed: ((_d = findThanksgivingDate(2030)) === null || _d === void 0 ? void 0 : _d.toDateString()) ===
            new Date("11-28-2030").toDateString(),
        result: JSON.stringify(findThanksgivingDate(2030)),
    });
    return testResults;
} 
 runTests();