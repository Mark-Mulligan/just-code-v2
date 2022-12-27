// React
import React, { useState, FC } from "react";

// Next
import Link from "next/link";
import { useRouter } from "next/router";

// Supabase
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

// axios
import axios from "axios";

// Resizable
import { Resizable } from "re-resizable";

// Icons
import { BsFillCheckCircleFill } from "react-icons/bs";

// Components
import TestCriteriaList from "./TestCriteriaList";
import TestResultsList from "./TestResultsList";
import TestResultBadge from "./TestResultBadge";

// Custom Types
import {
  CodingChallengeData,
  TestResult,
  TestCodeRouteResponse,
} from "../../types/customTypes";

interface IProps {
  codingChallengeData: CodingChallengeData;
  userCode: string;
}

const CodingChallengeInfoPanel: FC<IProps> = ({
  codingChallengeData,
  userCode,
}) => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [numTestsPassed, setNumTestsPassed] = useState(0);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      return;
    }

    setIsFetchingData(true);
    setErrorMessage("");
    const problemKey = router.query.problemKey;

    try {
      const { data } = await axios.post(`/api/testcode/${problemKey}`, {
        userCode,
      });
      setTestResults(data.testResults);
      setNumTestsPassed(data.numTestsPassed);

      if (data.overallResult === "passed" && typeof problemKey === "string") {
        const { error, status } = await supabase
          .from("completed_challenges")
          .insert({
            problem_key: problemKey,
            user_id: user.id,
            solution_code: userCode,
          });

        setShowModal(true);
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        setErrorMessage(err.response.data.message);
        setTestResults([]);
      } else {
        console.log(err);
        setErrorMessage(
          "There was a server error while processing your code. Try again"
        );
      }
    }

    setIsFetchingData(false);
  };

  return (
    <Resizable
      className="relative z-10 overflow-auto border-r-2 border-base-content px-4 pt-4 pb-6"
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
      {isFetchingData && (
        <div className="fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          <div>
            <p className="text-center">Running Tests</p>
            <progress className="progress progress-info h-1.5 w-56" />
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          <div>
            <BsFillCheckCircleFill
              size={50}
              color="white"
              className="m-auto mb-4"
            />
            <h2 className="text-bold mb-8 text-center text-3xl text-white">
              All Tests Passed!
            </h2>
            <button
              className="btn-outline btn mr-4"
              onClick={() => setShowModal(false)}
            >
              Stay Here
            </button>
            <Link
              href={`/coding-challenges#${router.query.problemKey}`}
              className="btn-primary btn"
            >
              More Challenges
            </Link>
          </div>
        </div>
      )}

      <form onSubmit={handleCodeSubmit} className="relative overflow-auto">
        <h1 className="mb-2 text-2xl font-bold">{codingChallengeData.title}</h1>
        <p className="mb-3 font-light">{codingChallengeData.instructions}</p>

        <h4 className="mb-2 text-xl font-bold">Test Criteria</h4>
        <TestCriteriaList testCriteria={codingChallengeData.testCriteria} />

        <h4 className="mb-2 text-xl font-bold">Test Results</h4>
        <TestResultsList testResults={testResults} />
        <TestResultBadge
          numTests={testResults.length}
          numTestsPassed={numTestsPassed}
          errorMessage={errorMessage}
        />
        <button type="submit" className="btn-primary btn-block btn mb-3">
          Submit Code
        </button>
        <a
          href={`${router.asPath}/help`}
          target="_blank"
          rel="noreferrer"
          className="btn-block btn mb-3"
        >
          Help
        </a>

        <Link
          href={`/coding-challenges#${router.query.problemKey}`}
          className="btn-block btn"
        >
          Back To Challenges
        </Link>
      </form>
    </Resizable>
  );
};

export default CodingChallengeInfoPanel;
