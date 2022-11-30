// React
import { useState } from "react";

// Next
import { NextPage } from "next";
import { GetServerSideProps } from "next";
import Link from "next/link";

// Supabase
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, User } from "@supabase/auth-helpers-nextjs";

// uuid
import { v4 as uuidv4 } from "uuid";

// Resizable
import { Resizable } from "re-resizable";

// Code Mirror
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

// Data
import { codingChallengesData } from "../../../../data/codingChallengeData";

// Custom Types
import { IParams, CodingChallengeData } from "../../../../types/customTypes";

interface IProps {
  codingChallengeData: CodingChallengeData;
  initialSession: Session;
  user: User;
}

const CodingExercise: NextPage<IProps> = ({ codingChallengeData }) => {
  const [userCode, setUserCode] = useState(
    codingChallengeData?.startingCode || ""
  );

  return (
    <div className="flex h-screen">
      <Resizable
        className="relative z-10 border-r-2 border-base-content px-4 pt-20"
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
        <h1 className="mb-2 text-2xl font-bold">{codingChallengeData.title}</h1>
        <p className="mb-3 font-light">{codingChallengeData.instructions}</p>
        <h4 className="mb-2 text-xl font-bold">Test Criteria</h4>
        <ul className="mb-4">
          {codingChallengeData.testCriteria.map((item) => {
            return (
              <li className="font-light" key={uuidv4()}>
                {item}
              </li>
            );
          })}
        </ul>
        <h4 className="mb-2 text-xl font-bold">Test Results</h4>
        <p className="ton-light mb-4">Submit code to get test results.</p>
        <button className="btn-primary btn-block btn mb-3">Submit Code</button>
        <button className="btn-block btn mb-3">Help</button>
        <Link href="/coding-challenges" className="btn-block btn">
          Back To Challenges
        </Link>
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
