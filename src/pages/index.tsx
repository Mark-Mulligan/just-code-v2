// React
import { useEffect } from "react";

// Next
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

// Supabase
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

// React-icons
import { BsGithub } from "react-icons/bs";

const Home: NextPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    console.log("data", data);
  };

  useEffect(() => {
    if (session) {
      if (typeof window !== "undefined") {
        router.push("/problems");
      }
    }
  }, [session]);

  return (
    <div className="container mx-auto">
      {!session ? (
        <div className="card mx-auto mt-16 max-w-lg bg-base-300 px-10 py-20 shadow-xl">
          <h1 className="mb-8 text-center text-5xl font-bold">Just Code</h1>
          <button onClick={signInWithGithub} className="btn-block btn gap-2">
            <BsGithub size={20} />
            Sign In With Github
          </button>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Home;
