// React
import React, { useState } from "react";

// Next
import { NextPage } from "next";
import { GetServerSideProps } from "next";

// Supabase
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, User } from "@supabase/auth-helpers-nextjs";

// Code Mirror
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

// Data
import { codingChallengesData } from "../../../../data/codingChallengeData";

// Components
import CodingChallengeInfoPanel from "../../../components/CodingChallengeInfoPanel";

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
    <div className="mt-[64px] flex h-[calc(100vh-4rem)]">
      <CodingChallengeInfoPanel
        userCode={userCode}
        codingChallengeData={codingChallengeData}
      />
      <div
        className="w-full overflow-auto pt-4"
        style={{ background: "#282c34" }}
      >
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
