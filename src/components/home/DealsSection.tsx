import { Zap } from "lucide-react";
import { ListingCard, ListingData } from "@/components/listing/ListingCard";

const dealsListings: ListingData[] = [
  {
    id: "d1",
    title: "Samsung Galaxy S24 Ultra",
    price: 899,
    originalPrice: 1199,
    currency: "€",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: { 
      name: "TechDeals", 
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face", 
      verified: true 
    },
    isPromoted: true,
    discount: 25,
  },
  {
    id: "d2",
    title: "Nike Air Max 270 - New",
    price: 95,
    originalPrice: 150,
    currency: "€",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    location: "Cluj, RO",
    seller: { 
      name: "SneakerHub", 
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", 
      verified: true 
    },
    discount: 37,
  },
  {
    id: "d3",
    title: "Sony WH-1000XM5 Headphones",
    price: 279,
    originalPrice: 399,
    currency: "€",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    location: "Timișoara, RO",
    seller: { 
      name: "AudioPro", 
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", 
      verified: true 
    },
    discount: 30,
  },
  {
    id: "d4",
    title: "Apple iPad Pro 11\" M2",
    price: 749,
    originalPrice: 899,
    currency: "€",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    location: "Iași, RO",
    seller: { 
      name: "AppleStore", 
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", 
      verified: true 
    },
    discount: 17,
  },
];

export function DealsSection() {
  return (
    <section className="px-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Today's Deals</h2>
        </div>
        <button className="text-sm text-primary font-medium tap-highlight">See all</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {dealsListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}
