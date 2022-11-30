// Next
import { GetServerSideProps } from "next";
import { NextPage } from "next";
import Link from "next/link";

// Supabase
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

const Problems: NextPage = () => {
  return (
    <div className="container mx-auto pt-20">
      <h1 className="mb-2 text-center text-3xl font-bold">Coding Exercises</h1>
      <h6 className="mb-4 text-center">3/35 Completed</h6>
      <ul>
        <li className="card mx-auto mt-16 bg-base-300 shadow-xl">
          <div className="card-body">
            <h4 className="space-between card-title flex items-center justify-between">
              <span>Sum Two Integers</span>
              <div className="badge-outline badge">Not Completed</div>
            </h4>
            <p className="mb-3 font-extralight">
              Create a function that returns the sum of two integers.
            </p>
            <div className="card-actions">
              <Link
                className="btn-primary btn"
                href="/coding-challenges/sum-two-ints"
              >
                Start Challenge
              </Link>
            </div>
          </div>
        </li>
      </ul>
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

export default Problems;
