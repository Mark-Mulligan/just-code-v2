// React
import type { FC } from 'react';

// Next
import Link from 'next/link';

// Components
import DifficultyBadge from './DifficultyBadge';

// Custom Types
import type { DifficultyLevel } from '../../types/customTypes';

interface IProps {
  name: string;
  difficulty: DifficultyLevel;
  description: string;
  challengeKey: string;
  completed: boolean;
}

const CodingChallengeCard: FC<IProps> = ({
  name,
  difficulty,
  description,
  challengeKey,
  completed,
}) => {
  return (
    <li
      className="card mx-auto mb-6 scroll-mt-20 bg-base-300 shadow-xl"
      id={challengeKey}
    >
      <div className="card-body">
        <div className="space-between card-title block xs:flex xs:items-center xs:justify-between">
          <div className="flex items-center">
            <h4 className="mr-2">{name}</h4>
            <DifficultyBadge difficulty={difficulty} />
          </div>
          {completed ? (
            <div className="badge badge-accent">Completed</div>
          ) : (
            <div className="badge badge-outline whitespace-nowrap">
              Not Completed
            </div>
          )}
        </div>
        <p className="mb-3 font-extralight">{description}</p>
        <div className="card-actions">
          <Link
            className="btn-primary btn"
            href={`/coding-challenges/${challengeKey}`}
          >
            Start Challenge
          </Link>
        </div>
      </div>
    </li>
  );
};

export default CodingChallengeCard;
