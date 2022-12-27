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
import { BsGithub, BsGoogle } from "react-icons/bs";

const Home: NextPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    console.log(data, error);
  };

  useEffect(() => {
    if (session) {
      if (typeof window !== "undefined") {
        router.push("/coding-challenges");
      }
    }
  }, [session]);

  return (
    <div className="container mx-auto">
      {!session ? (
        <div className="card mx-auto mt-16 max-w-lg bg-base-300 px-10 py-16 shadow-xl">
          <h1 className="mb-4 text-center text-5xl font-bold">Just Code</h1>
          <p className="text-center font-light">
            Straight forward javascript challenges to help you level up your
            coding skills.
          </p>
          <div className="divider" />
          <button
            onClick={signInWithGithub}
            className="btn-block btn mb-3 gap-2"
          >
            <BsGithub size={20} />
            Sign In With Github
          </button>
          <button onClick={signInWithGoogle} className="btn-block btn gap-2">
            <BsGoogle size={20} />
            Sign In With Google
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
