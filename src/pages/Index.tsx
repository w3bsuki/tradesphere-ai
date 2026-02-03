import { useState } from "react";
import { Bell, MessageCircle, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BottomNav } from "@/components/layout/BottomNav";
import { HeroSearch } from "@/components/home/HeroSearch";
import { CategoryCircles } from "@/components/home/CategoryCircles";
import { ProductFeed } from "@/components/feed/ProductFeed";
import { AISearchDrawer } from "@/components/search/AISearchDrawer";
import { SellDrawer } from "@/components/sell/SellDrawer";

const Index = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Minimal Header */}
      <header className="sticky top-0 z-40 bg-background border-b border-border safe-top">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">T</span>
            </div>
            <span className="font-semibold text-foreground">Treido</span>
          </div>

          <div className="flex items-center gap-0.5">
            <button className="p-2 rounded-full tap-highlight relative">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <span className="text-[9px] font-bold text-primary-foreground">3</span>
              </span>
            </button>
            <button className="p-2 rounded-full tap-highlight relative">
              <Bell className="w-5 h-5 text-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
            </button>
            <button className="p-2 rounded-full tap-highlight">
              <MessageCircle className="w-5 h-5 text-foreground" />
            </button>
            <Avatar className="w-7 h-7 ml-1">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      
      <main>
        <HeroSearch onClick={() => setSearchOpen(true)} />
        <CategoryCircles />
        <ProductFeed />
      </main>

      <BottomNav onSellClick={() => setSellOpen(true)} />
      <AISearchDrawer open={searchOpen} onOpenChange={setSearchOpen} />
      <SellDrawer open={sellOpen} onOpenChange={setSellOpen} />
    </div>
  );
};

export default Index;
