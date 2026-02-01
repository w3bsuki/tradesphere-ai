import { Verified, Star } from "lucide-react";

export interface SellerData {
  id: string;
  name: string;
  avatar: string;
  coverImage: string;
  rating: number;
  followers: number;
  verified: boolean;
  listingsCount: number;
}

interface SellerCardProps {
  seller: SellerData;
  onFollow?: (id: string) => void;
  isFollowing?: boolean;
}

export function SellerCard({ seller, onFollow, isFollowing }: SellerCardProps) {
  return (
    <article className="flex-shrink-0 w-36 bg-card rounded-xl overflow-hidden shadow-card">
      {/* Cover */}
      <div className="relative h-16">
        <img 
          src={seller.coverImage} 
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Avatar */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
          <div className="relative">
            <img 
              src={seller.avatar} 
              alt={seller.name}
              className="w-10 h-10 rounded-full border-2 border-card object-cover"
            />
            {seller.verified && (
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <Verified className="w-2.5 h-2.5 text-primary-foreground" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-7 pb-3 px-3 text-center">
        <h3 className="font-semibold text-sm text-foreground line-clamp-1">
          {seller.name}
        </h3>
        
        <div className="flex items-center justify-center gap-1 mt-1">
          <Star className="w-3 h-3 text-warning fill-warning" />
          <span className="text-xs text-muted-foreground">{seller.rating}</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{seller.listingsCount} items</span>
        </div>

        <button 
          onClick={() => onFollow?.(seller.id)}
          className={`mt-2 w-full py-1.5 rounded-lg text-xs font-medium tap-highlight ${
            isFollowing 
              ? "bg-secondary text-secondary-foreground" 
              : "bg-primary text-primary-foreground"
          }`}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    </article>
  );
}
