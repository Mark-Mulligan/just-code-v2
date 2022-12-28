improperCode/
const checkArrContents = (inputArr) => {
    let hasNumbers = false;
    let hasStrings = false;
    if (!Array.isArray(inputArr)) {
        return { passed: false, message: "Function did not return an array." };
    }
    else if (inputArr.length !== 100) {
        return {
            passed: false,
            message: "Return array did not contain 100 values",
        };
    }
    for (let i = 0; i < inputArr.length; i++) {
        if (typeof inputArr[i] === "number")
            hasNumbers = true;
        if (typeof inputArr[i] === "string")
            hasStrings = true;
        if (hasNumbers && hasStrings) {
            break;
        }
    }
    if (hasNumbers && hasStrings) {
        return {
            passed: true,
            message: "Funtion returns an array containing 100 values with numbers and strings.",
        };
    }
    else if (!hasNumbers) {
        return { passed: false, message: "Return array does not have numbers." };
    }
    else if (!hasStrings) {
        return { passed: false, message: "Return array does not have strings." };
    }
    else {
        return {
            passed: false,
            message: "Return array does not have numbers or strings.",
        };
    }
} 
const formatFizzBuzzResult = (fizzBuzzResult) => {
    let result = "[";
    fizzBuzzResult.forEach((item, index) => {
        result += ` ${item},`;
        if (index % 10 === 9 && index !== 99) {
            result += "\n";
        }
    });
    return `${result}]`;
} 
const areArraysEqual = (arr1, arr2) => {
    let result = true;
    if (Array.isArray(arr1) &&
        Array.isArray(arr2) &&
        arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                result = false;
                break;
            }
        }
    }
    else {
        result = false;
    }
    return result;
} 
const runTests = () => {
    const fizzBuzzResult = [
        1,
        2,
        "fizz",
        4,
        "buzz",
        "fizz",
        7,
        8,
        "fizz",
        "buzz",
        11,
        "fizz",
        13,
        14,
        "fizzbuzz",
        16,
        17,
        "fizz",
        19,
        "buzz",
        "fizz",
        22,
        23,
        "fizz",
        "buzz",
        26,
        "fizz",
        28,
        29,
        "fizzbuzz",
        31,
        32,
        "fizz",
        34,
        "buzz",
        "fizz",
        37,
        38,
        "fizz",
        "buzz",
        41,
        "fizz",
        43,
        44,
        "fizzbuzz",
        46,
        47,
        "fizz",
        49,
        "buzz",
        "fizz",
        52,
        53,
        "fizz",
        "buzz",
        56,
        "fizz",
        58,
        59,
        "fizzbuzz",
        61,
        62,
        "fizz",
        64,
        "buzz",
        "fizz",
        67,
        68,
        "fizz",
        "buzz",
        71,
        "fizz",
        73,
        74,
        "fizzbuzz",
        76,
        77,
        "fizz",
        79,
        "buzz",
        "fizz",
        82,
        83,
        "fizz",
        "buzz",
        86,
        "fizz",
        88,
        89,
        "fizzbuzz",
        91,
        92,
        "fizz",
        94,
        "buzz",
        "fizz",
        97,
        98,
        "fizz",
        "buzz",
    ];
    const testResults = [];
    testResults.push({
        test: "User created a function called fizzBuzz.",
        passed: typeof fizzBuzz === "function",
        result: typeof fizzBuzz,
    });
    testResults.push({
        test: "Function returns an array.",
        passed: Array.isArray(fizzBuzz()),
        result: JSON.stringify(fizzBuzz()),
    });
    testResults.push({
        test: "The returned array contains numbers and strings and has a length of 100.",
        passed: checkArrContents(fizzBuzz()).passed,
        result: checkArrContents(fizzBuzz()).message,
    });
    testResults.push({
        test: `fizzBuzz() returns \n ${formatFizzBuzzResult(fizzBuzzResult)}`,
        passed: areArraysEqual(fizzBuzz(), fizzBuzzResult),
        result: formatFizzBuzzResult(fizzBuzz()),
    });
    return testResults;
} 
 runTests();