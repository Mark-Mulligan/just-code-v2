improperCode/
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function called compareObjs.",
        passed: typeof compareObjs === "function",
        result: typeof compareObjs,
    });
    testResults.push({
        test: "Function returns a boolean",
        passed: typeof compareObjs({ name: "test" }, { name: "test" }) === "boolean",
        result: typeof compareObjs({ name: "test" }, { name: "test" }),
    });
    testResults.push({
        test: 'compareObjs({ name: "John", job: "Web Developer" }, { name: "Steve", job: "Welder" }) returns false',
        passed: compareObjs({ name: "John", job: "Web Developer" }, { name: "Steve", job: "Welder" }) === false,
        result: JSON.stringify(compareObjs({ name: "John", job: "Web Developer" }, { name: "Steve", job: "Welder" })),
    });
    testResults.push({
        test: 'compareObjs({ title: "The Witcher", streaming: "Netflix" }, { title: "The Witcher", streaming: "Netflix" })  returns true',
        passed: compareObjs({ title: "The Witcher", streaming: "Netflix" }, { title: "The Witcher", streaming: "Netflix" }) === true,
        result: JSON.stringify(compareObjs({ title: "The Witcher", streaming: "Netflix" }, { title: "The Witcher", streaming: "Netflix" })),
    });
    testResults.push({
        test: 'compareObjs({ favorites: { food: "pizza", color: "green" }, age: 27 }, { age: 27, favorites: {food: "pizza", color: "green" }}) returns true',
        passed: compareObjs({ favorites: { food: "pizza", color: "green" }, age: 27 }, { age: 27, favorites: { food: "pizza", color: "green" } }) === true,
        result: JSON.stringify(compareObjs({ favorites: { food: "pizza", color: "green" }, age: 27 }, { age: 27, favorites: { food: "pizza", color: "green" } })),
    });
    return testResults;
} 
 runTests();