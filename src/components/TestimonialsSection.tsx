import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

export const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      company: "Tech Startup",
      rating: 5,
      content: "The ONYX has completely transformed my daily routine. The build quality is exceptional, and the smart features actually learn from my preferences. It's like having a personal assistant in my pocket.",
      avatar: "SC",
      verified: true
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director",
      company: "Design Agency", 
      rating: 5,
      content: "I've tried countless devices over the years, but nothing comes close to the PULSE. The wireless charging alone is a game-changer, and the AI assistant feature is incredibly intuitive.",
      avatar: "MR",
      verified: true
    },
    {
      name: "Elena Volkov",
      role: "Software Engineer",
      company: "Fortune 500",
      rating: 5,
      content: "As someone who values precision and reliability, INFLAVE delivers on both fronts. The technical specifications are impressive, but it's the attention to user experience that really sets them apart.",
      avatar: "EV",
      verified: true
    },
    {
      name: "David Kim",
      role: "Entrepreneur",
      company: "Startup Founder",
      rating: 5,
      content: "The premium feel and cutting-edge features make this worth every penny. Customer service is also top-notch - they really care about their users and continuously improve the product.",
      avatar: "DK",
      verified: true
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="outline" className="border-primary/50 text-primary">
            Testimonials
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight">
            What Our <span className="gradient-primary bg-clip-text text-transparent">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real feedback from real users who've experienced the INFLAVE difference.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bento-card p-8 lg:p-12 text-center relative overflow-hidden group hover:glow-primary animate-scale-in">
            <div className="absolute top-6 left-6 text-primary/20 group-hover:text-primary/30 transition-smooth">
              <Quote className="w-12 h-12" />
            </div>
            
            <div className="relative z-10 space-y-6">
              {/* Rating */}
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-2xl font-light leading-relaxed text-foreground">
                "{testimonials[activeTestimonial].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-medium">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium">{testimonials[activeTestimonial].name}</h4>
                    {testimonials[activeTestimonial].verified && (
                      <Badge variant="secondary" className="text-xs">Verified</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 gradient-primary opacity-5 group-hover:opacity-10 transition-smooth" />
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === activeTestimonial ? 'gradient-primary' : 'bg-border hover:bg-border/80'
              }`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {[
            { metric: "4.9/5", label: "Average Rating" },
            { metric: "10K+", label: "Reviews" }, 
            { metric: "98%", label: "Recommend Us" },
            { metric: "24h", label: "Support Response" }
          ].map((item, index) => (
            <Card key={index} className="bento-card p-6 text-center hover:glow-accent group">
              <div className="text-3xl font-extralight gradient-primary bg-clip-text text-transparent group-hover:animate-glow mb-2">
                {item.metric}
              </div>
              <div className="text-muted-foreground text-sm">{item.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}