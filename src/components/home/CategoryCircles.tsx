import { useNavigate } from "react-router-dom";

const categories = [
  { id: "all", label: "All", emoji: "🔥" },
  { id: "fashion", label: "Fashion", emoji: "👗" },
  { id: "electronics", label: "Tech", emoji: "📱" },
  { id: "home", label: "Home", emoji: "🏠" },
  { id: "beauty", label: "Beauty", emoji: "💄" },
  { id: "vehicles", label: "Auto", emoji: "🚗" },
  { id: "sports", label: "Sports", emoji: "⚽" },
  { id: "kids", label: "Kids", emoji: "👶" },
];

export function CategoryCircles() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/explore?category=${categoryId}`);
  };

  return (
    <section className="px-4 py-2">
      <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-4 px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className="flex flex-col items-center gap-1.5 min-w-[60px] tap-highlight"
          >
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-2xl border-2 border-border hover:border-primary transition-colors">
              {cat.emoji}
            </div>
            <span className="text-xs font-medium text-foreground truncate max-w-[60px]">
              {cat.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
