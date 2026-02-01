import { ListingCard, ListingData } from "@/components/listing/ListingCard";

const promotedListings: ListingData[] = [
  {
    id: "1",
    title: "BMW 320d M Sport 2022 - Full Options",
    price: 42500,
    currency: "€",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: {
      name: "AutoPremium",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    isPromoted: true,
  },
  {
    id: "2",
    title: "iPhone 15 Pro Max 256GB - Like New",
    price: 1150,
    currency: "€",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    location: "Cluj-Napoca, RO",
    seller: {
      name: "TechStore",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    isPromoted: true,
  },
  {
    id: "3",
    title: "Modern Apartment 2BR - City Center",
    price: 189000,
    currency: "€",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop",
    location: "Timișoara, RO",
    seller: {
      name: "RealEstate Pro",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    isPromoted: true,
  },
  {
    id: "4",
    title: "MacBook Pro M3 14\" - Brand New",
    price: 2199,
    currency: "€",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    location: "Iași, RO",
    seller: {
      name: "AppleZone",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    isPromoted: true,
  },
  {
    id: "5",
    title: "Vintage Rolex Submariner 1969",
    price: 28500,
    currency: "€",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop",
    location: "Brașov, RO",
    seller: {
      name: "LuxuryWatch",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    isPromoted: true,
    isSaved: true,
  },
  {
    id: "6",
    title: "Designer Sofa - Italian Leather",
    price: 3200,
    currency: "€",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    location: "Constanța, RO",
    seller: {
      name: "FurnitureLux",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      verified: false,
    },
    isPromoted: true,
  },
];

export function PromotedFeed() {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-foreground">Featured Listings</h2>
        <button className="text-sm text-primary font-medium tap-highlight">See all</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {promotedListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}
