import { Search, Bell, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  onSearchClick: () => void;
}

export function Header({ onSearchClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border safe-top">
      <div className="flex items-center justify-between px-4 h-14">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <span className="font-semibold text-lg text-foreground">Treido</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button 
            onClick={onSearchClick}
            className="p-2.5 rounded-full tap-highlight hover:bg-accent"
          >
            <Search className="w-5 h-5 text-foreground" />
          </button>
          <button className="p-2.5 rounded-full tap-highlight hover:bg-accent relative">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
          </button>
          <button className="p-2.5 rounded-full tap-highlight hover:bg-accent">
            <MessageCircle className="w-5 h-5 text-foreground" />
          </button>
          <Avatar className="w-8 h-8 ml-1">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
