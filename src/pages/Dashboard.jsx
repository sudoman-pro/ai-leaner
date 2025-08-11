import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

export default function Dashboard() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <h1>Dashboard - You are signed in!</h1>
      </SignedIn>
    </>
  );
}
