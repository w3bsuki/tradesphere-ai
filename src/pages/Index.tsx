import { useState } from "react";
import { Bell, MessageCircle, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BottomNav } from "@/components/layout/BottomNav";
import { HeroSearch } from "@/components/home/HeroSearch";
import { CategoryCircles } from "@/components/home/CategoryCircles";
import { PromotedFeed } from "@/components/feed/PromotedFeed";
import { DealsSection } from "@/components/home/DealsSection";
import { FollowingSellers } from "@/components/feed/FollowingSellers";
import { AISearchDrawer } from "@/components/search/AISearchDrawer";
import { SellDrawer } from "@/components/sell/SellDrawer";

const Index = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Minimal Header - Logo + Actions only */}
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
            <button className="p-2.5 rounded-full tap-highlight hover:bg-accent relative">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold text-primary-foreground">3</span>
              </span>
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
      
      <main className="space-y-5 py-2">
        {/* AI Search Hero */}
        <HeroSearch onClick={() => setSearchOpen(true)} />

        {/* Category Circles */}
        <CategoryCircles />

        {/* Promoted Listings */}
        <PromotedFeed />

        {/* Deals Section */}
        <DealsSection />

        {/* Shops You Follow */}
        <div className="px-4">
          <FollowingSellers />
        </div>
      </main>

      <BottomNav onSellClick={() => setSellOpen(true)} />
      
      <AISearchDrawer open={searchOpen} onOpenChange={setSearchOpen} />
      <SellDrawer open={sellOpen} onOpenChange={setSellOpen} />
    </div>
  );
};

export default Index;
