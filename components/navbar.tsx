"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  LogIn,
  Package,
  UserRound,
} from "lucide-react"

import { useCart } from "@/components/use-cart"

type NavbarUser = {
  name: string
  email: string
}

export function Navbar({ user }: { user?: NavbarUser | null }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { itemCount } = useCart()
  const isAuthenticated = Boolean(user)
  const loginHref = "/login"
  const signupHref = "/login?mode=signup"

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const accountLinks = isAuthenticated
    ? [
        { href: "/account/profile", label: "Profile", icon: UserRound },
        { href: "/account/orders", label: "Orders", icon: Package },
        { href: "/logout", label: "Sign out", icon: LogIn },
      ]
    : [
        { href: loginHref, label: "Login", icon: LogIn },
        { href: signupHref, label: "Create account", icon: UserRound },
      ]

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex-shrink-0 items-center group flex">
            <div className="text-2xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
              ShopHub
            </div>
          </Link>

          <div className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 font-medium text-gray-700 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}

            <div className="group relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 rounded-md px-3 py-2 font-medium text-gray-700 transition-all duration-200 ease-in-out hover:bg-blue-50 hover:text-blue-600"
              >
                More
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="invisible absolute left-0 mt-0 w-48 origin-top scale-y-0 rounded-md bg-white opacity-0 shadow-lg transition-all duration-300 ease-in-out group-hover:visible group-hover:scale-y-100 group-hover:opacity-100">
                <Link
                  href="/deals"
                  className="block rounded-md px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  Deals & Offers
                </Link>
                <Link
                  href="/blog"
                  className="block rounded-md px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  Blog
                </Link>
                <Link
                  href="/help"
                  className="block rounded-md px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  Help & Support
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center rounded-full bg-gray-100 px-4 py-2 transition-colors duration-200 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-blue-500 md:flex">
              <input
                type="text"
                placeholder="Search products..."
                className="w-40 bg-transparent text-sm text-gray-700 outline-none placeholder-gray-500"
              />
              <Search className="h-4 w-4 cursor-pointer text-gray-500 transition-colors duration-200 hover:text-blue-600" />
            </div>

            <Link
              href="/cart"
              className="relative rounded-lg p-2 text-gray-700 transition-all duration-200 hover:scale-110 hover:bg-blue-50 hover:text-blue-600"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 ? (
                <span className="absolute right-0 top-0 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white transition-colors duration-200 hover:bg-red-600">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              ) : null}
            </Link>

            <div className="group relative hidden sm:block">
              <Link
                href={isAuthenticated ? "/account/profile" : loginHref}
                className="inline-flex items-center gap-2 rounded-full border border-[#cad2bb] bg-white px-4 py-2 text-sm font-semibold text-[#263118] transition hover:bg-[#f5f8ef] hover:text-[#223013]"
              >
                <UserRound className="h-4 w-4" />
                {isAuthenticated ? (user?.name ?? "Account") : "Account"}
                <ChevronDown className="h-4 w-4" />
              </Link>

              <div className="invisible absolute right-0 mt-2 w-64 rounded-2xl border border-[#dde5d1] bg-white p-2 opacity-0 shadow-[0_25px_60px_-30px_rgba(35,45,24,0.35)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-[1.25rem] bg-[linear-gradient(135deg,#fdfcf6_0%,#edf4e6_100%)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#738160]">
                    {isAuthenticated ? "Signed in" : "Guest mode"}
                  </p>
                  <p className="mt-2 text-sm font-bold text-[#1f2a13]">
                    {isAuthenticated ? user?.name : "Login to access your dashboard"}
                  </p>
                  <p className="mt-1 text-xs text-[#5d6750]">
                    {isAuthenticated
                      ? user?.email
                      : "Create an account to save your profile and orders."}
                  </p>
                </div>
                <div className="mt-2 space-y-1">
                  {accountLinks.map((link) => {
                    const Icon = link.icon

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#314025] transition hover:bg-[#f5f8ef] hover:text-[#223013]"
                      >
                        <span className="rounded-full bg-[#eef3e5] p-2 text-[#455536]">
                          <Icon className="h-4 w-4" />
                        </span>
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <button
              onClick={toggleMenu}
              className="rounded-lg p-2 text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 md:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="animate-in fade-in slide-in-from-top-2 border-t border-gray-200 pb-4 duration-300 md:hidden">
            <div className="mb-3 flex items-center rounded-lg bg-gray-100 px-3 py-2 transition-colors duration-200 hover:bg-gray-200">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder-gray-500"
              />
              <Search className="h-4 w-4 text-gray-500" />
            </div>

            <div className="space-y-2">
              <Link
                href={isAuthenticated ? "/account/profile" : loginHref}
                className="block rounded-md border border-[#d9e2cd] bg-[#f8fbf4] px-3 py-2 text-center text-sm font-semibold text-[#243015] transition hover:bg-[#eef5e5]"
                onClick={() => setIsOpen(false)}
              >
                {isAuthenticated ? "Dashboard" : "Login"}
              </Link>
              <Link
                href={isAuthenticated ? "/logout" : signupHref}
                className="block rounded-md border border-[#d9e2cd] bg-[#f8fbf4] px-3 py-2 text-center text-sm font-semibold text-[#243015] transition hover:bg-[#eef5e5]"
                onClick={() => setIsOpen(false)}
              >
                {isAuthenticated ? "Sign out" : "Create account"}
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div>
                <button
                  onClick={toggleDropdown}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  More
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen ? (
                  <div className="animate-in fade-in slide-in-from-top space-y-2 pl-4 duration-200">
                    <Link
                      href="/deals"
                      className="block rounded-md px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Deals & Offers
                    </Link>
                    <Link
                      href="/blog"
                      className="block rounded-md px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/help"
                      className="block rounded-md px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Help & Support
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
