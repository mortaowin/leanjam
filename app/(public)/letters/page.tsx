"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ImagePlus, Send } from "lucide-react"

export default function LettersPage() {
  return (
    <div className="container py-10 max-w-3xl px-4">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Write Letter</h1>
          <p className="text-muted-foreground">Send messages and photos to inmates.</p>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-2xl font-bold text-primary">15</div>
          <div className="text-xs text-muted-foreground uppercase">Credits Left</div>
        </div>
      </div>

      <div className="grid gap-6">
        <Card className="border-2 border-dashed border-muted bg-muted/10">
          <CardContent className="flex flex-col items-center justify-center py-10 text-center">
            <div className="p-4 bg-background rounded-full mb-4 shadow-sm">
              <ImagePlus className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold">Attach Photos</h3>
            <p className="text-sm text-muted-foreground mb-4">Max 3 photos per letter. JPEG/PNG only.</p>
            <Button variant="secondary" size="sm">Choose Files</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Message Content</CardTitle>
            <CardDescription>Max 2,000 characters per letter.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="Thinking of you..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message Body</label>
              <textarea
                className="flex min-h-[300px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="flex justify-end pt-4">
              <Button className="h-12 px-8">
                <Send className="w-4 h-4 mr-2" /> Send Letter (1 Credit)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
