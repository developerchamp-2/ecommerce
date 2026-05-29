import { NextRequest, NextResponse } from "next/server"

import { SESSION_COOKIE_NAME, removeSessionByToken } from "@/lib/auth"

export async function GET(request: NextRequest) {
  const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)?.value

  if (sessionToken) {
    await removeSessionByToken(sessionToken)
  }

  const response = NextResponse.redirect(new URL("/login", request.url))
  response.cookies.set(SESSION_COOKIE_NAME, "", {
    path: "/",
    expires: new Date(0),
  })

  return response
}
