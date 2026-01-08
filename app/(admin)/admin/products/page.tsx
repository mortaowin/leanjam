"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Edit, Plus, Search, Trash2 } from "lucide-react"

export default function AdminProductsPage() {
  const products = [
    { id: 1, name: "Instant Noodles", price: 15, stock: 450, category: "Food" },
    { id: 2, name: "Coffee Pack", price: 45, stock: 120, category: "Beverage" },
    { id: 3, name: "Soap", price: 25, stock: 80, category: "Hygiene" },
    { id: 4, name: "Toothpaste", price: 35, stock: 0, category: "Hygiene" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Manage shop inventory and prices.</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" /> Add Product
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-8" />
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/50 text-muted-foreground font-medium border-b">
            <tr>
              <th className="h-12 px-4 align-middle">Name</th>
              <th className="h-12 px-4 align-middle">Category</th>
              <th className="h-12 px-4 align-middle">Price</th>
              <th className="h-12 px-4 align-middle">Stock</th>
              <th className="h-12 px-4 align-middle text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b transition-colors hover:bg-muted/50">
                <td className="p-4 align-middle font-medium">{p.name}</td>
                <td className="p-4 align-middle"><Badge variant="outline">{p.category}</Badge></td>
                <td className="p-4 align-middle">฿{p.price}</td>
                <td className="p-4 align-middle">
                  {p.stock > 0 ? (
                    <span className="text-green-500">{p.stock} units</span>
                  ) : (
                    <span className="text-destructive font-bold">Out of Stock</span>
                  )}
                </td>
                <td className="p-4 align-middle text-right">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><Edit className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive"><Trash2 className="h-4 w-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
