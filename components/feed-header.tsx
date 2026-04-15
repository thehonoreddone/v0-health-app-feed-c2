"use client"

import { Bell, Search, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function FeedHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 text-primary-foreground"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="font-bold text-lg text-foreground tracking-tight">
            Nourish
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button 
            className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center transition-colors hover:bg-secondary/80"
            aria-label="Search"
          >
            <Search className="h-4 w-4 text-secondary-foreground" />
          </button>
          
          <button 
            className="h-9 w-9 rounded-full bg-primary flex items-center justify-center transition-all hover:bg-primary/90 hover:scale-105"
            aria-label="Create post"
          >
            <Plus className="h-4 w-4 text-primary-foreground" />
          </button>
          
          <button 
            className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center relative transition-colors hover:bg-secondary/80"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4 text-secondary-foreground" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-accent rounded-full" />
          </button>

          <Avatar className="h-9 w-9 ml-1 ring-2 ring-primary/20">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" alt="Your profile" />
            <AvatarFallback className="bg-primary/10 text-primary font-medium text-xs">
              ME
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
