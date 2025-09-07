import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'
import testImg from "../assets/onyxframe.png";

export const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      image: "/public/onyx.png",
    },
    {
      image: "/public/pluse.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="  pt-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Testimonial Display */}
        <div className="">
          <Card className="bento-card text-center relative overflow-hidden group hover:glow-primary animate-scale-in">
            <div className="relative z-10 ">
              {/* Author Info */}
              <div className="flex items-center justify-center ">
                <div className="">
                  <div className="flex items-center ">
                    <img
                      src={testimonials[activeTestimonial].image} // ✅ correct way
                      alt="User"
                      className="w-[800px] h-[700px] "
                    />
                  </div>
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
                index === activeTestimonial
                  ? "gradient-primary"
                  : "bg-border hover:bg-border/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};