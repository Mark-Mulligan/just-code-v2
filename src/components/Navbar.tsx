// Next
import { useRouter } from "next/router";
import Link from "next/link";

// Supabase
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const Navbar = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();

  const handleSignOut = async () => {
    console.log("this ran");
    const { error } = await supabase.auth.signOut();

    if (!error && typeof window !== "undefined") {
      router.push("/");
    } else {
      console.log(error);
    }
  };

  return (
    <div className="navbar fixed top-0 bg-base-300">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">Just Code</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/coding-challenges">Coding Challenges</Link>
          </li>
          <li onClick={handleSignOut}>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
