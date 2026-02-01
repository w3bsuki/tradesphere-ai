import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ChevronLeft, Heart, Share2, MapPin, Clock, Eye, Shield, 
  MessageCircle, Phone, Star, Verified, ChevronRight, Truck,
  Flag
} from "lucide-react";
import { ListingCard } from "@/components/listing/ListingCard";

// Mock data - in production this would come from API
const listingData = {
  id: "1",
  title: "BMW 320d M Sport 2022 - Full Options Package",
  price: 42500,
  currency: "€",
  images: [
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
  ],
  location: "Bucharest, Romania",
  postedAt: "2 days ago",
  views: 1247,
  condition: "Like New",
  description: `Beautiful BMW 320d M Sport from 2022, in excellent condition. Full service history at official BMW dealer.

Features include:
• M Sport Package with aerodynamic kit
• 19" M Sport alloy wheels
• Leather Dakota interior
• BMW Live Cockpit Professional
• Parking Assistant Plus with surround view
• Harman Kardon sound system
• Adaptive LED headlights

Only 28,000 km, always garaged, non-smoker. All maintenance up to date. New tires fitted in January 2024.

Price slightly negotiable for serious buyers. Test drive welcome with appointment.`,
  negotiable: true,
  shippingAvailable: false,
  seller: {
    id: "s1",
    name: "AutoPremium",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    verified: true,
    rating: 4.9,
    reviewCount: 127,
    responseTime: "Usually responds within 1 hour",
    memberSince: "2019",
    listingsCount: 48,
  },
  category: "Vehicles",
  subcategory: "Cars",
};

const similarListings = [
  {
    id: "s1",
    title: "Mercedes C300 AMG Line 2021",
    price: 39900,
    currency: "€",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=400&fit=crop",
    location: "Cluj-Napoca, RO",
    seller: { name: "CarHub", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100", verified: true },
  },
  {
    id: "s2",
    title: "Audi A4 S-Line 2023",
    price: 44500,
    currency: "€",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=400&fit=crop",
    location: "Timișoara, RO",
    seller: { name: "Premium Auto", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", verified: true },
  },
  {
    id: "s3",
    title: "BMW 520d xDrive 2022",
    price: 48900,
    currency: "€",
    image: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=400&h=400&fit=crop",
    location: "Brașov, RO",
    seller: { name: "AutoPremium", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100", verified: true },
  },
  {
    id: "s4",
    title: "Volkswagen Passat R-Line",
    price: 32500,
    currency: "€",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&h=400&fit=crop",
    location: "Iași, RO",
    seller: { name: "VW Center", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", verified: false },
  },
];

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const listing = listingData; // In production: fetch by id

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Image Gallery */}
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={listing.images[currentImageIndex]}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation overlay */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 safe-top">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center tap-highlight"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center tap-highlight"
            >
              <Heart className={`w-5 h-5 ${isSaved ? "fill-primary text-primary" : "text-foreground"}`} />
            </button>
            <button className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center tap-highlight">
              <Share2 className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-sm font-medium text-foreground">
          {currentImageIndex + 1} / {listing.images.length}
        </div>

        {/* Thumbnail strip */}
        <div className="absolute bottom-4 left-4 right-20 flex gap-2 overflow-x-auto hide-scrollbar">
          {listing.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 ${
                index === currentImageIndex ? "border-primary" : "border-transparent"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4 space-y-4">
        {/* Price & Title */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="text-2xl font-bold text-foreground">
              {listing.currency}{listing.price.toLocaleString()}
            </p>
            {listing.negotiable && (
              <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium">
                Negotiable
              </span>
            )}
          </div>
          <h1 className="text-lg font-semibold text-foreground leading-tight">
            {listing.title}
          </h1>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {listing.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {listing.postedAt}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {listing.views.toLocaleString()} views
          </span>
        </div>

        {/* Quick badges */}
        <div className="flex gap-2">
          <span className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            {listing.condition}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            {listing.subcategory}
          </span>
          {listing.shippingAvailable && (
            <span className="px-3 py-1.5 rounded-full bg-success/10 text-success text-sm font-medium flex items-center gap-1">
              <Truck className="w-3.5 h-3.5" />
              Shipping
            </span>
          )}
        </div>

        {/* Seller Card */}
        <div className="bg-card rounded-2xl border border-border p-4">
          <div className="flex items-start gap-3">
            <img
              src={listing.seller.avatar}
              alt={listing.seller.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className="font-semibold text-foreground">{listing.seller.name}</h3>
                {listing.seller.verified && (
                  <Verified className="w-4 h-4 text-primary" />
                )}
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <Star className="w-3.5 h-3.5 text-warning fill-warning" />
                <span className="text-sm font-medium text-foreground">{listing.seller.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({listing.seller.reviewCount} reviews)
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {listing.seller.responseTime}
              </p>
            </div>
            <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium tap-highlight">
              Follow
            </button>
          </div>

          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border text-sm">
            <div className="text-center">
              <p className="font-semibold text-foreground">{listing.seller.listingsCount}</p>
              <p className="text-xs text-muted-foreground">Listings</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">{listing.seller.reviewCount}</p>
              <p className="text-xs text-muted-foreground">Reviews</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">{listing.seller.memberSince}</p>
              <p className="text-xs text-muted-foreground">Member since</p>
            </div>
            <button className="ml-auto flex items-center gap-1 text-primary font-medium tap-highlight">
              View Profile
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="bg-card rounded-2xl border border-border p-4">
          <h2 className="font-semibold text-foreground mb-3">Description</h2>
          <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
            {listing.description}
          </p>
        </div>

        {/* Safety tips */}
        <div className="bg-primary/5 rounded-2xl p-4 flex gap-3">
          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-foreground text-sm">Safety Tips</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Meet in public places, inspect items before payment, and use secure payment methods.
            </p>
          </div>
        </div>

        {/* Report */}
        <button className="flex items-center justify-center gap-2 w-full py-3 text-sm text-muted-foreground tap-highlight">
          <Flag className="w-4 h-4" />
          Report this listing
        </button>

        {/* Similar Items */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Similar Items</h2>
            <button className="text-sm text-primary font-medium tap-highlight">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {similarListings.map((item) => (
              <ListingCard key={item.id} listing={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 safe-bottom">
        <div className="flex gap-3 max-w-lg mx-auto">
          <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-semibold tap-highlight">
            <Phone className="w-5 h-5" />
            Call
          </button>
          <button className="flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold tap-highlight">
            <MessageCircle className="w-5 h-5" />
            Message Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
