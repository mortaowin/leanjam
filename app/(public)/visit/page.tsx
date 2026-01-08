"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { User, Video } from "lucide-react"
import { useState } from "react"

export default function VisitPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  const timeSlots = ["09:00", "09:30", "10:00", "10:30", "13:00", "13:30", "14:00"]

  return (
    <div className="container py-8 max-w-4xl px-4">
      <h1 className="text-3xl font-bold mb-2">Book a Visit</h1>
      <p className="text-muted-foreground mb-8">Schedule a physical or virtual visit with an inmate.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Select Date</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Select Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map(slot => (
                  <Button
                    key={slot}
                    variant={selectedSlot === slot ? "default" : "outline"}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>3. Visit Details</CardTitle>
              <CardDescription>Enter inmate and visitor information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Visit Type</label>
                <div className="flex gap-4">
                  <Card className="flex-1 cursor-pointer hover:border-primary transition-colors border-primary bg-primary/5">
                    <CardContent className="p-4 flex flex-col items-center gap-2">
                      <User className="h-6 w-6" />
                      <span className="font-semibold">On-site</span>
                    </CardContent>
                  </Card>
                  <Card className="flex-1 cursor-pointer hover:border-primary transition-colors">
                    <CardContent className="p-4 flex flex-col items-center gap-2">
                      <Video className="h-6 w-6" />
                      <span className="font-semibold">Virtual</span>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Inmate ID</label>
                <Input placeholder="e.g. 6601234" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Visitor Name</label>
                <Input placeholder="Your Full Name" />
              </div>

              <div className="pt-4">
                <Button className="w-full h-12 text-lg" disabled={!date || !selectedSlot}>
                  Confirm Booking
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  By confirming, you agree to the prison visitation rules.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
