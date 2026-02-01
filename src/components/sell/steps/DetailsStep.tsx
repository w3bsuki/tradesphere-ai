import { ListingFormData } from "../SellDrawer";

interface DetailsStepProps {
  formData: ListingFormData;
  updateFormData: (updates: Partial<ListingFormData>) => void;
}

const conditions = [
  { id: "new", label: "New", description: "Brand new, unused item" },
  { id: "like-new", label: "Like New", description: "Used once or twice, perfect condition" },
  { id: "good", label: "Good", description: "Minor signs of use, fully functional" },
  { id: "fair", label: "Fair", description: "Visible wear, works well" },
  { id: "parts", label: "For Parts", description: "May need repairs" },
];

export function DetailsStep({ formData, updateFormData }: DetailsStepProps) {
  return (
    <div className="p-4 space-y-6">
      {/* Title */}
      <div>
        <label className="block font-medium text-foreground mb-2">
          Title <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => updateFormData({ title: e.target.value })}
          placeholder="e.g., iPhone 15 Pro Max 256GB"
          maxLength={80}
          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <p className="text-xs text-muted-foreground mt-1 text-right">
          {formData.title.length}/80
        </p>
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium text-foreground mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => updateFormData({ description: e.target.value })}
          placeholder="Describe your item in detail. Include brand, model, size, color, and any defects..."
          rows={4}
          maxLength={2000}
          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        <p className="text-xs text-muted-foreground mt-1 text-right">
          {formData.description.length}/2000
        </p>
      </div>

      {/* Condition */}
      <div>
        <label className="block font-medium text-foreground mb-2">
          Condition <span className="text-destructive">*</span>
        </label>
        <div className="space-y-2">
          {conditions.map((condition) => (
            <button
              key={condition.id}
              onClick={() => updateFormData({ condition: condition.id })}
              className={`w-full flex items-start gap-3 p-3 rounded-xl border tap-highlight text-left ${
                formData.condition === condition.id
                  ? "bg-primary/10 border-primary"
                  : "bg-card border-border hover:bg-accent"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  formData.condition === condition.id
                    ? "border-primary bg-primary"
                    : "border-muted-foreground"
                }`}
              >
                {formData.condition === condition.id && (
                  <span className="text-primary-foreground text-xs">✓</span>
                )}
              </div>
              <div>
                <p className={`font-medium ${
                  formData.condition === condition.id ? "text-primary" : "text-foreground"
                }`}>
                  {condition.label}
                </p>
                <p className="text-xs text-muted-foreground">{condition.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
