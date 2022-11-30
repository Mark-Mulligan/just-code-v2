// React
import React, { useState } from "react";

// Next
import { NextPage } from "next";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

// Supabase
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, User } from "@supabase/auth-helpers-nextjs";

// Axios
import axios from "axios";

// uuid
import { v4 as uuidv4 } from "uuid";

// React icons
import { BsCheckLg } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

// Resizable
import { Resizable } from "re-resizable";

// Code Mirror
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

// Data
import { codingChallengesData } from "../../../../data/codingChallengeData";

// Custom Types
import {
  IParams,
  CodingChallengeData,
  TestResult,
  TestCodeRouteResponse,
} from "../../../../types/customTypes";

interface IProps {
  codingChallengeData: CodingChallengeData;
  initialSession: Session;
  user: User;
}

const CodingExercise: NextPage<IProps> = ({ codingChallengeData }) => {
  const router = useRouter();

  const [userCode, setUserCode] = useState(
    codingChallengeData?.startingCode || ""
  );
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [numTestsPassed, setNumTestsPassed] = useState(0);
  const [overallResult, setOverallResult] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFetchingData(true);
    setErrorMessage("");

    axios
      .post(`/api/testcode/${router.query.problemKey}`, { userCode })
      .then(({ data }: TestCodeRouteResponse) => {
        setTestResults(data.testResults);
        setNumTestsPassed(data.numTestsPassed);
        setOverallResult(data.overallResult);
        setIsFetchingData(false);
        console.log(data);

        if (
          data.overallResult === "passed" &&
          typeof router.query.problemKey === "string"
        ) {
          setShowModal(true);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setErrorMessage(err.response.data.message);
        } else {
          console.log(err);
          setErrorMessage(
            "There was a server error while processing your code. Try again"
          );
        }

        setIsFetchingData(false);
      });
  };

  return (
    <div className="flex h-screen">
      <Resizable
        className="relative z-10 overflow-auto border-r-2 border-base-content px-4 pt-20 pb-6"
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
        defaultSize={{ width: 500, height: "auto" }}
      >
        <form onSubmit={handleCodeSubmit} className="overflow-auto">
          <h1 className="mb-2 text-2xl font-bold">
            {codingChallengeData.title}
          </h1>
          <p className="mb-3 font-light">{codingChallengeData.instructions}</p>
          <h4 className="mb-2 text-xl font-bold">Test Criteria</h4>
          <ul className="mb-4 list-inside list-disc">
            {codingChallengeData.testCriteria.map((item) => {
              return (
                <li className="font-light" key={uuidv4()}>
                  {item}
                </li>
              );
            })}
          </ul>
          <h4 className="mb-2 text-xl font-bold">Test Results</h4>
          <ul className="mb-4">
            {testResults.length === 0 && (
              <li className="mb-4 font-light">
                Submit code to get test results.
              </li>
            )}
            {testResults.map((testResult) => {
              return (
                <li key={uuidv4()} className="mb-4">
                  <code className="flex items-center text-sm">
                    <span className="mr-2">{testResult.test}</span>
                    {testResult.passed ? (
                      <BsCheckLg size={16} fill="green" />
                    ) : (
                      <AiOutlineClose size={22} fill="red" />
                    )}
                  </code>

                  <div>
                    <code className="text-sm">
                      Your code returned --{`>`} {testResult.result}
                    </code>
                  </div>
                </li>
              );
            })}
          </ul>

          {testResults.length > 0 && overallResult === "passed" ? (
            <div className="alert alert-success mb-4 shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  {numTestsPassed} / {testResults.length} Tests Passed.
                </span>
              </div>
            </div>
          ) : (
            <div className="alert alert-error mb-4 shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  {numTestsPassed} / {testResults.length} Tests Passed.
                </span>
              </div>
            </div>
          )}
          <button type="submit" className="btn-primary btn-block btn mb-3">
            Submit Code
          </button>
          <button className="btn-block btn mb-3">Help</button>
          <Link href="/coding-challenges" className="btn-block btn">
            Back To Challenges
          </Link>
        </form>
      </Resizable>
      <div className="w-full pt-[4rem]" style={{ background: "#282c34" }}>
        <CodeMirror
          theme={"dark"}
          value={userCode}
          height="auto"
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            setUserCode(value);
          }}
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { problemKey } = ctx.params as IParams;
  const codingChallengeData = codingChallengesData[problemKey];

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
      codingChallengeData,
    },
  };
};

export default CodingExercise;
