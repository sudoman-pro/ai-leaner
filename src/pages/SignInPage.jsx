import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
