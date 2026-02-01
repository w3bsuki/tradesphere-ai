import { useState } from "react";
import { ChevronRight, Car, Smartphone, Home, ShoppingBag, Dumbbell, Gamepad2, Baby, Wrench } from "lucide-react";
import { ListingFormData } from "../SellDrawer";

interface CategoryStepProps {
  formData: ListingFormData;
  updateFormData: (updates: Partial<ListingFormData>) => void;
}

const categories = [
  { 
    id: "vehicles", 
    label: "Vehicles", 
    icon: Car,
    subcategories: ["Cars", "Motorcycles", "Trucks", "Boats", "Parts & Accessories"]
  },
  { 
    id: "electronics", 
    label: "Electronics", 
    icon: Smartphone,
    subcategories: ["Phones", "Computers", "Tablets", "TVs", "Audio", "Cameras"]
  },
  { 
    id: "property", 
    label: "Property", 
    icon: Home,
    subcategories: ["Apartments", "Houses", "Land", "Commercial", "Rooms"]
  },
  { 
    id: "fashion", 
    label: "Fashion", 
    icon: ShoppingBag,
    subcategories: ["Men's Clothing", "Women's Clothing", "Shoes", "Bags", "Watches", "Jewelry"]
  },
  { 
    id: "sports", 
    label: "Sports & Outdoor", 
    icon: Dumbbell,
    subcategories: ["Fitness", "Cycling", "Camping", "Water Sports", "Team Sports"]
  },
  { 
    id: "gaming", 
    label: "Gaming", 
    icon: Gamepad2,
    subcategories: ["Consoles", "Games", "Accessories", "PC Gaming", "VR"]
  },
  { 
    id: "kids", 
    label: "Kids & Baby", 
    icon: Baby,
    subcategories: ["Clothing", "Toys", "Strollers", "Furniture", "School Supplies"]
  },
  { 
    id: "services", 
    label: "Services", 
    icon: Wrench,
    subcategories: ["Home Repair", "Tutoring", "Beauty", "Events", "Transportation"]
  },
];

export function CategoryStep({ formData, updateFormData }: CategoryStepProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(formData.category);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    updateFormData({ category: categoryId, subcategory: "" });
  };

  const handleSubcategorySelect = (subcategory: string) => {
    updateFormData({ subcategory });
  };

  const currentCategory = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="p-4">
      {!selectedCategory ? (
        <>
          <div className="mb-4">
            <h3 className="font-semibold text-foreground mb-1">Select a category</h3>
            <p className="text-sm text-muted-foreground">
              Choose the category that best describes your item
            </p>
          </div>

          <div className="space-y-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-card border border-border tap-highlight hover:bg-accent"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="flex-1 text-left font-medium text-foreground">
                    {category.label}
                  </span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="mb-4">
            <button
              onClick={() => setSelectedCategory("")}
              className="text-sm text-primary font-medium tap-highlight"
            >
              ← Change category
            </button>
            <h3 className="font-semibold text-foreground mt-2 mb-1">
              {currentCategory?.label}
            </h3>
            <p className="text-sm text-muted-foreground">Select a subcategory</p>
          </div>

          <div className="space-y-2">
            {currentCategory?.subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => handleSubcategorySelect(sub)}
                className={`w-full flex items-center justify-between p-3 rounded-xl border tap-highlight ${
                  formData.subcategory === sub
                    ? "bg-primary/10 border-primary"
                    : "bg-card border-border hover:bg-accent"
                }`}
              >
                <span className={`font-medium ${
                  formData.subcategory === sub ? "text-primary" : "text-foreground"
                }`}>
                  {sub}
                </span>
                {formData.subcategory === sub && (
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
