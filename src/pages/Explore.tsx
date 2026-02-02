import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, TrendingUp, MapPin, Clock, Flame, Filter } from "lucide-react";
import { ListingCard, ListingData } from "@/components/listing/ListingCard";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const categories = [
  { id: "all", label: "All", emoji: "🔥" },
  { id: "vehicles", label: "Vehicles", emoji: "🚗" },
  { id: "electronics", label: "Electronics", emoji: "📱" },
  { id: "property", label: "Property", emoji: "🏠" },
  { id: "fashion", label: "Fashion", emoji: "👗" },
  { id: "sports", label: "Sports", emoji: "⚽" },
  { id: "gaming", label: "Gaming", emoji: "🎮" },
  { id: "kids", label: "Kids", emoji: "👶" },
];

const trendingSearches = [
  "iPhone 15 Pro",
  "PS5",
  "Electric Scooter",
  "Vintage Watch",
  "Gaming Chair",
  "MacBook M3",
];

const trendingListings: ListingData[] = [
  {
    id: "t1",
    title: "Tesla Model 3 2023 - Low Miles",
    price: 38900,
    currency: "€",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: { name: "ElectroCars", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face", verified: true },
    isPromoted: true,
  },
  {
    id: "t2",
    title: "Sony PlayStation 5 + 2 Controllers",
    price: 450,
    currency: "€",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    location: "Cluj-Napoca, RO",
    seller: { name: "GameZone", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", verified: true },
  },
  {
    id: "t3",
    title: "DJI Mavic 3 Pro Drone - Like New",
    price: 1850,
    currency: "€",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop",
    location: "Timișoara, RO",
    seller: { name: "DroneHub", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", verified: true },
  },
  {
    id: "t4",
    title: "Nike Air Jordan 1 Retro High",
    price: 280,
    currency: "€",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    location: "Iași, RO",
    seller: { name: "SneakerHead", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", verified: false },
  },
];

const nearbyListings: ListingData[] = [
  {
    id: "n1",
    title: "Vintage Leather Jacket - Size M",
    price: 120,
    currency: "€",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    location: "2.3 km away",
    seller: { name: "VintageStyle", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", verified: true },
  },
  {
    id: "n2",
    title: "IKEA Desk + Chair Set",
    price: 85,
    currency: "€",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=400&fit=crop",
    location: "3.1 km away",
    seller: { name: "HomeGoods", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face", verified: false },
  },
];

const recentlyAddedListings: ListingData[] = [
  {
    id: "r1",
    title: "Canon EOS R5 + 24-70mm Lens",
    price: 3200,
    currency: "€",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    location: "Brașov, RO",
    seller: { name: "PhotoPro", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face", verified: true },
  },
  {
    id: "r2",
    title: "Herman Miller Aeron Chair",
    price: 890,
    currency: "€",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=400&fit=crop",
    location: "Constanța, RO",
    seller: { name: "OfficeLux", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", verified: true },
  },
  {
    id: "r3",
    title: "Mountain Bike - Carbon Frame",
    price: 1450,
    currency: "€",
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=400&fit=crop",
    location: "Sibiu, RO",
    seller: { name: "BikeShop", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", verified: true },
  },
  {
    id: "r4",
    title: "Apple Watch Ultra 2",
    price: 720,
    currency: "€",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
    location: "Oradea, RO",
    seller: { name: "TechDeals", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", verified: true },
  },
];

export default function Explore() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border safe-top">
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => navigate(-1)} className="tap-highlight">
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Explore</h1>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-3 flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-muted border-0"
            />
          </div>
          <button className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center tap-highlight">
            <Filter className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="px-4 pb-3 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full whitespace-nowrap text-sm font-medium tap-highlight transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="px-4 py-4 space-y-6">
        {/* Trending Searches */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-primary" />
            <h2 className="font-semibold text-foreground">Trending Searches</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((term) => (
              <Badge
                key={term}
                variant="secondary"
                className="px-3 py-1.5 cursor-pointer tap-highlight hover:bg-accent"
              >
                {term}
              </Badge>
            ))}
          </div>
        </section>

        {/* Hot Right Now */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-primary" />
              <h2 className="font-semibold text-foreground">Hot Right Now</h2>
            </div>
            <button className="text-sm text-primary font-medium tap-highlight">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {trendingListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>

        {/* Near You */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <h2 className="font-semibold text-foreground">Near You</h2>
            </div>
            <button className="text-sm text-primary font-medium tap-highlight">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {nearbyListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>

        {/* Recently Added */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <h2 className="font-semibold text-foreground">Recently Added</h2>
            </div>
            <button className="text-sm text-primary font-medium tap-highlight">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {recentlyAddedListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
