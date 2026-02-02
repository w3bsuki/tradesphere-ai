import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  ArrowLeft, Share2, MoreHorizontal, MapPin, Calendar, Star, 
  Verified, Users, Package, MessageSquare, ShieldCheck, Clock,
  TrendingUp, Award, Heart
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ListingCard, ListingData } from "@/components/listing/ListingCard";
import { BottomNav } from "@/components/layout/BottomNav";
import { SellDrawer } from "@/components/sell/SellDrawer";

// Mock seller data - in production this would come from API
const sellerData = {
  id: "s1",
  name: "TechStore Premium",
  username: "@techstore",
  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
  coverImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=300&fit=crop",
  bio: "Your trusted source for premium electronics. Official reseller for Apple, Samsung, and Sony products. Fast shipping & 30-day returns.",
  location: "Bucharest, Romania",
  joinDate: "January 2018",
  verified: true,
  isPro: true,
  rating: 4.9,
  reviewCount: 2847,
  followers: 12453,
  following: 156,
  listingsCount: 89,
  soldCount: 4521,
  responseTime: "Usually within 1 hour",
  responseRate: 98,
  badges: ["Top Seller", "Fast Shipper", "Trusted"],
};

const sellerListings: ListingData[] = [
  {
    id: "sl1",
    title: "iPhone 15 Pro Max 256GB - Sealed",
    price: 1299,
    currency: "€",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: { name: sellerData.name, avatar: sellerData.avatar, verified: true },
    isPromoted: true,
  },
  {
    id: "sl2",
    title: "MacBook Pro M3 Max 16\" 64GB",
    price: 3899,
    currency: "€",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: { name: sellerData.name, avatar: sellerData.avatar, verified: true },
    isPromoted: true,
  },
  {
    id: "sl3",
    title: "Sony WH-1000XM5 Wireless",
    price: 329,
    currency: "€",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: { name: sellerData.name, avatar: sellerData.avatar, verified: true },
  },
  {
    id: "sl4",
    title: "iPad Pro 12.9\" M2 WiFi 256GB",
    price: 1149,
    currency: "€",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: { name: sellerData.name, avatar: sellerData.avatar, verified: true },
  },
  {
    id: "sl5",
    title: "Apple Watch Ultra 2 - New",
    price: 799,
    currency: "€",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: { name: sellerData.name, avatar: sellerData.avatar, verified: true },
  },
  {
    id: "sl6",
    title: "Samsung Galaxy S24 Ultra 512GB",
    price: 1199,
    currency: "€",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: { name: sellerData.name, avatar: sellerData.avatar, verified: true },
  },
];

