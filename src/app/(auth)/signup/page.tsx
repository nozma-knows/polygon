import { AuthForm } from "~/app/(auth)/_components/auth-form";

export default function SignupPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <AuthForm mode="signup" />
    </div>
  )
}