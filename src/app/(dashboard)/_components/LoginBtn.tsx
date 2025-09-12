"use client";
import FeatherIcon from "feather-icons-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();
//TODO: styles are the same so should just extract them into one thing
  if (session) {
    return (
      <button
        className="flex border bg-[#1a1a1a] border-opacity-50 border-white p-[4px] place-items-center gap-1 rounded"
        onClick={() => signOut()}
      >
        <span className="text-xs">Sign Out</span>
        <FeatherIcon size={20} icon="log-out" />
      </button>
    );
  }
  return (
    <button
      className="flex border bg-[#1a1a1a] border-opacity-50 border-white p-[4px] place-items-center gap-1 rounded"
      onClick={() => signIn()}
    >
      <span className="text-xs">Sign In</span>
      <FeatherIcon size={20} icon="log-in" />
    </button>
  );
}
