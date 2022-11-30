// Next
import type { NextApiRequest, NextApiResponse } from "next";

// Node FS
// import fs from 'fs';

// VM2
import { VM } from "vm2";

// Data
import { codingChallengesData } from "../../../../data/codingChallengeData";

// Custom Types
import { TestResult } from "../../../../types/customTypes";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const vm = new VM({ timeout: 1000, sandbox: {} });
  const testname = req.query.testname as string;

  if (req.method === "POST") {
    const { userCode } = req.body;

    let codingChallengeData = codingChallengesData[testname];

    if (!codingChallengeData) {
      res.status(404);
      return;
    }

    // get test script to add to user input
    let testScriptCode = codingChallengeData.testScriptCode;
    let testResults = [] as TestResult[];

    // for developer de-bugging purposes
    // Don't remove but also don't push to prod.  It will break in prod environment
    // fs.writeFileSync(`data/${testname}.js`, `${userCode}\n${testScriptCode}`);
    //fs.writeFileSync(`data/${testname}.txt`, testScriptCode);

    try {
      testResults = vm.run(`${userCode}\n${testScriptCode}`);
    } catch (err: any) {
      // console.log('err', err);
      res
        .status(400)
        .json({ message: `${err.message}. Code failed to compile.` });
      return;
    }

    let numTestsPassed = 0;
    testResults.forEach((test) => {
      if (test.passed === true) {
        numTestsPassed++;
      }
    });

    const overallResult =
      testResults.length === numTestsPassed ? "passed" : "failed";

    res.status(200).json({ testResults, numTestsPassed, overallResult });
  } else {
    res.status(404);
  }
};

export default handler;
