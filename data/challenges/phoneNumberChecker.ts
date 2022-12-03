// Testing Utils
import { createTestScriptString, extractTestCriteria } from "../utils";

// Custom Types
import { TestResult, CodingChallengeData } from "../../types/customTypes";

const phoneNumberCheckerSolution = `const validPhoneNum = (phoneNum) => {
  // For case where a phone number 10 digits no spaces
  if (phoneNum.length === 10 && typeof Number(phoneNum) === "number") {
    return true;
  }
  
  // works for all scenarios other than 10 digits only
  let phoneNumberRegex = ${/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/};
  return phoneNumberRegex.test(phoneNum);
}`;

const validPhoneNum = (phoneNum: string) => {
  // For case where a phone number 10 digits no spaces
  if (phoneNum.length === 10 && typeof Number(phoneNum) === "number") {
    return true;
  }

  // works for all scenarios other than 10 digits only
  let phoneNumberRegex = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  return phoneNumberRegex.test(phoneNum);
};

const phoneNumberCheckerTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: "User created a function validPhoneNum.",
    passed: typeof validPhoneNum === "function",
    result: typeof validPhoneNum,
  });
  testResults.push({
    test: "Function returns a boolean.",
    passed: typeof validPhoneNum("781-548-9900") === "boolean",
    result: typeof validPhoneNum("781-548-9900"),
  });
  testResults.push({
    test: 'validPhoneNum("781-548-9900") returns true',
    passed: validPhoneNum("781-548-9900") === true,
    result: validPhoneNum("781-548-9900"),
  });
  testResults.push({
    test: 'validPhoneNum("781891-1234") returns false',
    passed: validPhoneNum("781891-1234") === false,
    result: validPhoneNum("781891-1234"),
  });
  testResults.push({
    test: 'validPhoneNum("1234567890") returns true',
    passed: validPhoneNum("1234567890") === true,
    result: validPhoneNum("1234567890"),
  });
  testResults.push({
    test: 'validPhoneNum("12345678904") returns false',
    passed: validPhoneNum("12345678904") === false,
    result: validPhoneNum("12345678904"),
  });
  // XXXXXXXXXX, XXX XXX XXXX, XXX-XXX-XXXX, (XXX) XXX-XXXX, (XXX)-XXX-XXXX
  testResults.push({
    test: 'validPhoneNum("987 654 3210") returns true',
    passed: validPhoneNum("987 654 3210") === true,
    result: validPhoneNum("987 654 3210"),
  });
  testResults.push({
    test: 'validPhoneNum("987 6543210") returns false',
    passed: validPhoneNum("987 6543210") === false,
    result: validPhoneNum("987 6543210"),
  });
  testResults.push({
    test: 'validPhoneNum("(545) 763-2574") returns true',
    passed: validPhoneNum("(545) 763-2574") === true,
    result: validPhoneNum("(545) 763-2574"),
  });
  testResults.push({
    test: 'validPhoneNum("(545)763-2574") returns false',
    passed: validPhoneNum("(545)763-2574") === false,
    result: validPhoneNum("(545)763-2574"),
  });
  testResults.push({
    test: 'validPhoneNum("(333)-454-3658") returns true',
    passed: validPhoneNum("(333)-454-3658") === true,
    result: validPhoneNum("(333)-454-3658"),
  });
  testResults.push({
    test: 'validPhoneNum("(333)-454-/3658") returns false',
    passed: validPhoneNum("(333)-454-/3658") === false,
    result: validPhoneNum("(333)-454-/3658"),
  });

  return testResults;
};

const data: CodingChallengeData = {
  title: "Phone Number Checker",
  description:
    "Create a function that reads a phone number and determines if it is in a valid format.",
  instructions:
    "Create a function called validPhoneNum that takes in a string (phoneNum) and returns boolean of whether or not the provided phone number is in a valid format. Valid formats are: XXXXXXXXXX, XXX XXX XXXX, XXX-XXX-XXXX, (XXX) XXX-XXXX, (XXX)-XXX-XXXX. Phone numbers will not have a 1 extension on the front so should have 10 digits.",
  difficulty: 3,
  testScriptCode: createTestScriptString(phoneNumberCheckerTests),
  startingCode:
    "const validPhoneNum = (phoneNum) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}",
  testCriteria: extractTestCriteria(phoneNumberCheckerTests()),
  problemExplanation:
    "For this problem, you will need to check for a couple of things. First, make sure the input string has 10 digits. Then make sure those 10 digits are separated by an acceptable characters or all together. Remember, valid formats include: XXXXXXXXXX, XXX XXX XXXX, XXX-XXX-XXXX, (XXX) XXX-XXXX, (XXX)-XXX-XXXX",
  hints: [
    "Regex would be useful for this problem",
    `If you don't want to use regex, then you will need to write a way to analyze each character in the provided string.`,
  ],
  solutionCode: phoneNumberCheckerSolution,
};

export default data;
