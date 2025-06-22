import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Package, Heart, User, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Orders",
      value: "12",
      description: "All time orders",
      icon: ShoppingBag,
      color: "text-blue-600",
    },
    {
      title: "Active Orders",
      value: "3",
      description: "Currently processing",
      icon: Package,
      color: "text-green-600",
    },
    {
      title: "Wishlist Items",
      value: "8",
      description: "Saved for later",
      icon: Heart,
      color: "text-red-600",
    },
    {
      title: "Account Age",
      value: "2 years",
      description: "Member since 2022",
      icon: User,
      color: "text-purple-600",
    },
  ]

  const recentOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 129.99,
      items: 2,
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "Shipped",
      total: 89.99,
      items: 1,
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      status: "Processing",
      total: 249.99,
      items: 3,
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your account.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Orders
            </CardTitle>
            <CardDescription>Your latest order activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.date}</p>
                    <p className="text-sm text-gray-600">{order.items} items</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${order.total}</p>
                    <Badge
                      variant={
                        order.status === "Delivered" ? "default" : order.status === "Shipped" ? "secondary" : "outline"
                      }
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild variant="outline" className="w-full">
                <Link href="/dashboard/orders">View All Orders</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>Frequently used features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild className="w-full justify-start">
              <Link href="/products">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/dashboard/orders">
                <Package className="mr-2 h-4 w-4" />
                Track Orders
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/dashboard/wishlist">
                <Heart className="mr-2 h-4 w-4" />
                View Wishlist
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/dashboard/settings">
                <User className="mr-2 h-4 w-4" />
                Account Settings
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
