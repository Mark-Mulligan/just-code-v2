// React
import { FC } from "react";

// Next
import Link from "next/link";

interface IProps {
  name: string;
  description: string;
  challengeKey: string;
  completed: boolean;
}

const CodingChallengeCard: FC<IProps> = ({
  name,
  description,
  challengeKey,
  completed,
}) => {
  return (
    <li className="card mx-auto mb-6 bg-base-300 shadow-xl">
      <div className="card-body">
        <h4 className="space-between card-title flex items-center justify-between">
          <span>{name}</span>
          {completed ? (
            <div className="badge-accent badge">Completed</div>
          ) : (
            <div className="badge-outline badge">Not Completed</div>
          )}
        </h4>
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
