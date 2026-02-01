import { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, Car, Home, Smartphone, ShoppingBag, Loader2 } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  options?: SearchOption[];
}

interface SearchOption {
  label: string;
  value: string;
  selected?: boolean;
}

interface AISearchDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const quickCategories = [
  { icon: Car, label: "Vehicles" },
  { icon: Home, label: "Property" },
  { icon: Smartphone, label: "Electronics" },
  { icon: ShoppingBag, label: "Fashion" },
];

export function AISearchDrawer({ open, onOpenChange }: AISearchDrawerProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm here to help you find exactly what you're looking for. What are you searching for today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response: Message;

      if (lowerInput.includes("car") || lowerInput.includes("vehicle")) {
        response = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Great choice! Let me help you narrow down. What type of vehicle interests you?",
          options: [
            { label: "Sedan", value: "sedan" },
            { label: "SUV", value: "suv" },
            { label: "Truck", value: "truck" },
            { label: "Sports Car", value: "sports" },
          ],
        };
      } else if (lowerInput.includes("phone") || lowerInput.includes("iphone")) {
        response = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Looking for a phone! Which brand do you prefer?",
          options: [
            { label: "Apple", value: "apple" },
            { label: "Samsung", value: "samsung" },
            { label: "Google", value: "google" },
            { label: "Other", value: "other" },
          ],
        };
      } else {
        response = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: `I found several options for "${input}". Could you tell me more about your budget range?`,
          options: [
            { label: "Under €100", value: "0-100" },
            { label: "€100 - €500", value: "100-500" },
            { label: "€500 - €1000", value: "500-1000" },
            { label: "€1000+", value: "1000+" },
          ],
        };
      }

      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 1000);
  };

  const handleOptionClick = (option: SearchOption) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "user", content: option.label },
    ]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: `Perfect! I found 24 listings matching your criteria. Here are the top results:`,
        },
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickCategory = (label: string) => {
    setInput(`I'm looking for ${label.toLowerCase()}`);
    inputRef.current?.focus();
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[90vh] rounded-t-3xl p-0 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">AI Search</h2>
              <p className="text-xs text-muted-foreground">Find anything with AI</p>
            </div>
          </div>
          <button 
            onClick={() => onOpenChange(false)}
            className="p-2 rounded-full hover:bg-accent tap-highlight"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Quick categories */}
        <div className="flex gap-2 p-4 overflow-x-auto hide-scrollbar border-b border-border">
          {quickCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.label}
                onClick={() => handleQuickCategory(cat.label)}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground tap-highlight"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] ${message.role === "user" ? "" : ""}`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-secondary-foreground rounded-bl-md"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>

                {/* Options */}
                {message.options && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {message.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleOptionClick(option)}
                        className="px-3 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-foreground tap-highlight hover:bg-accent"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border safe-bottom">
          <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Describe what you're looking for..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center tap-highlight disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
