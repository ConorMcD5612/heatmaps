"use client";
import FeatherIcon from "feather-icons-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        className="flex border-white p-[4px] place-items-center rounded"
        onClick={() => signOut()}
      >
        <span className="text-xs">Sign Out</span>
        <FeatherIcon size={20} icon="log-out" />
      </button>
    );
  }
  return (
    <button
      className="flex border gap-1 border-white p-[4px] place-items-center rounded"
      onClick={() => signIn()}
    >
      <span className="text-xs">Sign In</span>
      <FeatherIcon size={20} icon="log-in" />
    </button>
  );
}
