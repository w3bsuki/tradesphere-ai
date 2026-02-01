import { Plus, X, Image as ImageIcon } from "lucide-react";
import { ListingFormData } from "../SellDrawer";

interface PhotoStepProps {
  formData: ListingFormData;
  updateFormData: (updates: Partial<ListingFormData>) => void;
}

// Demo images for simulation
const demoImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
];

export function PhotoStep({ formData, updateFormData }: PhotoStepProps) {
  const addPhoto = () => {
    // In production, this would open file picker
    // For demo, we add a random demo image
    const availableImages = demoImages.filter((img) => !formData.photos.includes(img));
    if (availableImages.length > 0) {
      const randomImage = availableImages[Math.floor(Math.random() * availableImages.length)];
      updateFormData({ photos: [...formData.photos, randomImage] });
    }
  };

  const removePhoto = (index: number) => {
    const newPhotos = formData.photos.filter((_, i) => i !== index);
    updateFormData({ photos: newPhotos });
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="font-semibold text-foreground mb-1">Add photos</h3>
        <p className="text-sm text-muted-foreground">
          Add up to 10 photos. The first photo will be the cover.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {/* Add photo button */}
        {formData.photos.length < 10 && (
          <button
            onClick={addPhoto}
            className="aspect-square rounded-xl border-2 border-dashed border-border bg-secondary/50 flex flex-col items-center justify-center gap-2 tap-highlight hover:bg-secondary"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Plus className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">Add Photo</span>
          </button>
        )}

        {/* Photo previews */}
        {formData.photos.map((photo, index) => (
          <div key={index} className="relative aspect-square">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
            {index === 0 && (
              <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-primary text-primary-foreground text-[10px] font-medium">
                Cover
              </span>
            )}
            <button
              onClick={() => removePhoto(index)}
              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center tap-highlight"
            >
              <X className="w-3.5 h-3.5 text-foreground" />
            </button>
          </div>
        ))}
      </div>

      {formData.photos.length === 0 && (
        <div className="mt-8 text-center">
          <div className="w-16 h-16 rounded-full bg-secondary mx-auto flex items-center justify-center mb-3">
            <ImageIcon className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">
            Tap "Add Photo" to upload images of your item
          </p>
        </div>
      )}

      <div className="mt-6 p-3 rounded-xl bg-secondary/50">
        <h4 className="font-medium text-sm text-foreground mb-2">Photo tips</h4>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• Use good lighting and a clean background</li>
          <li>• Show the item from multiple angles</li>
          <li>• Include close-ups of any defects or details</li>
        </ul>
      </div>
    </div>
  );
}
