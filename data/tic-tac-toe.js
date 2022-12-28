improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function ticTacToe.",
        passed: typeof ticTacToe === "function",
        result: typeof ticTacToe,
    });
    testResults.push({
        test: "Function returns a string.",
        passed: typeof ticTacToe([
            ["X", "O", "O"],
            ["O", "X", "X"],
            ["X", "X", "O"],
        ]) === "string",
        result: typeof ticTacToe([
            ["X", "O", "O"],
            ["O", "X", "X"],
            ["X", "X", "O"],
        ]),
    });
    testResults.push({
        test: 'ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["X", "O", "O"]]) returns "X wins"',
        passed: ticTacToe([
            ["X", "X", "X"],
            ["O", "O", "X"],
            ["X", "O", "O"],
        ]) === "X wins",
        result: ticTacToe([
            ["X", "X", "X"],
            ["O", "O", "X"],
            ["X", "O", "O"],
        ]),
    });
    testResults.push({
        test: 'ticTacToe([["X", "O", "X"], ["O", "O", "X"], ["", "", "X"]]) returns "X wins"',
        passed: ticTacToe([
            ["X", "O", "X"],
            ["O", "O", "X"],
            ["", "", "X"],
        ]) === "X wins",
        result: ticTacToe([
            ["X", "O", "X"],
            ["O", "O", "X"],
            ["", "", "X"],
        ]),
    });
    testResults.push({
        test: 'ticTacToe([["X", "X", "O"], ["X", "O", ""], ["O", "", ""]]) returns "O wins"',
        passed: ticTacToe([
            ["X", "X", "O"],
            ["X", "O", ""],
            ["O", "", ""],
        ]) === "O wins",
        result: ticTacToe([
            ["X", "X", "O"],
            ["X", "O", ""],
            ["O", "", ""],
        ]),
    });
    testResults.push({
        test: 'ticTacToe([["O", "X", "X"], ["", "O", ""], ["X", "", "O"]]) returns "O wins"',
        passed: ticTacToe([
            ["O", "X", "X"],
            ["", "O", ""],
            ["X", "", "O"],
        ]) === "O wins",
        result: ticTacToe([
            ["O", "X", "X"],
            ["", "O", ""],
            ["X", "", "O"],
        ]),
    });
    testResults.push({
        test: 'ticTacToe([["X", "", "O"], ["X", "O", ""], ["X", "O", "X"]]) returns "X wins"',
        passed: ticTacToe([
            ["X", "", "O"],
            ["X", "O", ""],
            ["X", "O", "X"],
        ]) === "X wins",
        result: ticTacToe([
            ["X", "", "O"],
            ["X", "O", ""],
            ["X", "O", "X"],
        ]),
    });
    testResults.push({
        test: 'ticTacToe([["X", "O", "O"], ["O", "X", "X"], ["X", "X", "O"]]) returns "tie"',
        passed: ticTacToe([
            ["X", "O", "O"],
            ["O", "X", "X"],
            ["X", "X", "O"],
        ]) === "tie",
        result: ticTacToe([
            ["X", "O", "O"],
            ["O", "X", "X"],
            ["X", "X", "O"],
        ]),
    });
    return testResults;
} 
 runTests();