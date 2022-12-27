const deleteOne = (objArray, targetKey, targetValue) => {
  // Add Code Below
  return objArray.filter(item => item[targetKey] !== targetValue);

  // Add Code Above
}
const deepEqual = function deepEqual(val1, val2) {
    if (val1 === undefined || val2 === undefined || val1 === null || val2 === null) {
        return val1 === val2;
    }
    if (val1 === val2) return true;
    if (typeof val1 !== typeof val2) return false;
    if (typeof val1 === "object") {
        if (Object.keys(val1).length !== Object.keys(val2).length) {
            return false;
        }
        for (const key of Object.keys(val1)){
            if (!deepEqual(val1[key], val2[key])) {
                return false;
            }
        }
        return true;
    }
    return false;
} 
const arraysEqual = (a1, a2)=>{
    if (a1 && a1.length && a2 && a2.length) {
        return a1.length === a2.length && a1.every((o, idx)=>deepEqual(o, a2[idx]));
    }
    return false;
} 
const runTests = ()=>{
    const testResults = [];
    testResults.push({
        test: "User created a function deleteOne.",
        passed: typeof deleteOne === "function",
        result: typeof deleteOne
    });
    testResults.push({
        test: "Function returns an Object if target key and target value are found",
        passed: typeof deleteOne([
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
        result: JSON.stringify(deleteOne([
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
        test: `deleteOne([
      { id: 1, name: "superUser" }, 
      { id: 2, name: "admin" }, 
      { id: 3, name: "user" }], 
      "id", 2) 
    returns { id: 2, name: "admin" }`,
        passed: arraysEqual(deleteOne([
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
        ], "id", 2), [
            {
                id: 1,
                name: "superUser"
            },
            {
                id: 3,
                name: "user"
            }
        ]),
        result: JSON.stringify(deleteOne([
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
        test: `deleteOne([
      { id: 1, name: "superUser" }, 
      { id: 2, name: "admin" }, 
      { id: 3, name: "user" }], 
      "id", 4);
    returns [
      { id: 1, name: "superUser" }, 
      { id: 2, name: "admin" }, 
      { id: 3, name: "user" }]`,
        passed: arraysEqual(deleteOne([
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
        ], "id", 4), [
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
        ]),
        result: JSON.stringify(deleteOne([
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
        test: `deleteOne([{ state: "tx" }, { state: "ny" }, { state: "ca" }, { state: "nm" }],
      "state",
      "tx"
    ) returns { state: "tx" }`,
        passed: arraysEqual(deleteOne([
            {
                state: "tx"
            },
            {
                state: "ny"
            },
            {
                state: "ca"
            },
            {
                state: "nm"
            }
        ], "state", "tx"), [
            {
                state: "ny"
            },
            {
                state: "ca"
            },
            {
                state: "nm"
            }
        ]),
        result: JSON.stringify(deleteOne([
            {
                state: "tx"
            },
            {
                state: "ny"
            },
            {
                state: "ca"
            },
            {
                state: "nm"
            }
        ], "state", "tx"))
    });
    return testResults;
} 
 runTests();