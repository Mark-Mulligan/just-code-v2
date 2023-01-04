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
import type { AllCodingChallengesData } from '../../../types/customTypes';

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
    <div className="container mx-auto px-2 pt-20">
      <h1 className="mb-2 text-center text-3xl font-bold">Coding Challenges</h1>
      <h6 className="mb-4 text-center">
        {completedChallenges.length}/
        {Object.keys(codingChallengeOverviews).length} Completed
      </h6>
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
