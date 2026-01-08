"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CreditCard, QrCode } from "lucide-react"
import { useState } from "react"

export default function MoneyPage() {
  const [amount, setAmount] = useState<string>("")

  const PRESETS = ["500", "1000", "2000", "5000"]

  return (
    <div className="container py-10 max-w-2xl px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Deposit Funds</h1>
        <p className="text-muted-foreground">Transfer money securely to an inmate's welfare account.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transfer Details</CardTitle>
          <CardDescription>Daily limit: 10,000 THB</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">

          <div className="space-y-2">
            <label className="text-sm font-medium">Inmate ID</label>
            <div className="flex gap-2">
              <Input placeholder="Search Inmate ID..." className="font-mono" />
              <Button variant="outline">Verify</Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Amount (THB)</label>
            <Input
              type="number"
              className="text-2xl font-bold h-14"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="flex gap-2 mt-2">
              {PRESETS.map(preset => (
                <Badge
                  key={preset}
                  variant="secondary"
                  className="text-sm px-3 py-1 cursor-pointer hover:bg-secondary/80"
                  onClick={() => setAmount(preset)}
                >
                  +{preset}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <label className="text-sm font-medium block">Payment Method</label>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2 border-primary/50 bg-primary/5">
                <QrCode className="w-6 h-6" />
                Scan QR PromptPay
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
                <CreditCard className="w-6 h-6" />
                Credit / Debit Card
              </Button>
            </div>
          </div>

          <Button className="w-full h-12 text-lg mt-4" disabled={!amount}>
            Proceed to Payment
          </Button>

        </CardContent>
      </Card>
    </div>
  )
}
