import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Cpu, Droplet, Shield, Zap } from "lucide-react";
import pulseImg from "@/assets/pluse.png";
import onyxImg from "@/assets/onyx.png";

interface ProductSpotlightProps {
  product: {
    name: string;
    tagline: string;
    description: string;
    image: string;
    features: Array<{
      icon: React.ReactNode;
      title: string;
      description: string;
    }>;
    specs: Array<{
      label: string;
      value: string;
    }>;
    accent: string;
    reversed?: boolean;
  };
}

export const ProductSpotlight = ({ product }: ProductSpotlightProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${
            product.reversed ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Product Image */}
          <div
            className={`relative ${product.reversed ? "lg:col-start-2" : ""}`}
          >
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-w-lg mx-auto object-contain animate-float transition-spring group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  product.accent === "primary"
                    ? "from-primary/30"
                    : "from-accent/30"
                } to-transparent rounded-3xl blur-3xl opacity-60`}
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-8 ${product.reversed ? "lg:col-start-1" : ""}`}
          >
            <div className="space-y-4 animate-slide-in-left">
              <Badge
                variant="outline"
                className="border-primary/50 text-primary"
              >
                New Release
              </Badge>
              <h2 className="text-6xl font-extralight tracking-tight">
                {product.name}
              </h2>
              <p
                className={`text-2xl font-light ${
                  product.accent === "primary" ? "text-primary" : "text-accent"
                }`}
              >
                {product.tagline}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 animate-fade-in">
              {product.features.map((feature, index) => (
                <Card key={index} className="bento-card p-6 hover:glow-primary">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-2xl ${
                        product.accent === "primary"
                          ? "bg-primary/20 text-primary"
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Specifications */}
            <Card className="bento-card p-6 animate-scale-in">
              <h3 className="text-xl font-medium mb-4">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {product.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Product data
export const onyxProduct = {
  name: "ONYX",
  tagline: "Pure. Powerful. Premium.",
  description:
    "Our flagship device combines sleek aesthetics with uncompromising performance. Engineered for discerning users who demand the very best.",
  image: onyxImg, // ✅ imported
  accent: "primary" as const,
  // ...
};
export const pulseProduct = {
  name: "PULSE",
  tagline: "Innovation. Redefined.",
  description:
    "Next-generation pod system that pushes the boundaries of what's possible. Experience the future of vaping technology today.",
  image: pulseImg, // ✅ imported
  accent: "accent" as const,
  reversed: true,
  // ...
};