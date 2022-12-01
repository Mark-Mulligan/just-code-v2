// React
import { FC } from "react";

// uuid
import { v4 as uuidv4 } from "uuid";

interface IProps {
  testCriteria: string[];
}

const TestCriteriaList: FC<IProps> = ({ testCriteria }) => {
  console.log(testCriteria);

  return (
    <ul className="mb-4 list-inside list-disc">
      {testCriteria.map((item) => {
        return (
          <li className="font-light" key={uuidv4()}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default TestCriteriaList;
