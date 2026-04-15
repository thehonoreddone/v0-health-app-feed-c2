"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface StoryUser {
  id: string
  name: string
  avatar: string
  goalType: "calories" | "protein" | "steps" | "workout"
  seen?: boolean
}

const storyUsers: StoryUser[] = [
  { id: "1", name: "Sarah", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face", goalType: "calories" },
  { id: "2", name: "Mike", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", goalType: "protein" },
  { id: "3", name: "Emma", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", goalType: "workout", seen: true },
  { id: "4", name: "James", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", goalType: "steps" },
  { id: "5", name: "Lisa", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face", goalType: "calories" },
  { id: "6", name: "David", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", goalType: "protein", seen: true },
  { id: "7", name: "Ana", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face", goalType: "workout" },
]

const goalIcons = {
  calories: "🔥",
  protein: "💪",
  steps: "👟",
  workout: "🏋️",
}

export function StoriesRow() {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Daily Goals Hit
        </h3>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {storyUsers.map((user) => (
          <button
            key={user.id}
            className="flex flex-col items-center gap-1.5 flex-shrink-0 group"
          >
            <div
              className={cn(
                "p-0.5 rounded-full transition-all duration-300",
                user.seen
                  ? "bg-muted"
                  : "bg-gradient-to-tr from-primary via-accent to-primary"
              )}
            >
              <div className="p-0.5 bg-background rounded-full">
                <Avatar className="h-14 w-14 transition-transform duration-200 group-hover:scale-105">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
                    {user.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            {/* Goal Badge */}
            <div className="absolute mt-10 ml-8">
              <span className="flex items-center justify-center h-5 w-5 bg-card rounded-full text-xs shadow-sm border border-border">
                {goalIcons[user.goalType]}
              </span>
            </div>
            
            <span className={cn(
              "text-xs font-medium truncate max-w-[60px] mt-1",
              user.seen ? "text-muted-foreground" : "text-foreground"
            )}>
              {user.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
