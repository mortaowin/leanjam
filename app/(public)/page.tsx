"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CalendarDays, DollarSign, Lock, Mail, ShieldCheck, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-primary/10 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

        <div className="container relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-foreground drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">
              CIDA 2028
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light">
              REANJAM CENTRAL PRISON
              <br />
              <span className="text-sm opacity-70">Correctional Institution for Development & Assistance</span>
            </p>

            <div className="flex gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg" className="h-12 px-8 text-lg shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary),0.6)] transition-all duration-300">
                  <ShoppingBag className="mr-2 h-5 w-5" /> inmate Shop
                </Button>
              </Link>
              <Link href="/visit">
                <Button variant="outline" size="lg" className="h-12 px-8 text-lg border-primary/50 hover:bg-primary/10">
                  <CalendarDays className="mr-2 h-5 w-5" /> Book Visit
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Services Grid */}
      <section className="container py-16 px-4 flex-1">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Shop Card */}
          <motion.div variants={item}>
            <Link href="/shop" className="block h-full">
              <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group hover:bg-accent/5">
                <CardHeader>
                  <ShoppingBag className="h-10 w-10 text-primary mb-2 group-hover:text-accent transition-colors" />
                  <CardTitle>Welfare Shop</CardTitle>
                  <CardDescription>Purchase essential items for inmates.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Food & Snacks</li>
                    <li>Toiletries</li>
                    <li>Clothing</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Visit Card */}
          <motion.div variants={item}>
            <Link href="/visit" className="block h-full">
              <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group hover:bg-accent/5">
                <CardHeader>
                  <CalendarDays className="h-10 w-10 text-primary mb-2 group-hover:text-accent transition-colors" />
                  <CardTitle>Visitation</CardTitle>
                  <CardDescription>Schedule physical or virtual visits.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>On-site Booking</li>
                    <li>Video Conference</li>
                    <li>Visit History</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Money Card */}
          <motion.div variants={item}>
            <Link href="/money" className="block h-full">
              <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group hover:bg-accent/5">
                <CardHeader>
                  <DollarSign className="h-10 w-10 text-primary mb-2 group-hover:text-accent transition-colors" />
                  <CardTitle>Deposit Money</CardTitle>
                  <CardDescription>Securely transfer funds to inmate accounts.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Instant Transfer</li>
                    <li>Transaction Logs</li>
                    <li>Secure Gateway</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Letters Card */}
          <motion.div variants={item}>
            <Link href="/letters" className="block h-full">
              <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group hover:bg-accent/5">
                <CardHeader>
                  <Mail className="h-10 w-10 text-primary mb-2 group-hover:text-accent transition-colors" />
                  <CardTitle>Digital Letter</CardTitle>
                  <CardDescription>Send messages and photos online.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Write Message</li>
                    <li>Attach Photos</li>
                    <li>Status Tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

        </motion.div>
      </section>

      {/* Footer Info */}
      <footer className="border-t border-border/50 py-8 bg-card/30">
        <div className="container px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4 opacity-50">
            <Lock className="w-4 h-4" />
            <span className="text-xs tracking-widest uppercase">Secure CIDA System 2028</span>
            <ShieldCheck className="w-4 h-4" />
          </div>
          <p className="text-sm text-muted-foreground/60">
            © 2026-2028 Reanjam Central Prison. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
