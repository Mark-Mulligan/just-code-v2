// React
import { useState } from "react";

// Next
import { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

// Supabase
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

// uuid
import { v4 as uuidv4 } from "uuid";

// CodeMirror
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

// Data
import { codingChallengesData } from "../../../../data/codingChallengeData";

// Custom Types
import { IParams, CodingChallengeData } from "../../../../types/customTypes";

interface IProps {
  codingChallengeData: CodingChallengeData;
}

const Help: NextPage<IProps> = ({ codingChallengeData }) => {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [showSolution, setShowSolution] = useState(false);

  const handleShowSolution = () => {
    setShowSolution(true);
  };

  const getUserSolutions = async () => {
    const { problemKey } = router.query;

    if (problemKey) {
      const { data, count, error } = await supabase
        .from("completed_challenges")
        .select("completed_at, solution_code", { count: "exact" })
        .eq("problem_key", problemKey);

      console.log(data);
      console.log(count);
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-16 max-w-3xl pt-4">
      <h1 className=" mb-4 text-center text-4xl font-bold">
        {codingChallengeData.title}
      </h1>
      <section className="mb-4">
        <h2 className="mb-2 text-2xl font-bold">Problem Explanation</h2>
        <p>{codingChallengeData.problemExplanation}</p>
      </section>
      <section className="mb-4">
        <h2 className="mb-2 text-2xl font-bold">Hints</h2>
        <ul>
          {codingChallengeData.hints.map((hint) => {
            return <li key={uuidv4()}>{hint}</li>;
          })}
        </ul>
      </section>
      <section>
        <h2 className="mb-2 text-2xl font-bold">Solution</h2>
        {showSolution ? (
          <div className="mb-4">
            <CodeMirror
              theme={"dark"}
              value={codingChallengeData.solutionCode}
              height="auto"
              editable={false}
              extensions={[javascript({ jsx: true })]}
            />
          </div>
        ) : (
          <button className="btn-primary btn" onClick={handleShowSolution}>
            Show Solution
          </button>
        )}

        {showSolution && (
          <button className="btn-primary btn" onClick={getUserSolutions}>
            View User Solutions
          </button>
        )}
      </section>
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
      codingChallengeData,
    },
  };
};

export default Help;
