// React
import type { FC } from 'react';

// uuid
import { v4 as uuidv4 } from 'uuid';

// React icons
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

// Custom Types
import type { TestResult } from '../../types/customTypes';

interface IProps {
  testResults: TestResult[];
}

const TestResultsList: FC<IProps> = ({ testResults }) => {
  return (
    <ul className="mb-4">
      {testResults.length === 0 && (
        <li className="mb-4 font-light">Submit code to get test results.</li>
      )}
      {testResults.map((testResult) => {
        return (
          <li key={uuidv4()} className="mb-4">
            <code className="flex items-center text-sm">
              <span className="mr-2">{testResult.test}</span>
              {testResult.passed ? (
                <BsCheckLg size={16} fill="green" />
              ) : (
                <AiOutlineClose size={22} fill="red" />
              )}
            </code>

            <div>
              <code className="text-sm">
                Your code returned --{`>`} {testResult.result}
              </code>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TestResultsList;
