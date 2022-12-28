improperCode/
const isPrimitive = function isPrimitive(obj) {
    return obj !== Object(obj);
} 
const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2)
        return true;
    if (isPrimitive(obj1) && isPrimitive(obj2))
        return obj1 === obj2;
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
    for (let key in obj1) {
        if (!(key in obj2))
            return false;
        if (!deepEqual(obj1[key], obj2[key]))
            return false;
    }
    return true;
} 
const runTests = () => {
    // used to test if object in function is a new object
    const obj1 = { state: "TX", address: "1234 Storyboard ln" };
    const obj2 = { zip: "12345" };
    const testResults = [];
    testResults.push({
        test: "User created a function combineTwoObjs.",
        passed: typeof combineTwoObjs === "function",
        result: typeof combineTwoObjs,
    });
    testResults.push({
        test: "Function returns an Object.",
        passed: typeof combineTwoObjs(obj1, obj2) === "object",
        result: typeof combineTwoObjs(obj1, obj2),
    });
    testResults.push({
        test: "Function returns a new object, not a copy of either object in the arguments to the function.",
        passed: combineTwoObjs(obj1, obj2) !== obj1 &&
            combineTwoObjs(obj1, obj2) !== obj2,
        result: JSON.stringify(combineTwoObjs(obj1, obj2)),
    });
    testResults.push({
        test: `combineTwoObjs({ state: 'TX', address: '1234 Storyboard ln' }, { zip: '12345' }) returns
    {
      state: 'TX',
      address: '1234 Storyboard ln',
      zip: '12345',
    }`,
        passed: deepEqual(combineTwoObjs({ state: "TX", address: "1234 Storyboard ln" }, { zip: "12345" }), {
            state: "TX",
            address: "1234 Storyboard ln",
            zip: "12345",
        }),
        result: JSON.stringify(combineTwoObjs({ state: "TX", address: "1234 Storyboard ln" }, { zip: "12345" })),
    });
    testResults.push({
        test: `combineTwoObjs({ movie: 'Batman Begins' }, { director: 'Christopher Nolan', releaseDate: '06-15-2005' }) returns { 1: 2, 2: 1, 3: 3, 4: 1 }`,
        passed: deepEqual(combineTwoObjs({ movie: "Batman Begins" }, { director: "Christopher Nolan", releaseDate: "06-15-2005" }), {
            movie: "Batman Begins",
            director: "Christopher Nolan",
            releaseDate: "06-15-2005",
        }),
        result: JSON.stringify(combineTwoObjs({ movie: "Batman Begins" }, { director: "Christopher Nolan", releaseDate: "06-15-2005" })),
    });
    return testResults;
} 
 runTests();