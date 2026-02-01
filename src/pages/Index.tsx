import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { PromotedFeed } from "@/components/feed/PromotedFeed";
import { FollowingSellers } from "@/components/feed/FollowingSellers";
import { AISearchDrawer } from "@/components/search/AISearchDrawer";

const Index = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header onSearchClick={() => setSearchOpen(true)} />
      
      <main className="px-4 py-4 space-y-6">
        {/* Following Sellers Horizontal Scroll */}
        <FollowingSellers />

        {/* Promoted Listings Feed */}
        <PromotedFeed />
      </main>

      <BottomNav />
      
      <AISearchDrawer open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
};

export default Index;
