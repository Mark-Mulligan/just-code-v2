// Next
import type { NextApiRequest, NextApiResponse } from "next";

// Node Mocks HTTP
import { createRequest, createResponse, RequestOptions } from "node-mocks-http";

// API Route To Test
import apiRoute from "../../src/pages/api/testcode/[testname]";

// Data
import { codingChallengesData } from "../../data/codingChallengeData";

// Custom Types
import { TestResult } from "../../types/customTypes";

type ApiRequest = NextApiRequest & ReturnType<typeof createRequest>;
type APiResponse = NextApiResponse & ReturnType<typeof createResponse>;

describe("/api/testcode/[%s] API Endpoint NOT POST Requests", () => {
  const mockRequestResponse = (options: RequestOptions) => {
    const req = createRequest<ApiRequest>(options);
    const res = createResponse<APiResponse>();
    return { req, res };
  };

  it("A GET request should return a 404 response", async () => {
    const { req, res } = mockRequestResponse({
      method: "GET",
      headers: { "content-type": "application/json" },
      query: { testname: "sum-two-ints" },
    });
    await apiRoute(req, res);

    expect(res.statusCode).toBe(404);
  });

  it("A PUT request should return a 404 response", async () => {
    const { req, res } = mockRequestResponse({
      method: "PUT",
      headers: { "content-type": "application/json" },
      query: { testname: "sum-two-ints" },
      body: {
        userCode: codingChallengesData["sum-two-ints"]?.solutionCode || "",
      },
    });
    await apiRoute(req, res);

    expect(res.statusCode).toBe(404);
  });

  it("A DELETE request should return a 404 response", async () => {
    const { req, res } = mockRequestResponse({
      method: "DELETE",
      headers: { "content-type": "application/json" },
      query: { testname: "sum-two-ints" },
      body: {
        userCode: codingChallengesData["sum-two-ints"]?.solutionCode || "",
      },
    });
    await apiRoute(req, res);

    expect(res.statusCode).toBe(404);
  });
});

describe.each(Object.keys(codingChallengesData))(
  `/api/testcode/[%s] API Endpoint POST Requests`,
  (dataKey) => {
    jest.setTimeout(30000);
    const mockRequestResponse = (options: RequestOptions) => {
      const req = createRequest<ApiRequest>(options);
      const res = createResponse<APiResponse>();
      return { req, res };
    };

    it("should return a successful response", async () => {
      const { req, res } = mockRequestResponse({
        method: "POST",
        headers: { "content-type": "application/json" },
        query: { testname: dataKey },
        body: { userCode: codingChallengesData[dataKey]?.solutionCode || "" },
      });
      await apiRoute(req, res);

      expect(res.statusCode).toBe(200);
    });

    it("provided solution should pass all tests for challenge", async () => {
      const { req, res } = mockRequestResponse({
        method: "POST",
        headers: { "content-type": "application/json" },
        query: { testname: dataKey },
        body: { userCode: codingChallengesData[dataKey]?.solutionCode || "" },
      });
      await apiRoute(req, res);

      const data = res._getJSONData();
      expect(data).toHaveProperty("testResults");

      data.testResults.forEach((testResult: TestResult) => {
        expect(testResult.passed).toBe(true);
      });
    });

    it("should fail to compile with improper code", async () => {
      const { req, res } = mockRequestResponse({
        method: "POST",
        headers: { "content-type": "application/json" },
        query: { testname: dataKey },
        body: { userCode: `askeil/` },
      });

      await apiRoute(req, res);
      const data = res._getJSONData();
      expect(res.statusCode).toBe(400);
      expect(data).toHaveProperty("message");
    });
  }
);
