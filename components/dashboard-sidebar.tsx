"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Package, Heart, Settings } from "lucide-react"

export function DashboardSidebar() {
  const pathname = usePathname()

  const sidebarItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: Package,
    },
    {
      title: "Wishlist",
      href: "/dashboard/wishlist",
      icon: Heart,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="w-64 bg-gray-50 border-r min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-lg font-semibold">My Account</h2>
        <p className="text-sm text-gray-600">Manage your account</p>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              pathname === item.href ? "bg-primary text-primary-foreground" : "text-gray-700 hover:bg-gray-200",
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
