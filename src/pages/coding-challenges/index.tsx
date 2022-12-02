// Next
import { GetServerSideProps } from "next";
import { NextPage } from "next";

// Supabase
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, User } from "@supabase/auth-helpers-nextjs";

// Coding Challenge Data
import { codingChallengesData } from "../../../data/codingChallengeData";

// Components
import CodingChallengeCard from "../../components/CodingChallengeCard";

// Custom Types
import {
  AllCodingChallengesData,
  CodingChallengeData,
} from "../../../types/customTypes";

interface IProps {
  codingChallengeOverviews: AllCodingChallengesData;
  completedChallenges: string[];
  initialSession: Session;
  user: User;
}

const Problems: NextPage<IProps> = ({
  codingChallengeOverviews,
  completedChallenges,
}) => {
  return (
    <div className="container mx-auto pt-20">
      <h1 className="mb-2 text-center text-3xl font-bold">Coding Challenges</h1>
      <h6 className="mb-4 text-center">3/35 Completed</h6>
      <ul>
        {Object.entries(codingChallengeOverviews).map(([key, value]) => {
          return (
            <CodingChallengeCard
              key={key}
              name={value.title}
              description={value.description}
              challengeKey={key}
              completed={completedChallenges.includes(key)}
            />
          );
        })}
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

  const completedChallenges: string[] = [];
  const { data, error, status } = await supabase
    .from("completed_challenges")
    .select("*")
    .eq("user_id", session.user.id);

  if (data && status === 200) {
    for (let i = 0; i < data.length; i++) {
      if (!completedChallenges.includes(data[i]["problem_key"])) {
        completedChallenges.push(data[i]["problem_key"]);
      }
    }
  }

  return {
    props: {
      initialSession: session,
      user: session.user,
      codingChallengeOverviews: codingChallengesData,
      completedChallenges,
    },
  };
};

export default Problems;
