import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import onyxHero from '@/assets/onyx-hero.jpg'
import pulseHero from '@/assets/pulse-hero.jpg'

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: onyxHero,
      title: "ONYX",
      subtitle: "Pure. Powerful. Premium.",
      description: "Experience the ultimate in sleek design and powerful performance with our flagship ONYX device.",
      cta: "Discover ONYX"
    },
    {
      image: pulseHero,
      title: "PULSE", 
      subtitle: "Innovation. Redefined.",
      description: "Revolutionary pod system that brings together cutting-edge technology and elegant design.",
      cta: "Explore PULSE"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
      </div>

      {/* Carousel */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center h-full container mx-auto px-6 py-20">
              {/* Text Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-7xl lg:text-8xl font-extralight tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-2xl text-primary font-light">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {slide.description}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth text-lg px-8 py-6"
                  >
                    {slide.cta}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-border hover:border-foreground/50 text-lg px-8 py-6"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Product Image */}
              <div className="relative animate-float">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto max-w-lg mx-auto object-contain drop-shadow-2xl"
                />
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-border/50 hover:border-primary/50"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentSlide ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-border/50 hover:border-primary/50"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}