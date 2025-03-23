import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { AuthForm } from "~/app/(auth)/_components/auth-form";
import { AUTH_REDIRECT_PATH_SIGNED_IN } from "~/constants/links";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect(AUTH_REDIRECT_PATH_SIGNED_IN);
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <AuthForm mode="login" />
    </div>
  )
}
