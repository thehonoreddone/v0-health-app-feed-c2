"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, MessageCircle, Sparkles } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface MacroTag {
  label: string
  value: string
  color: "green" | "orange" | "blue"
}

interface MealCardProps {
  image: string
  avatar: string
  username: string
  time: string
  caption: string
  macros: MacroTag[]
  likes: number
  comments: number
  inspires: number
}

export function MealCard({
  image,
  avatar,
  username,
  time,
  caption,
  macros,
  likes: initialLikes,
  comments,
  inspires: initialInspires,
}: MealCardProps) {
  const [liked, setLiked] = useState(false)
  const [inspired, setInspired] = useState(false)
  const [likes, setLikes] = useState(initialLikes)
  const [inspires, setInspires] = useState(initialInspires)

  const handleLike = () => {
    setLiked(!liked)
    setLikes(prev => liked ? prev - 1 : prev + 1)
  }

  const handleInspire = () => {
    setInspired(!inspired)
    setInspires(prev => inspired ? prev - 1 : prev + 1)
  }

  const macroColors = {
    green: "bg-primary/90 text-primary-foreground",
    orange: "bg-accent/90 text-accent-foreground",
    blue: "bg-blue-500/90 text-white",
  }

  return (
    <div className="bg-card rounded-3xl shadow-lg shadow-foreground/5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10 hover:-translate-y-0.5">
      {/* User Header */}
      <div className="flex items-center gap-3 p-4 pb-3">
        <Avatar className="h-10 w-10 ring-2 ring-primary/20">
          <AvatarImage src={avatar} alt={username} />
          <AvatarFallback className="bg-primary/10 text-primary font-medium">
            {username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-card-foreground text-sm truncate">{username}</p>
          <p className="text-xs text-muted-foreground">{time}</p>
        </div>
      </div>

      {/* Image with Macro Overlays */}
      <div className="relative aspect-[4/3] mx-3 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={caption}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Macro Tags */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
          {macros.map((macro, index) => (
            <span
              key={index}
              className={cn(
                "px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm",
                macroColors[macro.color]
              )}
            >
              {macro.value} {macro.label}
            </span>
          ))}
        </div>
      </div>

      {/* Caption */}
      <div className="px-4 pt-3 pb-2">
        <p className="text-sm text-card-foreground leading-relaxed line-clamp-2">
          {caption}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between px-4 pb-4 pt-1">
        <div className="flex items-center gap-5">
          <button
            onClick={handleLike}
            className="flex items-center gap-1.5 group transition-all duration-200"
            aria-label="Like"
          >
            <Heart
              className={cn(
                "h-5 w-5 transition-all duration-200",
                liked 
                  ? "fill-red-500 text-red-500 scale-110" 
                  : "text-muted-foreground group-hover:text-red-400 group-hover:scale-105"
              )}
            />
            <span className={cn(
              "text-xs font-medium transition-colors",
              liked ? "text-red-500" : "text-muted-foreground"
            )}>
              {likes}
            </span>
          </button>

          <button 
            className="flex items-center gap-1.5 group transition-all duration-200"
            aria-label="Comment"
          >
            <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:scale-105 transition-all duration-200" />
            <span className="text-xs font-medium text-muted-foreground">
              {comments}
            </span>
          </button>

          <button
            onClick={handleInspire}
            className="flex items-center gap-1.5 group transition-all duration-200"
            aria-label="Inspire"
          >
            <Sparkles
              className={cn(
                "h-5 w-5 transition-all duration-200",
                inspired 
                  ? "fill-accent text-accent scale-110" 
                  : "text-muted-foreground group-hover:text-accent group-hover:scale-105"
              )}
            />
            <span className={cn(
              "text-xs font-medium transition-colors",
              inspired ? "text-accent" : "text-muted-foreground"
            )}>
              {inspires}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
