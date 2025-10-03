"use client";
import { IconBtn } from "@/app/_common/IconBtn";
import FeatherIcon from "feather-icons-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <IconBtn
        disabled={false}
        iconName="log-out"
        text="Sign Out"
        onClickCallback={signOut}
      />
    );
  }
  return (
    <IconBtn
      disabled={false}
      iconName="log-in"
      text="Sign In"
      onClickCallback={signIn}
    />
  );
}
