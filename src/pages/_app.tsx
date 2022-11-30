// React
import { useState } from "react";

// Next
import { AppProps } from "next/app";
import { useRouter } from "next/router";

// Supabase
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";

// Components
import Navbar from "../components/Navbar";

// Styles
import "../styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const router = useRouter();
  const showNavbar = router.pathname === "/" ? false : true;

  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      {showNavbar ? <Navbar /> : null}
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
export default MyApp;
