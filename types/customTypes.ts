import { type NextParsedUrlQuery } from 'next/dist/server/request-meta';

export type DifficultyLevel = 1 | 2 | 3; // 1 Easy, 2 Medium, 3 Hard

export type CodingChallengeData = {
  title: string;
  description: string;
  instructions: string;
  difficulty: DifficultyLevel;
  testScriptCode: string;
  startingCode: string;
  testCriteria: string[];
  problemExplanation: string;
  hints: string[];
  solutionCode: string;
};

export type CodingChallengeOverviewData = {
  challengeKey: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  completed: boolean;
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

export interface AllCodingChallengesData {
  [key: string]: CodingChallengeData;
}

export interface UserSolution {
  completed_at: string;
  solution_code: string;
}

export interface CustomTest {
  testDescription: string;
  passed: string;
  result: string;
  customVariables?: string[];
}
