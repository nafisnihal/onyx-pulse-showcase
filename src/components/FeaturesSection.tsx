import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Smartphone, 
  Zap, 
  Shield, 
  Leaf, 
  Award, 
  Users, 
  Globe, 
  Heart,
  Cpu,
  Battery
} from 'lucide-react'

export const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smart Technology",
      description: "AI-powered devices that adapt to your preferences and usage patterns for the perfect experience every time.",
      size: "large"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Charging",
      description: "Lightning-fast charging technology gets you back to full power in minutes, not hours.",
      size: "medium"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Aerospace-grade materials and precision engineering ensure unmatched durability.",
      size: "medium"
    }
  ]

  const secondaryFeatures = [
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Eco-Friendly",
      description: "Sustainable design with recyclable materials",
      badge: "Green"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Award Winning",
      description: "Recognized by industry leaders worldwide",
      badge: "Winner"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Community Driven",
      description: "Built with feedback from our loyal users",
      badge: "Popular"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Shipping",
      description: "Available in 50+ countries worldwide",
      badge: "Worldwide"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Customer Love",
      description: "98% customer satisfaction rate",
      badge: "Rated 5★"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Advanced Chipset",
      description: "Custom silicon for optimal performance",
      badge: "Tech"
    },
    {
      icon: <Battery className="w-5 h-5" />,
      title: "Long Battery Life",
      description: "All-day usage on a single charge",
      badge: "Power"
    }
  ]

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="outline" className="border-primary/50 text-primary">
            Features
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight">
            Why Choose <span className="gradient-primary bg-clip-text text-transparent">INFLAVE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every detail crafted for perfection. Every feature designed for you.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {/* Large Feature Card */}
          <Card className="lg:col-span-2 lg:row-span-2 bento-card p-8 relative overflow-hidden group hover:glow-primary animate-scale-in">
            <div className="relative z-10">
              <div className="p-4 bg-primary/20 text-primary rounded-3xl w-fit mb-6 group-hover:animate-glow">
                {mainFeatures[0].icon}
              </div>
              <h3 className="text-3xl font-light mb-4">{mainFeatures[0].title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {mainFeatures[0].description}
              </p>
            </div>
            <div className="absolute inset-0 gradient-primary opacity-5 group-hover:opacity-10 transition-smooth" />
          </Card>

          {/* Medium Feature Cards */}
          {mainFeatures.slice(1).map((feature, index) => (
            <Card key={index} className="lg:col-span-2 bento-card p-6 hover:glow-primary animate-fade-in group">
              <div className="p-3 bg-accent/20 text-accent rounded-2xl w-fit mb-4 group-hover:animate-glow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Secondary Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryFeatures.map((feature, index) => (
            <Card key={index} className="bento-card p-6 hover:glow-accent animate-slide-in-left group" style={{
              animationDelay: `${index * 100}ms`
            }}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-accent/20 text-accent rounded-xl group-hover:animate-glow">
                  {feature.icon}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {feature.badge}
                </Badge>
              </div>
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-fade-in">
          {[
            { value: "500K+", label: "Happy Customers" },
            { value: "50+", label: "Countries" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl font-extralight gradient-primary bg-clip-text text-transparent group-hover:animate-glow">
                {stat.value}
              </div>
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}