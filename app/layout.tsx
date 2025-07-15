import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { CartProvider } from "@/components/cart-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NextStore - Your One-Stop Online Store",
  description:
    "Discover amazing products across clothing, electronics, furniture, and shoes with great prices and fast shipping.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
            <Navigation />
          </Suspense>
          
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
        </CartProvider>
      </body>
    </html>
  )
}
