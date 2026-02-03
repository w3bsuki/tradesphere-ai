import { Search } from "lucide-react";

interface HeroSearchProps {
  onClick: () => void;
}

export function HeroSearch({ onClick }: HeroSearchProps) {
  return (
    <div className="px-4 py-3">
      <button
        onClick={onClick}
        className="w-full flex items-center gap-3 px-4 py-3 bg-muted rounded-xl tap-highlight"
      >
        <Search className="w-4 h-4 text-muted-foreground" />
        <span className="text-muted-foreground text-sm">Search products...</span>
      </button>
    </div>
  );
}
