export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* We will add stats widgets here later */}
        <div className="p-6 bg-card rounded-xl border shadow-sm">
          <div className="text-sm font-medium text-muted-foreground">Total Inmates</div>
          <div className="text-2xl font-bold">2,453</div>
        </div>
        <div className="p-6 bg-card rounded-xl border shadow-sm">
          <div className="text-sm font-medium text-muted-foreground">Today's Visits</div>
          <div className="text-2xl font-bold">142</div>
        </div>
      </div>
    </div>
  )
}
