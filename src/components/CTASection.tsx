import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Sparkles, Gift } from 'lucide-react'

export const CTASection = () => {
  return (
    <section id="contact" className="pb-10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main CTA Card */}
        <Card className="bento-card p-8 lg:p-16 text-center relative overflow-hidden group hover:glow-primary animate-scale-in">
          {/* Background Effects */}
          <div className="absolute inset-0 gradient-primary opacity-10 group-hover:opacity-15 transition-smooth" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />

          <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="p-4 bg-primary/20 text-primary rounded-full animate-glow">
                <Sparkles className="w-8 h-8" />
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight">
                Ready to <span className="">Experience</span> Excellence?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Join thousands of satisfied customers who've made the switch to
                premium vaping with INFLAVE.
              </p>
            </div>

            {/* Offer Banner */}
            <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-6 py-3 rounded-full border border-primary/30">
              <Gift className="w-5 h-5" />
              <span className="font-medium">
                Limited Time: Free shipping on all orders over $100
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary glow-primary hover:scale-105 transition-spring text-lg px-8 py-6 group"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border/50 hover:border-primary/50 text-lg px-8 py-6"
              >
                Explore Products
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}