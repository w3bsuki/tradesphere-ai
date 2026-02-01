import { MapPin, Truck, MessageCircle } from "lucide-react";
import { ListingFormData } from "../SellDrawer";

interface PricingStepProps {
  formData: ListingFormData;
  updateFormData: (updates: Partial<ListingFormData>) => void;
}

const currencies = ["€", "$", "£", "RON"];

const popularLocations = [
  "Bucharest, RO",
  "Cluj-Napoca, RO",
  "Timișoara, RO",
  "Iași, RO",
  "Constanța, RO",
  "Brașov, RO",
];

export function PricingStep({ formData, updateFormData }: PricingStepProps) {
  return (
    <div className="p-4 space-y-6">
      {/* Price */}
      <div>
        <label className="block font-medium text-foreground mb-2">
          Price <span className="text-destructive">*</span>
        </label>
        <div className="flex gap-2">
          <select
            value={formData.currency}
            onChange={(e) => updateFormData({ currency: e.target.value })}
            className="px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {currencies.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => updateFormData({ price: e.target.value })}
            placeholder="0"
            min="0"
            className="flex-1 px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-lg font-semibold"
          />
        </div>
      </div>

      {/* Negotiable toggle */}
      <button
        onClick={() => updateFormData({ negotiable: !formData.negotiable })}
        className={`w-full flex items-center justify-between p-4 rounded-xl border tap-highlight ${
          formData.negotiable
            ? "bg-primary/10 border-primary"
            : "bg-card border-border"
        }`}
      >
        <div className="flex items-center gap-3">
          <MessageCircle className={`w-5 h-5 ${formData.negotiable ? "text-primary" : "text-muted-foreground"}`} />
          <div className="text-left">
            <p className={`font-medium ${formData.negotiable ? "text-primary" : "text-foreground"}`}>
              Price negotiable
            </p>
            <p className="text-xs text-muted-foreground">Allow buyers to make offers</p>
          </div>
        </div>
        <div
          className={`w-12 h-7 rounded-full p-1 transition-colors ${
            formData.negotiable ? "bg-primary" : "bg-secondary"
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
              formData.negotiable ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </div>
      </button>

      {/* Shipping toggle */}
      <button
        onClick={() => updateFormData({ shippingAvailable: !formData.shippingAvailable })}
        className={`w-full flex items-center justify-between p-4 rounded-xl border tap-highlight ${
          formData.shippingAvailable
            ? "bg-primary/10 border-primary"
            : "bg-card border-border"
        }`}
      >
        <div className="flex items-center gap-3">
          <Truck className={`w-5 h-5 ${formData.shippingAvailable ? "text-primary" : "text-muted-foreground"}`} />
          <div className="text-left">
            <p className={`font-medium ${formData.shippingAvailable ? "text-primary" : "text-foreground"}`}>
              Shipping available
            </p>
            <p className="text-xs text-muted-foreground">You can ship this item to buyers</p>
          </div>
        </div>
        <div
          className={`w-12 h-7 rounded-full p-1 transition-colors ${
            formData.shippingAvailable ? "bg-primary" : "bg-secondary"
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
              formData.shippingAvailable ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </div>
      </button>

      {/* Location */}
      <div>
        <label className="block font-medium text-foreground mb-2">
          <MapPin className="w-4 h-4 inline mr-1" />
          Location <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => updateFormData({ location: e.target.value })}
          placeholder="Enter city or area"
          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-2"
        />
        <div className="flex flex-wrap gap-2">
          {popularLocations.map((loc) => (
            <button
              key={loc}
              onClick={() => updateFormData({ location: loc })}
              className={`px-3 py-1.5 rounded-full text-xs font-medium tap-highlight ${
                formData.location === loc
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
