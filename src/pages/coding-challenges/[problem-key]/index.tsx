// React
import { useState } from "react";

// Next
import { NextPage } from "next";
import { GetServerSideProps } from "next";

// Supabase
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

// Resizable
import { Resizable } from "re-resizable";

// Code Mirror
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const CodingExercise: NextPage = () => {
  const [userCode, setUserCode] = useState("");

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
        <h1 className="mb-2 text-2xl font-bold">Sum Two Ints</h1>
        <p className="font-light">
          Create a function that takes in two arguments (num1 & num2 that will
          both be integers) and returns a number that is the sum of the two
          integers provided.
        </p>
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
    },
  };
};

export default CodingExercise;
