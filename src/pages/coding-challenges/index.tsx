// Next
import type { GetServerSideProps } from 'next';
import type { NextPage } from 'next';

// React
import React, { useState, useEffect } from 'react';

// Supabase
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Session, User } from '@supabase/auth-helpers-nextjs';

// Coding Challenge Data
import { codingChallengesData } from '../../../data/codingChallengeData';

// Components
import CodingChallengeCard from '../../components/CodingChallengeCard';

// Custom Types
import type { CodingChallengeOverviewData } from '../../../types/customTypes';

interface IProps {
  codingChallengeOverviews: CodingChallengeOverviewData[];
  completedChallenges: string[];
  initialSession: Session;
  user: User;
}

const Problems: NextPage<IProps> = ({
  codingChallengeOverviews,
  completedChallenges,
}) => {
  const [challengeSearch, setChallengeSearch] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [completionStatusFilter, setCompletionStatusFilter] =
    useState<string>('all');
  const [filteredChallenges, setFilteredChallenges] = useState(
    codingChallengeOverviews
  );

  const handleChangeSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChallengeSearch(e.target.value);
  };

  const handleDifficultyFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDifficultyFilter(e.target.value);
  };

  const handleCompletionStatusFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCompletionStatusFilter(e.target.value);
  };

  useEffect(() => {
    let newFilteredChallenges: CodingChallengeOverviewData[] = [
      ...codingChallengeOverviews,
    ];

    if (difficultyFilter !== 'all') {
      newFilteredChallenges = newFilteredChallenges.filter(
        (challenge) => challenge.difficulty === Number(difficultyFilter)
      );
    }

    if (completionStatusFilter === 'completed') {
      newFilteredChallenges = newFilteredChallenges.filter(
        (challenge) => challenge.completed === true
      );
    }

    if (completionStatusFilter === 'notCompleted') {
      newFilteredChallenges = newFilteredChallenges.filter(
        (challenge) => challenge.completed === false
      );
    }

    if (challengeSearch) {
      const formattedSearch = challengeSearch.toLowerCase();
      newFilteredChallenges = newFilteredChallenges.filter(
        ({ title, description }) => {
          return (
            title.toLowerCase().includes(formattedSearch) ||
            description.toLowerCase().includes(formattedSearch)
          );
        }
      );
    }

    setFilteredChallenges(newFilteredChallenges);
  }, [
    challengeSearch,
    difficultyFilter,
    completionStatusFilter,
    codingChallengeOverviews,
  ]);

  return (
    <div className="container mx-auto px-2 pt-20">
      <h1 className="mb-2 text-center text-3xl font-bold">Coding Challenges</h1>
      <h6 className="mb-4 text-center">
        {completedChallenges.length}/{codingChallengeOverviews.length} Completed
      </h6>
      <div className="mb-4 grid grid-cols-3 gap-x-4">
        <label>
          Search Challenges
          <input
            type="text"
            placeholder="Search..."
            onChange={handleChangeSearchChange}
            value={challengeSearch}
            className="input-bordered input mt-1 w-full"
          />
        </label>

        <label>
          Difficulty
          <select
            className="select-bordered select mt-1 w-full"
            onChange={handleDifficultyFilterChange}
            value={difficultyFilter}
          >
            <option value="all">All</option>
            <option value="1">Easy</option>
            <option value="2">Medium</option>
            <option value="3">Hard</option>
          </select>
        </label>

        <label>
          Completion Status
          <select
            className="select-bordered select mt-1 w-full"
            onChange={handleCompletionStatusFilterChange}
            value={completionStatusFilter}
          >
            <option value="all">All</option>
            <option value="notCompleted">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>
      <ul>
        {filteredChallenges.map(
          ({ challengeKey, title, description, difficulty, completed }) => {
            return (
              <CodingChallengeCard
                key={challengeKey}
                name={title}
                difficulty={difficulty}
                description={description}
                challengeKey={challengeKey}
                completed={completed}
              />
            );
          }
        )}
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

  // const codingChallengeOverviews: CodingChallengeOverviewData[] = [];
  const codingChallengeOverviews: CodingChallengeOverviewData[] =
    Object.entries(codingChallengesData).map(
      ([challengeKey, challengeData]) => {
        const { title, description, difficulty } = challengeData;
        return {
          challengeKey,
          title,
          description,
          difficulty,
          completed: completedChallenges.includes(challengeKey),
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
