// React
import { FC } from "react";

// Next
import Link from "next/link";

// Components
import DifficultyBadge from "./DifficultyBadge";

// Custom Types
import { DifficultyLevel } from "../../types/customTypes";

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
    <li className="card mx-auto mb-6 bg-base-300 shadow-xl">
      <div className="card-body">
        <h4 className="space-between card-title flex items-center justify-between">
          <div>
            <span className="mr-2">{name}</span>{" "}
            <DifficultyBadge difficulty={difficulty} />
          </div>
          {completed ? (
            <div className="badge badge-accent">Completed</div>
          ) : (
            <div className="badge badge-outline">Not Completed</div>
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
