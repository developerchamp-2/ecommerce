import { redirect } from "next/navigation"

import { LoginPage } from "@/components/login-page"
import { getCurrentUser } from "@/lib/auth"

export default async function LoginRoutePage({
  searchParams,
}: {
  searchParams: Promise<{
    mode?: string
    registered?: string
  }>
}) {
  const user = await getCurrentUser()

  if (user) {
    redirect("/")
  }

  const params = await searchParams

  return (
    <LoginPage
      initialMode={params.mode === "signup" ? "signup" : "login"}
      successMessage={
        params.registered
          ? "Account created successfully. Log in with your new credentials."
          : undefined
      }
    />
  )
}
