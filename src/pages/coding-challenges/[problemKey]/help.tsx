// React
import { useState } from 'react';

// Next
import type { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Supabase
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

// uuid
import { v4 as uuidv4 } from 'uuid';

// CodeMirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

// date-fns
import { format } from 'date-fns';

// Data
import { codingChallengesData } from '../../../../data/codingChallengeData';

// Custom Types
import type {
  IParams,
  CodingChallengeData,
  UserSolution,
} from '../../../../types/customTypes';
import type { Database } from '../../../../types/database';

interface IProps {
  codingChallengeData: CodingChallengeData;
}

const Help: NextPage<IProps> = ({ codingChallengeData }) => {
  const supabase = useSupabaseClient<Database>();
  const router = useRouter();
  const [showSolution, setShowSolution] = useState(false);
  const [userSolutions, setUserSolutions] = useState<UserSolution[]>([]);
  const [userSolutionsCount, setUserSolutionsCount] = useState(0);
  const [currentRange, setCurrentRange] = useState({ from: 0, to: 9 });

  const handleShowSolution = async () => {
    setShowSolution(true);
    const result = await getUserSolutions(currentRange.from, currentRange.to);

    if (!result) {
      console.log('Could not load user solutions');
      return;
    }

    if (result.data && result.count) {
      setUserSolutions(result.data);
      setUserSolutionsCount(result.count);
    }
  };

  const getUserSolutions = async (from: number, to: number) => {
    const { problemKey } = router.query;

    if (problemKey) {
      const { data, count, error } = await supabase
        .from('completed_challenges')
        .select('completed_at, solution_code', { count: 'exact' })
        .eq('problem_key', problemKey)
        .range(from, to)
        .order('completed_at', { ascending: false });

      return { data, count, error };
    }
  };

  const loadMoreSolutions = async () => {
    const from = currentRange.from + 10;
    const to =
      currentRange.to + 10 < userSolutionsCount
        ? currentRange.to + 10
        : userSolutionsCount;

    const newRange = { from, to };
    const result = await getUserSolutions(newRange.from, newRange.to);

    if (!result) {
      console.log('Could not load user solutions');
      return;
    }

    if (result.data) {
      setUserSolutions([...userSolutions, ...result.data]);
      setCurrentRange(newRange);
    }
  };

  return (
    <>
      <Head>
        <title>Just Code - {codingChallengeData.title} help</title>
        <meta
          name="description"
          content={codingChallengeData.problemExplanation}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Just Code - ${codingChallengeData.title}`}
        />
        <meta
          property="og:description"
          content={codingChallengeData.problemExplanation}
        />
        <meta
          property="og:url"
          content={`https://just-code.vercel.app/coding-challenges/`}
        />
        <meta property="og:site_name" content="Just Code" />
      </Head>
      <div className="container mx-auto mt-16 max-w-3xl px-4 pt-4">
        <h1 className=" mb-4 text-center text-4xl font-bold">
          {codingChallengeData.title}
        </h1>
        <section className="mb-4">
          <h2 className="mb-2 text-2xl font-bold">Problem Explanation</h2>
          <p>{codingChallengeData.problemExplanation}</p>
        </section>
        <section className="mb-4">
          <h2 className="mb-2 text-2xl font-bold">Hints</h2>
          <ul>
            {codingChallengeData.hints.map((hint) => {
              return <li key={uuidv4()}>{hint}</li>;
            })}
          </ul>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-bold">Solution</h2>
          {showSolution ? (
            <div className="mb-8">
              <CodeMirror
                theme={'dark'}
                value={codingChallengeData.solutionCode}
                height="auto"
                editable={false}
                extensions={[javascript({ jsx: true })]}
              />
            </div>
          ) : (
            <button className="btn-primary btn" onClick={handleShowSolution}>
              Show Solution
            </button>
          )}

          {userSolutions.length > 0 && (
            <>
              <h2 className="mb-2 text-2xl font-bold">User Solutions</h2>
              <ul>
                {userSolutions.map((solution: UserSolution) => {
                  return (
                    <li className="mb-8" key={solution.completed_at}>
                      <h4 className="mb-1">
                        Submitted:{' '}
                        {format(new Date(solution.completed_at), 'MM/dd/yyyy')}{' '}
                        at{' '}
                        {format(new Date(solution.completed_at), 'h:mm:ss aa')}
                      </h4>
                      <CodeMirror
                        theme={'dark'}
                        value={solution.solution_code}
                        height="auto"
                        editable={false}
                        extensions={[javascript({ jsx: true })]}
                      />
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          {userSolutions.length < userSolutionsCount && (
            <button className="btn-primary btn" onClick={loadMoreSolutions}>
              Load More Solutions
            </button>
          )}
        </section>
      </div>
    </>
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
        destination: '/',
        permanent: false,
      },
    };

  return {
    props: {
      codingChallengeData,
    },
  };
};

export default Help;
