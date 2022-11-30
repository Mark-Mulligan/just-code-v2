// Next
import { GetServerSideProps } from "next";
import { NextPage } from "next";
import { useRouter } from "next/router";

// Supabase
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const Problems: NextPage = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();

  const handleSignOut = async () => {
    console.log("this ran");
    const { error } = await supabase.auth.signOut();

    if (!error && typeof window !== "undefined") {
      router.push("/");
    } else {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Problems Page</h1>
      <button onClick={handleSignOut}>Sign Out</button>
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

  console.log("problems 2 page session", session);

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

export default Problems;
