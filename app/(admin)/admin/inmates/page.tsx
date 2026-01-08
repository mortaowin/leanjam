"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, Search } from "lucide-react"

export default function AdminInmatesPage() {
  const inmates = [
    { id: "66001", name: "Somchai Jai-dee", cell: "A-102", status: "Good" },
    { id: "66002", name: "Mana Dee-mark", cell: "B-205", status: "Warning" },
    { id: "66055", name: "Piti Rak-thai", cell: "A-101", status: "Good" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inmate Database</h1>
          <p className="text-muted-foreground">View and manage inmate records.</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search ID or Name..." className="pl-8" />
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/50 text-muted-foreground font-medium border-b">
            <tr>
              <th className="h-12 px-4 align-middle">ID</th>
              <th className="h-12 px-4 align-middle">Full Name</th>
              <th className="h-12 px-4 align-middle">Cell Block</th>
              <th className="h-12 px-4 align-middle">Behavior Status</th>
              <th className="h-12 px-4 align-middle text-right">View</th>
            </tr>
          </thead>
          <tbody>
            {inmates.map((i) => (
              <tr key={i.id} className="border-b transition-colors hover:bg-muted/50">
                <td className="p-4 align-middle font-mono">{i.id}</td>
                <td className="p-4 align-middle font-medium">{i.name}</td>
                <td className="p-4 align-middle text-muted-foreground">{i.cell}</td>
                <td className="p-4 align-middle">
                  <Badge variant={i.status === "Good" ? "default" : "destructive"}>
                    {i.status}
                  </Badge>
                </td>
                <td className="p-4 align-middle text-right">
                  <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
