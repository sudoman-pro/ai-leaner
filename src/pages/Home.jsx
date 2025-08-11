import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to the AI Study App</h1>
      <SignedOut>
        <p>
          Please <SignInButton /> or <a href="/register">Register</a>
        </p>
      </SignedOut>
      <SignedIn>
        <p>You are logged in! Go to <a href="/dashboard">Dashboard</a></p>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}
