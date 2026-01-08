"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export default function AdminVisitsPage() {
  const requests = [
    { id: 1, visitor: "Alice Smith", inmate: "Somchai (66001)", date: "2026-02-10", time: "09:00", type: "On-site" },
    { id: 2, visitor: "Bob Jones", inmate: "Piti (66055)", date: "2026-02-10", time: "10:30", type: "Virtual" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Visit Approvals</h1>
          <p className="text-muted-foreground">Approve or reject incoming visit requests.</p>
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/50 text-muted-foreground font-medium border-b">
            <tr>
              <th className="h-12 px-4 align-middle">Visitor</th>
              <th className="h-12 px-4 align-middle">Inmate</th>
              <th className="h-12 px-4 align-middle">Date & Time</th>
              <th className="h-12 px-4 align-middle">Type</th>
              <th className="h-12 px-4 align-middle text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <tr key={r.id} className="border-b transition-colors hover:bg-muted/50">
                <td className="p-4 align-middle font-medium">{r.visitor}</td>
                <td className="p-4 align-middle">{r.inmate}</td>
                <td className="p-4 align-middle">{r.date} @ {r.time}</td>
                <td className="p-4 align-middle">
                  <Badge variant="outline">{r.type}</Badge>
                </td>
                <td className="p-4 align-middle text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 h-8 gap-1">
                      <Check className="w-4 h-4" /> Approve
                    </Button>
                    <Button size="sm" variant="destructive" className="h-8 gap-1">
                      <X className="w-4 h-4" /> Reject
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
