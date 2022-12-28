improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function validPhoneNum.",
        passed: typeof validPhoneNum === "function",
        result: typeof validPhoneNum,
    });
    testResults.push({
        test: "Function returns a boolean.",
        passed: typeof validPhoneNum("781-548-9900") === "boolean",
        result: typeof validPhoneNum("781-548-9900"),
    });
    testResults.push({
        test: 'validPhoneNum("781-548-9900") returns true',
        passed: validPhoneNum("781-548-9900") === true,
        result: validPhoneNum("781-548-9900"),
    });
    testResults.push({
        test: 'validPhoneNum("781891-1234") returns false',
        passed: validPhoneNum("781891-1234") === false,
        result: validPhoneNum("781891-1234"),
    });
    testResults.push({
        test: 'validPhoneNum("1234567890") returns true',
        passed: validPhoneNum("1234567890") === true,
        result: validPhoneNum("1234567890"),
    });
    testResults.push({
        test: 'validPhoneNum("12345678904") returns false',
        passed: validPhoneNum("12345678904") === false,
        result: validPhoneNum("12345678904"),
    });
    // XXXXXXXXXX, XXX XXX XXXX, XXX-XXX-XXXX, (XXX) XXX-XXXX, (XXX)-XXX-XXXX
    testResults.push({
        test: 'validPhoneNum("987 654 3210") returns true',
        passed: validPhoneNum("987 654 3210") === true,
        result: validPhoneNum("987 654 3210"),
    });
    testResults.push({
        test: 'validPhoneNum("987 6543210") returns false',
        passed: validPhoneNum("987 6543210") === false,
        result: validPhoneNum("987 6543210"),
    });
    testResults.push({
        test: 'validPhoneNum("(545) 763-2574") returns true',
        passed: validPhoneNum("(545) 763-2574") === true,
        result: validPhoneNum("(545) 763-2574"),
    });
    testResults.push({
        test: 'validPhoneNum("(545)763-2574") returns false',
        passed: validPhoneNum("(545)763-2574") === false,
        result: validPhoneNum("(545)763-2574"),
    });
    testResults.push({
        test: 'validPhoneNum("(333)-454-3658") returns true',
        passed: validPhoneNum("(333)-454-3658") === true,
        result: validPhoneNum("(333)-454-3658"),
    });
    testResults.push({
        test: 'validPhoneNum("(333)-454-/3658") returns false',
        passed: validPhoneNum("(333)-454-/3658") === false,
        result: validPhoneNum("(333)-454-/3658"),
    });
    return testResults;
} 
 runTests();