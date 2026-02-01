import { Heart, MapPin, Verified } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export interface ListingData {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
  location: string;
  seller: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  isPromoted?: boolean;
  isSaved?: boolean;
}

interface ListingCardProps {
  listing: ListingData;
  onSave?: (id: string) => void;
}

export function ListingCard({ listing, onSave }: ListingCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/listing/${listing.id}`);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSave?.(listing.id);
  };

  return (
    <article 
      onClick={handleClick}
      className={`relative bg-card rounded-xl overflow-hidden shadow-card cursor-pointer tap-highlight ${
        listing.isPromoted ? "promoted-glow ring-1 ring-primary/20" : ""
      }`}
    >
      {/* Image */}
      <div className="relative aspect-square">
        <img 
          src={listing.image} 
          alt={listing.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Save button */}
        <button 
          onClick={handleSave}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center tap-highlight"
        >
          <Heart 
            className={`w-4 h-4 ${listing.isSaved ? "fill-primary text-primary" : "text-foreground"}`} 
          />
        </button>

        {/* Promoted badge */}
        {listing.isPromoted && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] px-2 py-0.5">
            Promoted
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Price */}
        <p className="font-bold text-lg text-foreground">
          {listing.currency}{listing.price.toLocaleString()}
        </p>
        
        {/* Title */}
        <h3 className="text-sm text-foreground line-clamp-1 mt-0.5">
          {listing.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 mt-1.5">
          <MapPin className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{listing.location}</span>
        </div>

        {/* Seller */}
        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border">
          <img 
            src={listing.seller.avatar} 
            alt={listing.seller.name}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            {listing.seller.name}
            {listing.seller.verified && (
              <Verified className="w-3 h-3 text-primary" />
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
