// React
import { useEffect } from 'react';

// Next
import { type NextPage } from 'next';
import Head from 'next/head';
// import Link from "next/link";
import { useRouter } from 'next/router';

// Supabase
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

// React-icons
import { BsGithub, BsGoogle } from 'react-icons/bs';

// Components
import LoadingScreen from '../components/LoadingScreen';

const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/';
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
  return url;
};

const Home: NextPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: getURL(),
      },
    });
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: getURL(),
      },
    });
  };

  useEffect(() => {
    if (session) {
      if (typeof window !== 'undefined') {
        router.push('/coding-challenges');
      }
    }
  }, [session, router]);

  return (
    <>
      <Head>
        <title>Just Code</title>
        <meta
          name="description"
          content="Just code is a website with coding challenges to help you improve your knowledge of javascript. The coding challenges focus on practical problems faced in real world web development instead of drilling data structure and algorithms."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Just Code" />
        <meta
          property="og:description"
          content="Just code is a website with coding challenges to help you improve your knowledge of javascript. The coding challenges focus on practical problems faced in real world web development instead of drilling data structure and algorithms."
        />
        <meta property="og:url" content="https://just-code.vercel.app/" />
        <meta property="og:site_name" content="Just Code" />
        <meta
          property="og:image"
          content="https://just-code.vercel.app/images/just-code-challenge-screen.png"
        />
      </Head>
      <div className="container mx-auto">
        {!session ? (
          <div className="card mx-auto mt-16 max-w-lg bg-base-300 px-10 py-16 shadow-xl">
            <h1 className="mb-4 text-center text-5xl font-bold">
              <div className=" text-accent-content">Just Code</div>
            </h1>
            <p className="text-center font-light">
              Straight forward javascript challenges to help you level up your
              coding skills.
            </p>
            <div className="divider" />
            <button
              onClick={signInWithGithub}
              className="btn-block btn mb-3 gap-2"
            >
              <BsGithub size={20} />
              Sign In With Github
            </button>
            <button onClick={signInWithGoogle} className="btn-block btn gap-2">
              <BsGoogle size={20} />
              Sign In With Google
            </button>
          </div>
        ) : (
          <LoadingScreen loadingText="Loading..." />
        )}
      </div>
    </>
  );
};

export default Home;
