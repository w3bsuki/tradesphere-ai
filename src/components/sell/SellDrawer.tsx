import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { X, ChevronLeft } from "lucide-react";
import { PhotoStep } from "./steps/PhotoStep";
import { CategoryStep } from "./steps/CategoryStep";
import { DetailsStep } from "./steps/DetailsStep";
import { PricingStep } from "./steps/PricingStep";
import { ReviewStep } from "./steps/ReviewStep";

export interface ListingFormData {
  photos: string[];
  category: string;
  subcategory: string;
  title: string;
  description: string;
  condition: string;
  price: string;
  currency: string;
  negotiable: boolean;
  shippingAvailable: boolean;
  location: string;
}

interface SellDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const STEPS = ["Photos", "Category", "Details", "Pricing", "Review"];

const initialFormData: ListingFormData = {
  photos: [],
  category: "",
  subcategory: "",
  title: "",
  description: "",
  condition: "",
  price: "",
  currency: "€",
  negotiable: false,
  shippingAvailable: false,
  location: "",
};

export function SellDrawer({ open, onOpenChange }: SellDrawerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<ListingFormData>(initialFormData);

  const handleClose = () => {
    onOpenChange(false);
    // Reset after animation
    setTimeout(() => {
      setCurrentStep(0);
      setFormData(initialFormData);
    }, 300);
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    // In production, this would submit to backend
    console.log("Submitting listing:", formData);
    handleClose();
  };

  const updateFormData = (updates: Partial<ListingFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.photos.length > 0;
      case 1:
        return formData.category !== "" && formData.subcategory !== "";
      case 2:
        return formData.title.trim() !== "" && formData.condition !== "";
      case 3:
        return formData.price !== "" && formData.location !== "";
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PhotoStep formData={formData} updateFormData={updateFormData} />;
      case 1:
        return <CategoryStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <DetailsStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <PricingStep formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[95vh] rounded-t-3xl p-0 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <button
            onClick={currentStep === 0 ? handleClose : handleBack}
            className="p-2 -ml-2 rounded-full hover:bg-accent tap-highlight"
          >
            {currentStep === 0 ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-foreground" />
            )}
          </button>

          <div className="text-center">
            <h2 className="font-semibold text-foreground">{STEPS[currentStep]}</h2>
            <p className="text-xs text-muted-foreground">
              Step {currentStep + 1} of {STEPS.length}
            </p>
          </div>

          <div className="w-9" /> {/* Spacer for alignment */}
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-secondary">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">{renderStep()}</div>

        {/* Footer */}
        <div className="p-4 border-t border-border safe-bottom">
          <button
            onClick={currentStep === STEPS.length - 1 ? handleSubmit : handleNext}
            disabled={!canProceed()}
            className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold tap-highlight disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === STEPS.length - 1 ? "Publish Listing" : "Continue"}
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
