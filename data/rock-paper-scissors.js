improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function rockPaperScissors.",
        passed: typeof rockPaperScissors === "function",
        result: typeof rockPaperScissors,
    });
    testResults.push({
        test: "Function returns a string.",
        passed: typeof rockPaperScissors("rock") === "string",
        result: typeof rockPaperScissors("rock"),
    });
    testResults.push({
        test: 'rockPaperScissors("rock") returns "paper"',
        passed: rockPaperScissors("rock") === "paper",
        result: rockPaperScissors("rock"),
    });
    testResults.push({
        test: 'rockPaperScissors("paper") returns "scissors"',
        passed: rockPaperScissors("paper") === "scissors",
        result: rockPaperScissors("paper"),
    });
    testResults.push({
        test: 'rockPaperScissors("scissors") returns "rock"',
        passed: rockPaperScissors("scissors") === "rock",
        result: rockPaperScissors("scissors"),
    });
    return testResults;
} 
 runTests();