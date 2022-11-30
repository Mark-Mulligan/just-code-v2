import { NextParsedUrlQuery } from "next/dist/server/request-meta";

export type CodingChallengeOverview = {
  title: string;
  description: string;
  instructions: string;
  testScriptCode: string;
  startingCode: string;
  testCriteria: string[];
  problemExplanation: string;
  hints: string[];
  solutionCode: string;
};

export type AllChallengesOverviewData = {
  [key: string]: CodingChallengeOverview;
};

export type TestResult = {
  test: string;
  passed: boolean;
  result: any;
};

export interface IParams extends NextParsedUrlQuery {
  problemKey: string;
}

export type TestCodeRouteResponse = {
  status: number;
  data: {
    testResults: TestResult[];
    numTestsPassed: number;
    numTestsFailed: number;
    overallResult: string;
  };
};

export type CodingExerciseStaticPath = {
  params: {
    problemKey: string;
  };
};

export interface CodingChallengeData {
  [key: string]: CodingChallengeOverview;
}
