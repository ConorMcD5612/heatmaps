"use client";
import { IconBtn } from "@/app/components/IconBtn";
import FeatherIcon from "feather-icons-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();
//TODO: styles are the same so should just extract them into one thing
  if (session) {
    return (
      <IconBtn disabled={false} iconName="log-out" text="Sign Out" onClickCallback={signOut} />
    );
  }
  return (
    <IconBtn disabled={false} iconName="log-in" text="Sign In" onClickCallback={signIn} />
  );
}
