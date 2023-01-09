// Next
import type { GetServerSideProps } from 'next';
import type { NextPage } from 'next';

// Supabase
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Session, User } from '@supabase/auth-helpers-nextjs';

// Coding Challenge Data
import { codingChallengesData } from '../../../data/codingChallengeData';

// Components
import CodingChallengeCard from '../../components/CodingChallengeCard';

// Custom Types
import type { CodingChallengeList } from '../../../types/customTypes';

interface IProps {
  codingChallengeOverviews: CodingChallengeList;
  completedChallenges: string[];
  initialSession: Session;
  user: User;
}

const Problems: NextPage<IProps> = ({
  codingChallengeOverviews,
  completedChallenges,
}) => {
  return (
    <div className="container mx-auto px-2 pt-20">
      <h1 className="mb-2 text-center text-3xl font-bold">Coding Challenges</h1>
      <h6 className="mb-4 text-center">
        {completedChallenges.length}/
        {Object.keys(codingChallengeOverviews).length} Completed
      </h6>
      <div className="mb-4 grid grid-cols-3 gap-x-4">
        <label>
          Search Challenges
          <input
            type="text"
            placeholder="Search..."
            className="input-bordered input mt-1 w-full"
          />
        </label>

        <label>
          Difficulty
          <select className="select-bordered select mt-1 w-full">
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>

        <label>
          Completion Status
          <select className="select-bordered select mt-1 w-full">
            <option>All</option>
            <option>Not Completed</option>
            <option>Completed</option>
          </select>
        </label>
      </div>
      <ul>
        {Object.entries(codingChallengeOverviews).map(([key, value]) => {
          return (
            <CodingChallengeCard
              key={key}
              name={value.title}
              difficulty={value.difficulty}
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
        destination: '/',
        permanent: false,
      },
    };

  const completedChallenges: string[] = [];
  const { data, error, status } = await supabase
    .from('completed_challenges')
    .select('*')
    .eq('user_id', session.user.id);

  if (error) {
    console.log(error);
  }

  if (data && status === 200) {
    for (let i = 0; i < data.length; i++) {
      if (!completedChallenges.includes(data[i]['problem_key'])) {
        completedChallenges.push(data[i]['problem_key']);
      }
    }
  }

  const codingChallengeOverviews: CodingChallengeList = {};
  Object.entries(codingChallengesData).forEach(
    ([challengeKey, challengeData]) => {
      const { title, description, difficulty } = challengeData;
      codingChallengeOverviews[challengeKey] = {
        title,
        description,
        difficulty,
      };
    }
  );

  return {
    props: {
      initialSession: session,
      user: session.user,
      codingChallengeOverviews,
      completedChallenges,
    },
  };
};

export default Problems;
