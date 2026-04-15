import { FeedHeader } from "@/components/feed-header"
import { StoriesRow } from "@/components/stories-row"
import { MealCard } from "@/components/meal-card"
import { BottomNav } from "@/components/bottom-nav"

const feedPosts = [
  {
    id: "1",
    image: "/images/meal-1.jpg",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    username: "Sarah Mitchell",
    time: "2h ago",
    caption: "Starting my morning right with this protein-packed açaí bowl! Fresh berries and granola for that extra energy boost.",
    macros: [
      { label: "Protein", value: "18g", color: "green" as const },
      { label: "Carbs", value: "45g", color: "blue" as const },
      { label: "", value: "320 kcal", color: "orange" as const },
    ],
    likes: 234,
    comments: 18,
    inspires: 45,
  },
  {
    id: "2",
    image: "/images/meal-2.jpg",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    username: "Mike Chen",
    time: "4h ago",
    caption: "Meal prep Sunday! This Buddha bowl has everything I need for a balanced lunch. The roasted chickpeas are game changers.",
    macros: [
      { label: "Protein", value: "24g", color: "green" as const },
      { label: "Fiber", value: "12g", color: "blue" as const },
      { label: "", value: "450 kcal", color: "orange" as const },
    ],
    likes: 189,
    comments: 24,
    inspires: 67,
  },
  {
    id: "3",
    image: "/images/meal-3.jpg",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    username: "Emma Wilson",
    time: "6h ago",
    caption: "Post-workout dinner that hits all the macros! Grilled salmon with asparagus is my go-to for muscle recovery.",
    macros: [
      { label: "Protein", value: "38g", color: "green" as const },
      { label: "Omega-3", value: "2.5g", color: "blue" as const },
      { label: "", value: "420 kcal", color: "orange" as const },
    ],
    likes: 312,
    comments: 31,
    inspires: 89,
  },
  {
    id: "4",
    image: "/images/meal-4.jpg",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    username: "James Rodriguez",
    time: "8h ago",
    caption: "Quick morning smoothie for those busy days. Spinach, banana, and chia seeds — simple but so nutritious!",
    macros: [
      { label: "Protein", value: "12g", color: "green" as const },
      { label: "Fiber", value: "8g", color: "blue" as const },
      { label: "", value: "180 kcal", color: "orange" as const },
    ],
    likes: 156,
    comments: 12,
    inspires: 34,
  },
]

export default function CommunityFeed() {
  return (
    <div className="min-h-screen bg-background">
      <FeedHeader />
      
      {/* Stories Section */}
      <StoriesRow />
      
      {/* Divider */}
      <div className="h-px bg-border/50 mx-4" />
      
      {/* Feed */}
      <main className="px-4 py-4 pb-24">
        <div className="flex flex-col gap-5 max-w-md mx-auto">
          {feedPosts.map((post) => (
            <MealCard
              key={post.id}
              image={post.image}
              avatar={post.avatar}
              username={post.username}
              time={post.time}
              caption={post.caption}
              macros={post.macros}
              likes={post.likes}
              comments={post.comments}
              inspires={post.inspires}
            />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
