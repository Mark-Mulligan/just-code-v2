const findOne = (objArray, targetKey, targetValue) => {
  return objArray.find((object) => {
    return object[targetKey] === targetValue;
  });
};
const object_equals = (x, y)=>{
    if (x === y) return true;
    if (!(x instanceof Object) || !(y instanceof Object)) return false;
    if (x.constructor !== y.constructor) return false;
    for(var p in x){
        if (!x.hasOwnProperty(p)) continue;
        if (!y.hasOwnProperty(p)) return false;
        if (x[p] === y[p]) continue;
        if (typeof x[p] !== "object") return false;
        if (!object_equals(x[p], y[p])) return false;
    }
    for(p in y)if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
    return true;
} 
const runTests = ()=>{
    const testResults = [];
    testResults.push({
        test: "User created a function findOne.",
        passed: typeof findOne === "function",
        result: typeof findOne
    });
    testResults.push({
        test: "Function returns an Object if target key and target value are found",
        passed: typeof findOne([
            {
                id: 1,
                name: "superUser"
            },
            {
                id: 2,
                name: "admin"
            },
            {
                id: 3,
                name: "user"
            }
        ], "id", 2) === "object",
        result: JSON.stringify(findOne([
            {
                id: 1,
                name: "superUser"
            },
            {
                id: 2,
                name: "admin"
            },
            {
                id: 3,
                name: "user"
            }
        ], "id", 2))
    });
    testResults.push({
        test: "Function returns undefined if target key and target value are not found",
        passed: findOne([
            {
                id: 1,
                name: "superUser"
            },
            {
                id: 2,
                name: "admin"
            },
            {
                id: 3,
                name: "user"
            }
        ], "id", 4) === undefined,
        result: JSON.stringify(findOne([
            {
                id: 1,
                name: "superUser"
            },
            {
                id: 2,
                name: "admin"
            },
            {
                id: 3,
                name: "user"
            }
        ], "id", 4))
    });
    testResults.push({
        test: `findOne([{ id: 1, name: "superUser" }, { id: 2, name: "admin" }, { id: 3, name: "user" }], "id", 2);`,
        passed: object_equals(findOne([
            {
                id: 1,
                name: "superUser"
            },
            {
                id: 2,
                name: "admin"
            },
            {
                id: 3,
                name: "user"
            }
        ], "id", 2), {
            id: 2,
            name: "admin"
        }),
        result: JSON.stringify(findOne([
            {
                id: 1,
                name: "superUser"
            },
            {
                id: 2,
                name: "admin"
            },
            {
                id: 3,
                name: "user"
            }
        ], "id", 2))
    });
    testResults.push({
        test: `findOne([{ id: 1, name: "superUser" }, { id: 2, name: "admin" }, { id: 3, name: "user" }], "id", 4);`,
        passed: findOne([
            {
                id: 1,
                name: "superUser"
            },
            {
                id: 2,
                name: "admin"
            },
            {
                id: 3,
                name: "user"
            }
        ], "id", 4) === undefined,
        result: JSON.stringify(findOne([
            {
                id: 1,
                name: "superUser"
            },
            {
                id: 2,
                name: "admin"
            },
            {
                id: 3,
                name: "user"
            }
        ], "id", 4))
    });
    return testResults;
} 
 runTests();