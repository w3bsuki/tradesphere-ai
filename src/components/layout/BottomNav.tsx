import { Home, Compass, Plus, Heart, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface BottomNavProps {
  onSellClick: () => void;
}

interface NavItem {
  icon: React.ElementType;
  label: string;
  path?: string;
  action?: () => void;
}

export function BottomNav({ onSellClick }: BottomNavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Compass, label: "Explore", path: "/explore" },
    { icon: Plus, label: "Sell", action: onSellClick },
    { icon: Heart, label: "Saved", path: "/saved" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  const handleClick = (item: NavItem) => {
    if (item.action) {
      item.action();
    } else if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex items-center h-16 max-w-lg mx-auto safe-bottom">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isSell = item.label === "Sell";
          const isActive = item.path === location.pathname;
          
          return (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={`flex-1 flex flex-col items-center justify-center tap-highlight ${
                isSell ? "relative" : ""
              }`}
            >
              {isSell ? (
                <div className="w-12 h-12 -mt-5 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
              ) : (
                <>
                  <Icon 
                    className={`w-5 h-5 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`} 
                  />
                  <span 
                    className={`text-[10px] font-medium mt-0.5 ${
                      isActive ? "text-primary" : "text-muted-foreground"
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
