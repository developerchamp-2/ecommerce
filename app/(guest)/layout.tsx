import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"
import { getCurrentUser } from "@/lib/auth"

export default async function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser()

  return (
    <CartProvider>
      <Navbar user={user} />
      <main className="flex-1">{children}</main>
      <Footer />
    </CartProvider>
  )
}
