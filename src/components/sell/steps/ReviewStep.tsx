import { MapPin, Truck, MessageCircle, Tag, Package } from "lucide-react";
import { ListingFormData } from "../SellDrawer";

interface ReviewStepProps {
  formData: ListingFormData;
}

const conditionLabels: Record<string, string> = {
  new: "New",
  "like-new": "Like New",
  good: "Good",
  fair: "Fair",
  parts: "For Parts",
};

export function ReviewStep({ formData }: ReviewStepProps) {
  return (
    <div className="p-4 space-y-6">
      <div className="text-center mb-2">
        <h3 className="font-semibold text-foreground mb-1">Review your listing</h3>
        <p className="text-sm text-muted-foreground">
          Make sure everything looks good before publishing
        </p>
      </div>

      {/* Preview Card */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
        {/* Main Image */}
        {formData.photos.length > 0 && (
          <div className="relative aspect-[4/3]">
            <img
              src={formData.photos[0]}
              alt={formData.title}
              className="w-full h-full object-cover"
            />
            {formData.photos.length > 1 && (
              <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                +{formData.photos.length - 1} photos
              </div>
            )}
          </div>
        )}

        <div className="p-4 space-y-3">
          {/* Price */}
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-foreground">
              {formData.currency}{Number(formData.price).toLocaleString()}
            </p>
            {formData.negotiable && (
              <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                Negotiable
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="font-semibold text-foreground text-lg leading-tight">
            {formData.title || "Untitled Listing"}
          </h2>

          {/* Details row */}
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {formData.subcategory || formData.category}
            </span>
            <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium flex items-center gap-1">
              <Package className="w-3 h-3" />
              {conditionLabels[formData.condition] || "Not specified"}
            </span>
          </div>

          {/* Location & Shipping */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {formData.location || "Not specified"}
            </span>
            {formData.shippingAvailable && (
              <span className="flex items-center gap-1 text-success">
                <Truck className="w-4 h-4" />
                Shipping
              </span>
            )}
          </div>

          {/* Description preview */}
          {formData.description && (
            <div className="pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {formData.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="p-4 rounded-xl bg-secondary/50 space-y-2">
        <h4 className="font-medium text-foreground text-sm">Listing Summary</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-muted-foreground">Category</div>
          <div className="text-foreground font-medium text-right">{formData.subcategory}</div>
          
          <div className="text-muted-foreground">Condition</div>
          <div className="text-foreground font-medium text-right">{conditionLabels[formData.condition]}</div>
          
          <div className="text-muted-foreground">Photos</div>
          <div className="text-foreground font-medium text-right">{formData.photos.length} uploaded</div>
          
          <div className="text-muted-foreground">Price</div>
          <div className="text-foreground font-medium text-right">
            {formData.currency}{Number(formData.price).toLocaleString()}
            {formData.negotiable && " (negotiable)"}
          </div>
        </div>
      </div>

      <p className="text-xs text-center text-muted-foreground">
        By publishing, you agree to our Terms of Service and Selling Guidelines
      </p>
    </div>
  );
}
