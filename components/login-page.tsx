"use client";

import Link from "next/link";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f9f4] px-4">
      <section className="w-full max-w-md rounded-[2rem] border border-[#dde4d1] bg-white p-8 shadow-[0_20px_60px_-30px_rgba(31,41,18,0.25)]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#71805b]">
            Account Login
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#14190e]">
            Login to ShopHub
          </h2>

          <p className="mt-3 text-sm text-[#5d6750]">
            Continue shopping and manage your orders easily.
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <span className="text-sm font-semibold text-[#223013]">
              Email address
            </span>

            <div className="relative mt-2">
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6f7c5c]" />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-[#d8dfcc] bg-[#fbfcf9] py-3 pl-11 pr-4 text-sm outline-none focus:border-[#93a374]"
              />
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold text-[#223013]">
              Password
            </span>

            <div className="relative mt-2">
              <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6f7c5c]" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-[#d8dfcc] bg-[#fbfcf9] py-3 pl-11 pr-12 text-sm outline-none focus:border-[#93a374]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6f7c5c]"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-[#4f5b41]">
              <input type="checkbox" />
              Remember me
            </label>

            <Link
              href="/help"
              className="font-semibold text-[#30411a] hover:text-[#223013]"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#2f3b1d] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#243015]"
          >
            Login
          </button>

          <p className="text-center text-sm text-[#5b654d]">
            New here?
            <span className="ml-2 font-semibold text-[#263118]">
              Create an account
            </span>
          </p>
        </form>
      </section>
    </div>
  );
}