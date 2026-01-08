"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, ShoppingBag } from "lucide-react"

export default function HistoryPage() {
  return (
    <div className="container py-10 max-w-4xl px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Activity History</h1>
      </div>

      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="orders">Shop Orders</TabsTrigger>
          <TabsTrigger value="visits">Visits</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-base">Order #ORD-2026-001</CardTitle>
                  <span className="text-xs text-muted-foreground">09 Jan 2026 • 14:30</span>
                </div>
              </div>
              <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
            </CardHeader>
            <CardContent className="py-4 border-t bg-muted/5">
              <div className="flex justify-between text-sm">
                <span>Total Paid</span>
                <span className="font-bold">฿450.00</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-base">Order #ORD-2026-002</CardTitle>
                  <span className="text-xs text-muted-foreground">08 Jan 2026 • 09:15</span>
                </div>
              </div>
              <Badge variant="secondary">Processing</Badge>
            </CardHeader>
            <CardContent className="py-4 border-t bg-muted/5">
              <div className="flex justify-between text-sm">
                <span>Total Paid</span>
                <span className="font-bold">฿120.00</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visits" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-base">Visit: Somchai (66001)</CardTitle>
                  <span className="text-xs text-muted-foreground">12 Jan 2026 • 10:00 (Upcoming)</span>
                </div>
              </div>
              <Badge variant="outline" className="border-secondary text-secondary">Confirmed</Badge>
            </CardHeader>
            <CardContent className="py-4 border-t bg-muted/5">
              <div className="text-sm">Type: On-site Visit</div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
