import { Heart, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
}

const products: Product[] = [
  {
    id: "1",
    title: "BMW 320d M Sport 2022",
    price: 42500,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=400&fit=crop",
    location: "Bucharest",
  },
  {
    id: "2",
    title: "iPhone 15 Pro Max 256GB",
    price: 1150,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    location: "Cluj",
  },
  {
    id: "3",
    title: "Modern Apartment 2BR",
    price: 189000,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop",
    location: "Timișoara",
  },
  {
    id: "4",
    title: "MacBook Pro M3 14\"",
    price: 2199,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    location: "Iași",
  },
  {
    id: "5",
    title: "Vintage Rolex Submariner",
    price: 28500,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop",
    location: "Brașov",
  },
  {
    id: "6",
    title: "Samsung Galaxy S24 Ultra",
    price: 899,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
    location: "Bucharest",
  },
  {
    id: "7",
    title: "Nike Air Max 270",
    price: 95,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    location: "Cluj",
  },
  {
    id: "8",
    title: "Sony WH-1000XM5",
    price: 279,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    location: "Timișoara",
  },
];

function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();

  return (
    <article 
      onClick={() => navigate(`/listing/${product.id}`)}
      className="bg-card rounded-xl overflow-hidden tap-highlight cursor-pointer"
    >
      <div className="relative aspect-square">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <button 
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-background/80 flex items-center justify-center"
        >
          <Heart className="w-3.5 h-3.5 text-foreground" />
        </button>
      </div>
      <div className="p-2.5">
        <p className="font-semibold text-foreground">€{product.price.toLocaleString()}</p>
        <p className="text-xs text-foreground line-clamp-1 mt-0.5">{product.title}</p>
        <div className="flex items-center gap-1 mt-1">
          <MapPin className="w-3 h-3 text-muted-foreground" />
          <span className="text-[11px] text-muted-foreground">{product.location}</span>
        </div>
      </div>
    </article>
  );
}

export function ProductFeed() {
  return (
    <div className="px-4">
      <div className="grid grid-cols-2 gap-2.5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}