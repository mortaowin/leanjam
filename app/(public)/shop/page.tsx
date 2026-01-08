"use client"

import { ProductCard } from "@/components/product-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Filter, Search, ShoppingCart } from "lucide-react"
import { useState } from "react"

// Mock Data
const PRODUCTS = [
  { id: "1", name: "Instant Noodles (Tom Yum)", price: 15, category: "Food", image: "/p1.jpg", inStock: true },
  { id: "2", name: "Instant Coffee (Pack)", price: 45, category: "Beverage", image: "/p2.jpg", inStock: true },
  { id: "3", name: "Soap Bar (Antibacterial)", price: 25, category: "Hygiene", image: "/p3.jpg", inStock: true },
  { id: "4", name: "Toothpaste (Herbal)", price: 35, category: "Hygiene", image: "/p4.jpg", inStock: true },
  { id: "5", name: "Chocolate Bar", price: 30, category: "Snacks", image: "/p5.jpg", inStock: false },
  { id: "6", name: "Writing Pad", price: 20, category: "Stationery", image: "/p6.jpg", inStock: true },
  { id: "7", name: "Pen (Blue)", price: 10, category: "Stationery", image: "/p7.jpg", inStock: true },
  { id: "8", name: "Vitamin C", price: 120, category: "Health", image: "/p8.jpg", inStock: true },
]

const CATEGORIES = ["All", "Food", "Beverage", "Snacks", "Hygiene", "Stationery", "Health"]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-xl font-bold mr-4 hidden md:block">Welfare Shop</h1>
          <div className="flex-1 flex gap-2">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search items..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Button variant="outline" size="icon" className="ml-2 relative">
            <ShoppingCart className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center rounded-full">3</Badge>
          </Button>
        </div>
      </header>

      <div className="container px-4 py-6 md:flex gap-8">
        {/* Sidebar Filters (Desktop) */}
        <aside className="hidden md:block w-48 shrink-0">
          <div className="sticky top-20">
            <h3 className="font-semibold mb-4 flex items-center"><Filter className="w-4 h-4 mr-2" /> Categories</h3>
            <div className="space-y-1">
              {CATEGORIES.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </aside>

        {/* Mobile Filters (Horizontal Scroll) */}
        <div className="md:hidden pb-4 overflow-x-auto flex gap-2 no-scrollbar">
          {CATEGORIES.map(cat => (
            <Badge
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className="whitespace-nowrap px-4 py-2 text-sm cursor-pointer"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No items found.
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
