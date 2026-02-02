import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, Settings, Share2, MapPin, Calendar, Star, 
  Verified, Users, Package, MessageSquare, ChevronRight,
  Bell, Shield, CreditCard, HelpCircle, LogOut, Moon, Globe
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { ListingCard, ListingData } from "@/components/listing/ListingCard";
import { BottomNav } from "@/components/layout/BottomNav";
import { SellDrawer } from "@/components/sell/SellDrawer";

const userProfile = {
  id: "u1",
  name: "Alex Johnson",
  username: "@alexj",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  bio: "Tech enthusiast & collector. Buying and selling quality electronics since 2019.",
  location: "Bucharest, Romania",
  joinDate: "March 2019",
  verified: true,
  rating: 4.9,
  reviewCount: 156,
  followers: 1243,
  following: 89,
  listingsCount: 24,
  soldCount: 187,
};

const userListings: ListingData[] = [
  {
    id: "ul1",
    title: "MacBook Pro M2 14\" - Perfect Condition",
    price: 1850,
    currency: "€",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: { name: userProfile.name, avatar: userProfile.avatar, verified: true },
    isPromoted: true,
  },
  {
    id: "ul2",
    title: "Sony WH-1000XM5 Headphones",
    price: 280,
    currency: "€",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: { name: userProfile.name, avatar: userProfile.avatar, verified: true },
  },
  {
    id: "ul3",
    title: "iPad Pro 12.9\" + Magic Keyboard",
    price: 950,
    currency: "€",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: { name: userProfile.name, avatar: userProfile.avatar, verified: true },
  },
  {
    id: "ul4",
    title: "Apple Watch Series 9",
    price: 380,
    currency: "€",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
    location: "Bucharest, RO",
    seller: { name: userProfile.name, avatar: userProfile.avatar, verified: true },
  },
];

const reviews = [
  { id: "r1", user: "Maria S.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", rating: 5, text: "Excellent seller! Fast shipping and item exactly as described.", date: "2 days ago" },
  { id: "r2", user: "John D.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", rating: 5, text: "Great communication and fair price. Highly recommend!", date: "1 week ago" },
  { id: "r3", user: "Elena P.", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face", rating: 4, text: "Good experience overall. Product was in great condition.", date: "2 weeks ago" },
];

const followers = [
  { id: "f1", name: "TechStore", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face", verified: true, followersCount: 5420 },
  { id: "f2", name: "Maria Santos", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", verified: false, followersCount: 234 },
  { id: "f3", name: "GameZone", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", verified: true, followersCount: 8901 },
  { id: "f4", name: "PhotoPro", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", verified: true, followersCount: 3456 },
];

const settingsItems = [
  { icon: Bell, label: "Notifications", description: "Manage alerts and updates", hasToggle: true },
  { icon: Shield, label: "Privacy & Security", description: "Password, 2FA, data settings" },
  { icon: CreditCard, label: "Payment Methods", description: "Cards, wallets, billing" },
  { icon: Globe, label: "Language & Region", description: "English, Romania" },
  { icon: Moon, label: "Dark Mode", description: "Switch appearance", hasToggle: true },
  { icon: HelpCircle, label: "Help & Support", description: "FAQs, contact us" },
  { icon: LogOut, label: "Log Out", description: "Sign out of your account", danger: true },
];

export default function Profile() {
  const navigate = useNavigate();
  const [sellOpen, setSellOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("listings");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border safe-top">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="tap-highlight">
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Profile</h1>
          <div className="flex items-center gap-2">
            <button className="tap-highlight p-2">
              <Share2 className="w-5 h-5 text-foreground" />
            </button>
            <button className="tap-highlight p-2">
              <Settings className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Profile Header */}
      <div className="px-4 py-6">
        <div className="flex items-start gap-4">
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-primary"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-foreground">{userProfile.name}</h2>
              {userProfile.verified && (
                <Verified className="w-5 h-5 text-primary" />
              )}
            </div>
            <p className="text-sm text-muted-foreground">{userProfile.username}</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-medium text-foreground">{userProfile.rating}</span>
              <span className="text-sm text-muted-foreground">({userProfile.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-foreground">{userProfile.bio}</p>

        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{userProfile.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Joined {userProfile.joinDate}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6 p-4 bg-muted rounded-xl">
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">{userProfile.listingsCount}</p>
            <p className="text-xs text-muted-foreground">Listings</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">{userProfile.soldCount}</p>
            <p className="text-xs text-muted-foreground">Sold</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">{userProfile.followers.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">{userProfile.following}</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="flex-1 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium tap-highlight">
            Edit Profile
          </button>
          <button className="flex-1 py-2.5 rounded-xl bg-muted text-foreground font-medium tap-highlight">
            Share Profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="px-4">
        <TabsList className="w-full grid grid-cols-4 bg-muted">
          <TabsTrigger value="listings" className="text-xs">
            <Package className="w-4 h-4 mr-1" />
            Listings
          </TabsTrigger>
          <TabsTrigger value="reviews" className="text-xs">
            <Star className="w-4 h-4 mr-1" />
            Reviews
          </TabsTrigger>
          <TabsTrigger value="followers" className="text-xs">
            <Users className="w-4 h-4 mr-1" />
            Followers
          </TabsTrigger>
          <TabsTrigger value="settings" className="text-xs">
            <Settings className="w-4 h-4 mr-1" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="listings" className="mt-4">
          <div className="grid grid-cols-2 gap-3">
            {userListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-4 space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 bg-card rounded-xl border border-border">
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium text-foreground">{review.user}</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
              <p className="mt-3 text-sm text-foreground">{review.text}</p>
            </div>
          ))}
          <button className="w-full py-3 text-sm text-primary font-medium tap-highlight">
            See all reviews
          </button>
        </TabsContent>

        <TabsContent value="followers" className="mt-4 space-y-3">
          {followers.map((follower) => (
            <div key={follower.id} className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
              <img
                src={follower.avatar}
                alt={follower.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <p className="font-medium text-foreground">{follower.name}</p>
                  {follower.verified && <Verified className="w-4 h-4 text-primary" />}
                </div>
                <p className="text-xs text-muted-foreground">{follower.followersCount.toLocaleString()} followers</p>
              </div>
              <button className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium tap-highlight">
                Follow
              </button>
            </div>
          ))}
          <button className="w-full py-3 text-sm text-primary font-medium tap-highlight">
            See all followers
          </button>
        </TabsContent>

        <TabsContent value="settings" className="mt-4 space-y-2 pb-4">
          {settingsItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 p-4 bg-card rounded-xl border border-border tap-highlight ${
                  item.danger ? "text-destructive" : ""
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  item.danger ? "bg-destructive/10" : "bg-muted"
                }`}>
                  <Icon className={`w-5 h-5 ${item.danger ? "text-destructive" : "text-foreground"}`} />
                </div>
                <div className="flex-1 text-left">
                  <p className={`font-medium ${item.danger ? "text-destructive" : "text-foreground"}`}>
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
                {item.hasToggle ? (
                  <Switch />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            );
          })}
        </TabsContent>
      </Tabs>

      <BottomNav onSellClick={() => setSellOpen(true)} />
      <SellDrawer open={sellOpen} onOpenChange={setSellOpen} />
    </div>
  );
}