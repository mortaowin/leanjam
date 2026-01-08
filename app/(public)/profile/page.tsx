"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LogOut, Mail, Phone, User } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="container py-10 max-w-2xl px-4">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <User className="w-8 h-8" />
            </div>
            <div>
              <CardTitle>Jane Doe</CardTitle>
              <CardDescription>Verified Family Member</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </label>
              <Input defaultValue="jane.doe@example.com" readOnly className="bg-muted/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" /> Phone
              </label>
              <Input defaultValue="089-123-4567" readOnly className="bg-muted/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">National ID</label>
              <Input defaultValue="1-1002-xxxxx-xx-x" readOnly className="bg-muted/50 font-mono" />
            </div>
          </CardContent>
        </Card>

        <Button variant="destructive" className="w-full">
          <LogOut className="w-4 h-4 mr-2" /> Sign Out
        </Button>
      </div>
    </div>
  )
}
