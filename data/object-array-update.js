improperCode/
const objectsEqual = (x, y) => {
    if (x === y)
        return true;
    if (!(x instanceof Object) || !(y instanceof Object))
        return false;
    if (x.constructor !== y.constructor)
        return false;
    for (var p in x) {
        if (!x.hasOwnProperty(p))
            continue;
        if (!y.hasOwnProperty(p))
            return false;
        if (x[p] === y[p])
            continue;
        if (typeof x[p] !== "object")
            return false;
        if (!objectsEqual(x[p], y[p]))
            return false;
    }
    for (p in y)
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p))
            return false;
    return true;
} 
const arraysEqual = (a1, a2) => {
    if (a1 && a1.length && a2 && a2.length) {
        return (a1.length === a2.length &&
            a1.every((o, idx) => objectsEqual(o, a2[idx])));
    }
    return false;
} 
const runTests = () => {
    const testResults = [];
    testResults.push({
        test: "User created a function update.",
        passed: typeof update === "function",
        result: typeof update,
    });
    testResults.push({
        test: "Function returns an array of objects",
        passed: typeof update([
            { id: 1, name: "superUser" },
            { id: 2, name: "admin" },
            { id: 3, name: "user" },
        ], "id", 2) === "object",
        result: JSON.stringify(update([
            { id: 1, name: "superUser" },
            { id: 2, name: "admin" },
            { id: 3, name: "user" },
        ], "id", 2)),
    });
    testResults.push({
        test: "Function returns object array unchanged if id is not found.",
        passed: arraysEqual(update([
            { id: 1, name: "superUser" },
            { id: 2, name: "admin" },
            { id: 3, name: "user" },
        ], "id", 4), [
            { id: 1, name: "superUser" },
            { id: 2, name: "admin" },
            { id: 3, name: "user" },
        ]),
        result: JSON.stringify(update([
            { id: 1, name: "superUser" },
            { id: 2, name: "admin" },
            { id: 3, name: "user" },
        ], "id", 4)),
    });
    testResults.push({
        test: `update([
      { id: 1, username: "tyrion98" }, 
      { id: 2, username: "bandit73" }, 
      { id: 3, username: "guppy22" }], 
      3, { username: "guppy33" }) 
    returns [
      { id: 1, username: "tyrion98" }, 
      { id: 2, username: "bandit73" }, 
      { id: 3, username: "guppy33" }], `,
        passed: arraysEqual(update([
            { id: 1, username: "tyrion98" },
            { id: 2, username: "bandit73" },
            { id: 3, username: "guppy22" },
        ], 3, { username: "guppy33" }), [
            { id: 1, username: "tyrion98" },
            { id: 2, username: "bandit73" },
            { id: 3, username: "guppy33" },
        ]),
        result: JSON.stringify(update([
            { id: 1, username: "tyrion98" },
            { id: 2, username: "bandit73" },
            { id: 3, username: "guppy22" },
        ], 3, { username: "guppy33" })),
    });
    return testResults;
} 
 runTests();