const reviews = [
  { id: "r1", user: "Alexandra M.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", rating: 5, text: "Amazing experience! Product was brand new and sealed. Super fast delivery. Will definitely buy again!", date: "1 day ago", product: "iPhone 15 Pro Max" },
  { id: "r2", user: "Mihai P.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", rating: 5, text: "Best tech store on the platform. Competitive prices and excellent customer service.", date: "3 days ago", product: "MacBook Pro M3" },
  { id: "r3", user: "Elena R.", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face", rating: 5, text: "Very responsive seller. Answered all my questions before purchase. Highly recommended!", date: "1 week ago", product: "iPad Pro" },
  { id: "r4", user: "Andrei C.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", rating: 4, text: "Great product, packaging was perfect. Shipping took a bit longer than expected but worth the wait.", date: "2 weeks ago", product: "Sony Headphones" },
];

const followers = [
  { id: "f1", name: "Maria Santos", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", verified: false },
  { id: "f2", name: "GameZone Official", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", verified: true },
  { id: "f3", name: "PhotoPro Studio", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", verified: true },
  { id: "f4", name: "Alex Johnson", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", verified: false },
  { id: "f5", name: "StyleHub", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face", verified: true },
];

export default function Seller() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [sellOpen, setSellOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("listings");
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Cover Image */}
      <div className="relative h-32">
        <img
          src={sellerData.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        
        {/* Header Actions */}
        <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 safe-top">
          <button 
            onClick={() => navigate(-1)} 
            className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center tap-highlight"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center tap-highlight">
              <Share2 className="w-5 h-5 text-foreground" />
            </button>
            <button className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center tap-highlight">
              <MoreHorizontal className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </header>
      </div>

      {/* Profile Header */}
      <div className="px-4 pb-4 -mt-10 relative">
        <div className="flex items-end gap-4">
          <img
            src={sellerData.avatar}
            alt={sellerData.name}
            className="w-24 h-24 rounded-2xl object-cover border-4 border-background shadow-lg"
          />
          <div className="flex-1 pb-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-bold text-foreground">{sellerData.name}</h1>
              {sellerData.verified && <Verified className="w-5 h-5 text-primary" />}
              {sellerData.isPro && (
                <Badge className="bg-gradient-to-r from-primary to-orange-500 text-white text-[10px] px-2">
                  PRO
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{sellerData.username}</p>
          </div>
        </div>

        {/* Rating & Response */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="font-semibold text-foreground">{sellerData.rating}</span>
            <span className="text-sm text-muted-foreground">({sellerData.reviewCount.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{sellerData.responseTime}</span>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {sellerData.badges.map((badge) => (
            <Badge key={badge} variant="secondary" className="gap-1">
              {badge === "Top Seller" && <Award className="w-3 h-3" />}
              {badge === "Fast Shipper" && <TrendingUp className="w-3 h-3" />}
              {badge === "Trusted" && <ShieldCheck className="w-3 h-3" />}
              {badge}
            </Badge>
          ))}
        </div>

        <p className="mt-4 text-sm text-foreground leading-relaxed">{sellerData.bio}</p>

        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{sellerData.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Since {sellerData.joinDate}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-2 mt-5">
          <div className="text-center p-3 bg-muted rounded-xl">
            <p className="text-lg font-bold text-foreground">{sellerData.listingsCount}</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Listings</p>
          </div>
          <div className="text-center p-3 bg-muted rounded-xl">
            <p className="text-lg font-bold text-foreground">{sellerData.soldCount.toLocaleString()}</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Sold</p>
          </div>
          <div className="text-center p-3 bg-muted rounded-xl">
            <p className="text-lg font-bold text-foreground">{sellerData.followers.toLocaleString()}</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Followers</p>
          </div>
          <div className="text-center p-3 bg-muted rounded-xl">
            <p className="text-lg font-bold text-foreground">{sellerData.responseRate}%</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Response</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-5">
          <button 
            onClick={() => setIsFollowing(!isFollowing)}
            className={`flex-1 py-3 rounded-xl font-semibold tap-highlight flex items-center justify-center gap-2 transition-colors ${
              isFollowing 
                ? "bg-muted text-foreground border border-border" 
                : "bg-primary text-primary-foreground"
            }`}
          >
            {isFollowing ? (
              <>
                <Heart className="w-4 h-4 fill-primary text-primary" />
                Following
              </>
            ) : (
              <>
                <Heart className="w-4 h-4" />
                Follow
              </>
            )}
          </button>
          <button className="flex-1 py-3 rounded-xl bg-muted text-foreground font-semibold tap-highlight flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Message
          </button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="px-4">
        <TabsList className="w-full grid grid-cols-3 bg-muted h-11">
          <TabsTrigger value="listings" className="data-[state=active]:bg-background">
            <Package className="w-4 h-4 mr-1.5" />
            Shop
          </TabsTrigger>
          <TabsTrigger value="reviews" className="data-[state=active]:bg-background">
            <Star className="w-4 h-4 mr-1.5" />
            Reviews
          </TabsTrigger>
          <TabsTrigger value="followers" className="data-[state=active]:bg-background">
            <Users className="w-4 h-4 mr-1.5" />
            Followers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="listings" className="mt-4">
          {/* Sort/Filter Bar */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">{sellerData.listingsCount} items</p>
            <button className="text-sm text-primary font-medium tap-highlight">
              Sort by: Newest
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {sellerListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          <button className="w-full py-4 mt-4 text-sm text-primary font-medium tap-highlight">
            Load more items
          </button>
        </TabsContent>

        <TabsContent value="reviews" className="mt-4">
          {/* Reviews Summary */}
          <div className="flex items-center gap-4 p-4 bg-muted rounded-xl mb-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">{sellerData.rating}</p>
              <div className="flex items-center justify-center gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{sellerData.reviewCount.toLocaleString()} reviews</p>
            </div>
            <div className="flex-1 space-y-1.5">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-3">{stars}</span>
                  <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: stars === 5 ? "85%" : stars === 4 ? "12%" : "3%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review List */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-4 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-3">
                  <img
                    src={review.avatar}
                    alt={review.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-foreground">{review.user}</p>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Purchased: {review.product}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-foreground leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
          <button className="w-full py-4 mt-4 text-sm text-primary font-medium tap-highlight">
            See all {sellerData.reviewCount.toLocaleString()} reviews
          </button>
        </TabsContent>

        <TabsContent value="followers" className="mt-4">
          <p className="text-sm text-muted-foreground mb-4">
            {sellerData.followers.toLocaleString()} people follow this seller
          </p>
          <div className="space-y-3">
            {followers.map((follower) => (
              <div key={follower.id} className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
                <img
                  src={follower.avatar}
                  alt={follower.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-foreground truncate">{follower.name}</p>
                    {follower.verified && <Verified className="w-4 h-4 text-primary flex-shrink-0" />}
                  </div>
                </div>
                <button className="px-4 py-1.5 rounded-full bg-muted text-foreground text-sm font-medium tap-highlight">
                  View
                </button>
              </div>
            ))}
          </div>
          <button className="w-full py-4 mt-4 text-sm text-primary font-medium tap-highlight">
            See all followers
          </button>
        </TabsContent>
      </Tabs>

      <BottomNav onSellClick={() => setSellOpen(true)} />
      <SellDrawer open={sellOpen} onOpenChange={setSellOpen} />
    </div>
  );
}