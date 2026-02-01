import { Home, Compass, Plus, Heart, User } from "lucide-react";

interface NavItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", active: true },
  { icon: Compass, label: "Explore" },
  { icon: Plus, label: "Sell" },
  { icon: Heart, label: "Saved" },
  { icon: User, label: "Profile" },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isSell = item.label === "Sell";
          
          return (
            <button
              key={item.label}
              className={`flex flex-col items-center justify-center gap-0.5 tap-highlight ${
                isSell ? "relative -mt-4" : "py-2 px-4"
              }`}
            >
              {isSell ? (
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
              ) : (
                <>
                  <Icon 
                    className={`w-5 h-5 ${
                      item.active ? "text-primary" : "text-muted-foreground"
                    }`} 
                  />
                  <span 
                    className={`text-[10px] font-medium ${
                      item.active ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
