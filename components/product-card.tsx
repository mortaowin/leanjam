"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Plus, ShoppingCart } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  inStock: boolean
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (id: string) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-square bg-muted/20">
        {/* Placeholder for real image */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
          <ShoppingCart className="w-12 h-12" />
        </div>
        {/* Real image would go here */}
        {/* <Image src={product.image} alt={product.name} fill className="object-cover" /> */}

        {!product.inStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Badge variant="outline" className="mb-2 text-xs">{product.category}</Badge>
            <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>
          <span className="font-mono text-lg text-primary font-bold">
            ฿{product.price.toLocaleString()}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full shadow-md active:scale-95 transition-transform"
          disabled={!product.inStock}
          onClick={() => onAddToCart?.(product.id)}
        >
          <Plus className="w-4 h-4 mr-2" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
