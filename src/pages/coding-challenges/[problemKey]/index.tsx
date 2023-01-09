// React
import React, { useState } from 'react';

// Next
import Head from 'next/head';
import type { NextPage } from 'next';
import type { GetServerSideProps } from 'next';

// Supabase
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Session, User } from '@supabase/auth-helpers-nextjs';

// Code Mirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

// Data
import { codingChallengesData } from '../../../../data/codingChallengeData';

// Components
import CodingChallengeInfoPanel from '../../../components/CodingChallengeInfoPanel';

// Custom Types
import type {
  IParams,
  CodingChallengeData,
} from '../../../../types/customTypes';

interface IProps {
  codingChallengeData: CodingChallengeData;
  initialSession: Session;
  user: User;
}

const CodingExercise: NextPage<IProps> = ({ codingChallengeData }) => {
  const [userCode, setUserCode] = useState(
    codingChallengeData?.startingCode || ''
  );

  return (
    <>
      <Head>
        <title>Just Code - {codingChallengeData.title}</title>
        <meta name="description" content={codingChallengeData.description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Just Code - ${codingChallengeData.title}`}
        />
        <meta
          property="og:description"
          content={codingChallengeData.description}
        />
        <meta
          property="og:url"
          content={`https://just-code.vercel.app/coding-challenges/`}
        />
        <meta property="og:site_name" content="Just Code" />
      </Head>
      <div className="mt-[64px] flex h-[calc(100vh-4rem)]">
        <CodingChallengeInfoPanel
          userCode={userCode}
          codingChallengeData={codingChallengeData}
        />
        <div
          className="w-full overflow-auto pt-4"
          style={{ background: '#282c34' }}
        >
          <CodeMirror
            theme={'dark'}
            value={userCode}
            height="auto"
            extensions={[javascript({ jsx: true })]}
            onChange={(value) => {
              setUserCode(value);
            }}
          />
        </div>
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
      initialSession: session,
      user: session.user,
      codingChallengeData,
    },
  };
};

export default CodingExercise;
