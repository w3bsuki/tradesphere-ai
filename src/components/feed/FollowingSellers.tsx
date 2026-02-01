import { SellerCard, SellerData } from "@/components/listing/SellerCard";

const followingSellers: SellerData[] = [
  {
    id: "1",
    name: "AutoPremium",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=100&fit=crop",
    rating: 4.9,
    followers: 12500,
    verified: true,
    listingsCount: 48,
  },
  {
    id: "2",
    name: "TechStore",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop",
    rating: 4.8,
    followers: 8200,
    verified: true,
    listingsCount: 156,
  },
  {
    id: "3",
    name: "FashionHub",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&h=100&fit=crop",
    rating: 4.7,
    followers: 5600,
    verified: true,
    listingsCount: 89,
  },
  {
    id: "4",
    name: "HomeDecor",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200&h=100&fit=crop",
    rating: 4.6,
    followers: 3400,
    verified: false,
    listingsCount: 67,
  },
  {
    id: "5",
    name: "SportsGear",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1461896836934- voices?w=200&h=100&fit=crop",
    rating: 4.9,
    followers: 9100,
    verified: true,
    listingsCount: 234,
  },
];

export function FollowingSellers() {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-foreground">Shops You Follow</h2>
        <button className="text-sm text-primary font-medium tap-highlight">See all</button>
      </div>
      <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-4 px-4">
        {followingSellers.map((seller) => (
          <SellerCard key={seller.id} seller={seller} isFollowing={true} />
        ))}
      </div>
    </section>
  );
}
