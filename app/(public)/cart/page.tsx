"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Trash2 } from "lucide-react"

export default function CartPage() {
  return (
    <div className="container py-10 max-w-4xl px-4">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {/* Cart Item 1 */}
          <Card className="flex items-center p-4 gap-4">
            <div className="w-20 h-20 bg-muted/20 rounded-md flex items-center justify-center text-xs text-muted-foreground">
              IMG
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Instant Noodles (Tom Yum)</h3>
              <div className="text-sm text-muted-foreground">Food Category</div>
            </div>
            <div className="text-right">
              <div className="font-bold">฿15.00</div>
              <div className="flex items-center gap-2 mt-2 justify-end">
                <span className="text-xs">Qty: 2</span>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive"><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
          </Card>

          {/* Cart Item 2 */}
          <Card className="flex items-center p-4 gap-4">
            <div className="w-20 h-20 bg-muted/20 rounded-md flex items-center justify-center text-xs text-muted-foreground">
              IMG
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Soap Bar</h3>
              <div className="text-sm text-muted-foreground">Hygiene</div>
            </div>
            <div className="text-right">
              <div className="font-bold">฿25.00</div>
              <div className="flex items-center gap-2 mt-2 justify-end">
                <span className="text-xs">Qty: 1</span>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive"><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
          </Card>
        </div>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>฿55.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Service Fee</span>
              <span>฿10.00</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">฿65.00</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full h-12 text-lg">
              <CreditCard className="w-4 h-4 mr-2" /> Checkout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
