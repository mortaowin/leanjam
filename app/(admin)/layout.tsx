import { Button } from "@/components/ui/button"
import { FileText, LayoutDashboard, LogOut, ShoppingBag, Users } from "lucide-react"
import Link from "next/link"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r hidden md:flex flex-col fixed inset-y-0 z-50">
        <div className="h-16 flex items-center px-6 border-b">
          <span className="text-xl font-bold tracking-tight text-primary">CIDA ADMIN</span>
        </div>

        <div className="flex-1 py-6 px-4 space-y-1">
          <nav className="space-y-1">
            <Link href="/admin">
              <Button variant="ghost" className="w-full justify-start h-10 text-base">
                <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
              </Button>
            </Link>
            <Link href="/admin/products">
              <Button variant="ghost" className="w-full justify-start h-10 text-base">
                <ShoppingBag className="mr-2 h-4 w-4" /> Products
              </Button>
            </Link>
            <Link href="/admin/inmates">
              <Button variant="ghost" className="w-full justify-start h-10 text-base">
                <Users className="mr-2 h-4 w-4" /> Inmates
              </Button>
            </Link>
            <Link href="/admin/visits">
              <Button variant="ghost" className="w-full justify-start h-10 text-base">
                <FileText className="mr-2 h-4 w-4" /> Visit Reports
              </Button>
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
            <LogOut className="mr-2 h-4 w-4" /> Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
