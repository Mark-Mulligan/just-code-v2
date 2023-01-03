const findThanksgivingDate = (year) => {
  // Add Code Below
  let numberOfThursdays = 0;
  let thanksgivingDate;

  for (let day = 1; day < 31; day++) {
    let date = new Date(`11-${day}-${year}`);

    if (date.getDay() === 4) {
      numberOfThursdays++;
    }

    if (numberOfThursdays === 4) {
      thanksgivingDate = date;
      break;
    }
  }

  return thanksgivingDate;

  // Add Code Above
}
function areEqual(arg1, arg2) {
  if (
    (arg1 === null && arg2 === null) ||
    (arg1 === undefined && arg2 === undefined)
  ) {
    return true;
  }

  if (typeof arg1 !== typeof arg2) {
    return false;
  }

  if (
    typeof arg1 === "string" ||
    typeof arg1 === "number" ||
    typeof arg1 === "boolean" ||
    arg1 instanceof Date
  ) {
    return arg1.toString() === arg2.toString();
  }

  if (Array.isArray(arg1) || typeof arg1 === "object") {
    if (Object.keys(arg1).length !== Object.keys(arg2).length) {
      return false;
    }

    for (const key in arg1) {
      if (!areEqual(arg1[key], arg2[key])) {
        return false;
      }
    }

    return true;
  }
};

  const runTests = () => {
    const testResults = [];
    testResults.push({ test: `User created a function called findThanksgivingDate`, passed: typeof findThanksgivingDate === "function", result: typeof findThanksgivingDate})
testResults.push({ test: `findThanksgivingDate(2022) returns a date`, passed: findThanksgivingDate(2022) instanceof Date, result: 'Thu Nov 24 2022 00:00:00 GMT-0600 (Central Standard Time)'})
testResults.push({ test: `findThanksgivingDate(2022) returns Thu Nov 24 2022 00:00:00 GMT-0600 (Central Standard Time)`, passed: areEqual(findThanksgivingDate(2022), new Date('Thu Nov 24 2022 00:00:00 GMT-0600 (Central Standard Time)')), result: 'Thu Nov 24 2022 00:00:00 GMT-0600 (Central Standard Time)'})
testResults.push({ test: `findThanksgivingDate(1980) returns Thu Nov 27 1980 00:00:00 GMT-0600 (Central Standard Time)`, passed: areEqual(findThanksgivingDate(1980), new Date('Thu Nov 27 1980 00:00:00 GMT-0600 (Central Standard Time)')), result: 'Thu Nov 27 1980 00:00:00 GMT-0600 (Central Standard Time)'})
testResults.push({ test: `findThanksgivingDate(1995) returns Thu Nov 23 1995 00:00:00 GMT-0600 (Central Standard Time)`, passed: areEqual(findThanksgivingDate(1995), new Date('Thu Nov 23 1995 00:00:00 GMT-0600 (Central Standard Time)')), result: 'Thu Nov 23 1995 00:00:00 GMT-0600 (Central Standard Time)'})
testResults.push({ test: `findThanksgivingDate(2030) returns Thu Nov 28 2030 00:00:00 GMT-0600 (Central Standard Time)`, passed: areEqual(findThanksgivingDate(2030), new Date('Thu Nov 28 2030 00:00:00 GMT-0600 (Central Standard Time)')), result: 'Thu Nov 28 2030 00:00:00 GMT-0600 (Central Standard Time)'})

    return testResults;
  }

  runTests()