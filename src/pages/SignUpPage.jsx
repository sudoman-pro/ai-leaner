import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
