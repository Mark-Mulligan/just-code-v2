// React
import { FC } from "react";

// Custom Types
import { DifficultyLevel } from "../../types/customTypes";

interface IProps {
  difficulty: DifficultyLevel;
}

const DifficultyBadge: FC<IProps> = ({ difficulty }) => {
  if (difficulty === 1) {
    return <span className="badge badge-success">Easy</span>;
  }

  if (difficulty === 2) {
    return <span className="badge badge-warning">Medium</span>;
  }

  return <span className="badge badge-error">Hard</span>;
};

export default DifficultyBadge;
