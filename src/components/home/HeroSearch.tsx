import { Sparkles } from "lucide-react";

interface HeroSearchProps {
  onClick: () => void;
}

export function HeroSearch({ onClick }: HeroSearchProps) {
  return (
    <section className="px-4 pt-4 pb-2">
      <button
        onClick={onClick}
        className="w-full flex items-center gap-3 px-4 py-3.5 bg-muted rounded-2xl tap-highlight group"
      >
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-active:scale-95 transition-transform">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
        <span className="flex-1 text-left text-muted-foreground text-sm">
          Find anything with AI...
        </span>
      </button>
    </section>
  );
}
