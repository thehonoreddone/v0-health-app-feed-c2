"use client"

import { Home, Compass, PlusCircle, BarChart3, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface NavItem {
  id: string
  icon: React.ElementType
  label: string
}

const navItems: NavItem[] = [
  { id: "home", icon: Home, label: "Home" },
  { id: "explore", icon: Compass, label: "Explore" },
  { id: "create", icon: PlusCircle, label: "Create" },
  { id: "stats", icon: BarChart3, label: "Stats" },
  { id: "profile", icon: User, label: "Profile" },
]

export function BottomNav() {
  const [active, setActive] = useState("home")

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border/50 pb-safe">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          const isCreate = item.id === "create"

          if (isCreate) {
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="flex flex-col items-center gap-0.5 -mt-4"
                aria-label={item.label}
              >
                <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/40">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </button>
            )
          }

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "flex flex-col items-center gap-0.5 py-2 px-4 rounded-xl transition-all duration-200",
                isActive && "bg-primary/10"
              )}
              aria-label={item.label}
            >
              <Icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
