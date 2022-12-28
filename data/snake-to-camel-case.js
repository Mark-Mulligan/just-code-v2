improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function called snakeToCamel.",
        passed: typeof snakeToCamel === "function",
        result: typeof snakeToCamel,
    });
    testResults.push({
        test: "Function returns a string",
        passed: typeof snakeToCamel("python_style") === "string",
        result: typeof snakeToCamel("python_style"),
    });
    testResults.push({
        test: 'snakeToCamel("python_style") returns "pythonStyle"',
        passed: snakeToCamel("python_style") === "pythonStyle",
        result: snakeToCamel("python_style"),
    });
    testResults.push({
        test: 'snakeToCamel("did_you_use_regex") returns "didYouUseRegex"',
        passed: snakeToCamel("did_you_use_regex") === "didYouUseRegex",
        result: snakeToCamel("did_you_use_regex"),
    });
    testResults.push({
        test: 'snakeToCamel("what_about_stack_overflow") returns "pythonStyle"',
        passed: snakeToCamel("what_about_stack_overflow") === "whatAboutStackOverflow",
        result: snakeToCamel("what_about_stack_overflow"),
    });
    testResults.push({
        test: 'snakeToCamel("Bad_ExAMPle_Of_SnakE_Case") returns "badExampleOfSnakeCase"',
        passed: snakeToCamel("Bad_ExAMPle_Of_SnakE_Case") === "badExampleOfSnakeCase",
        result: snakeToCamel("Bad_ExAMPle_Of_SnakE_Case"),
    });
    return testResults;
} 
 runTests();