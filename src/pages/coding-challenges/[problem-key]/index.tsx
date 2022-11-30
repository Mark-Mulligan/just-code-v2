// Next
import { NextPage } from "next";
import { GetServerSideProps } from "next";

// Supabase
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

const CodingExercise: NextPage = () => {
  return (
    <div className="pt-20">
      <h1>Coding Exercise</h1>
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
