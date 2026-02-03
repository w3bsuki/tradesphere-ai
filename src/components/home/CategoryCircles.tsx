import { useNavigate } from "react-router-dom";

const categories = [
  { id: "all", label: "All", emoji: "🔥" },
  { id: "fashion", label: "Fashion", emoji: "👗" },
  { id: "electronics", label: "Tech", emoji: "📱" },
  { id: "home", label: "Home", emoji: "🏠" },
  { id: "vehicles", label: "Auto", emoji: "🚗" },
  { id: "sports", label: "Sports", emoji: "⚽" },
];

export function CategoryCircles() {
  const navigate = useNavigate();

  return (
    <div className="px-4 pb-3">
      <div className="flex gap-2 overflow-x-auto hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => navigate(`/explore?category=${cat.id}`)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full tap-highlight shrink-0"
          >
            <span className="text-sm">{cat.emoji}</span>
            <span className="text-xs font-medium text-foreground">{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
