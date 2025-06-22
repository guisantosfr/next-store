import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Download } from "lucide-react"

export default function OrdersPage() {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 129.99,
      items: 2,
      trackingNumber: "TRK123456789",
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "Shipped",
      total: 89.99,
      items: 1,
      trackingNumber: "TRK987654321",
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      status: "Processing",
      total: 249.99,
      items: 3,
      trackingNumber: null,
    },
    {
      id: "ORD-004",
      date: "2023-12-28",
      status: "Delivered",
      total: 79.99,
      items: 1,
      trackingNumber: "TRK456789123",
    },
    {
      id: "ORD-005",
      date: "2023-12-20",
      status: "Cancelled",
      total: 159.99,
      items: 2,
      trackingNumber: null,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Delivered":
        return <Badge className="bg-green-100 text-green-800">Delivered</Badge>
      case "Shipped":
        return <Badge className="bg-blue-100 text-blue-800">Shipped</Badge>
      case "Processing":
        return <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>
      case "Cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Order History</h1>
        <p className="text-gray-600">Track and manage all your orders</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
          <CardDescription>Complete history of your purchases and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Tracking</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>{order.items} items</TableCell>
                  <TableCell>${order.total}</TableCell>
                  <TableCell>
                    {order.trackingNumber ? (
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">{order.trackingNumber}</code>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Invoice
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
