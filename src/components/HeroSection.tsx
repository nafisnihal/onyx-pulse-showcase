import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@radix-ui/react-slider";

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef([]);

  const slides = [
    {
      type: "video",
      video:
        "https://inflave.com/wp-content/uploads/2024/08/banner_pulse_desktop.mp4",
      title: "Pulse",
      puff: "240000 puffs",
      poster:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      type: "video",
      video:
        "https://inflave.com/wp-content/uploads/2024/11/onyx_desktop2-1.mp4",
      title: "Onyx ",
      puff: "300000 puffs",
      poster:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  useEffect(() => {
    // Play the current video when slide changes
    if (videoRefs.current[currentSlide]) {
      videoRefs.current[currentSlide].play().catch((error) => {
        console.error("Video play failed:", error);
      });
      setIsPlaying(true);
    }

    // Pause all other videos
    videoRefs.current.forEach((ref, index) => {
      if (ref && index !== currentSlide) {
        ref.pause();
      }
    });
  }, [currentSlide]);

  useEffect(() => {
    // Auto-advance slides
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const togglePlay = () => {
    if (videoRefs.current[currentSlide]) {
      if (isPlaying) {
        videoRefs.current[currentSlide].pause();
      } else {
        videoRefs.current[currentSlide].play().catch((error) => {
          console.error("Video play failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-black/20" />
        {/* Video Carousel */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.type === "video" && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    poster={slide.poster}
                    onPlay={() => {
                      if (index === currentSlide) setIsPlaying(true);
                    }}
                    onPause={() => {
                      if (index === currentSlide) setIsPlaying(false);
                    }}
                  >
                    <source src={slide.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="absolute bottom-32 left-48 ">
                    <h1 className="text-7xl font-bold">{slide.title}</h1>
                    <p className="pt-5  text-xl">{slide.puff}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="w-8 h-8 rounded-full hover:border "
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentSlide ? "gradient-primary" : "bg-white/70"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="w-8 h-8 rounded-full  hover:border-primary/50 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
