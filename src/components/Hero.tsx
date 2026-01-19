"use client";

import {
  Users,
  Trophy,
  Shield,
  Sparkles,
  Star,
  Award,
  Check,
  Truck,
  Palette,
  Heart,
} from "lucide-react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Client logos
const clients = [
  { name: "NICHIAS", logo: "/clogos/1.svg" },
  { name: "Kongu Kitchen", logo: "/clogos/2.webp" },
  { name: "Airpack Gases", logo: "/clogos/3.png" },
  { name: "Penta Laser", logo: "/clogos/4.png" },
  { name: "First Step Preschool", logo: "/clogos/5.png" },
  { name: "Powergrid Private Limited", logo: "/clogos/6.png" },
  { name: "Digital Triumph", logo: "/clogos/7.png" },
  { name: "Prowin Corporation", logo: "/clogos/8.png" },
  { name: "Dynamic Kitchen Equipments", logo: "/clogos/9.png" },
  { name: "AcurAA", logo: "/clogos/10.png" },
];

// Hero slides data
const heroSlides = [
  {
    background: "/hero-factory.jpg",
    title: "Bulk Custom T-Shirts",
    highlight: "for Corporates & Events",
    description: "Factory-direct pricing • Pan-India delivery • Reliable timelines",
    tagline: "Direct from Tirupur Factory",
    theme: "red",
  },
  {
    background: "/schlban.jpeg",
    title: "Bulk Custom School Uniforms",
    highlight: "for Schools & Sports Events",
    description: "Custom uniforms • Brand consistency • Premium quality fabrics",
    tagline: "Build Team Spirit",
    theme: "blue",
  },
];

const themeColors = {
  red: {
    bg: "bg-red-600/20",
    border: "border-red-500/30",
    dot: "bg-red-500",
    text: "text-red-400",
    glow: "drop-shadow-[0_0_10px_rgba(248,113,113,0.3)]",
  },
  blue: {
    bg: "bg-blue-600/20",
    border: "border-blue-500/30",
    dot: "bg-blue-500",
    text: "text-blue-400",
    glow: "drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]",
  },
  green: {
    bg: "bg-green-600/20",
    border: "border-green-500/30",
    dot: "bg-green-500",
    text: "text-green-400",
    glow: "drop-shadow-[0_0_10px_rgba(74,222,128,0.3)]",
  },
};

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textAnimation, setTextAnimation] = useState("enter");
  const backgroundSwiperRef = useRef(null);

  // Handles slide change
  const handleSlideChange = (swiper: any) => {
    setTextAnimation("exit");

    // Wait for exit animation to complete before changing index
    setTimeout(() => {
      setActiveIndex(swiper.realIndex);
      setTextAnimation("enter");
    }, 500);
  };

  // Go to specific slide
  const goToSlide = (index: number) => {
    if (backgroundSwiperRef.current) {
      setTextAnimation("exit");
      setTimeout(() => {
        (backgroundSwiperRef.current as any).slideToLoop(index);
        setActiveIndex(index);
        setTextAnimation("enter");
      }, 500);
    }
  };

  // Get current slide (fallback if activeIndex is out of bounds)
  const currentSlide = heroSlides[activeIndex] ?? heroSlides[0];
  const currentTheme = themeColors[currentSlide?.theme as keyof typeof themeColors] || themeColors.red;

  // Auto animation for text
  useEffect(() => {
    const interval = setInterval(() => {
      if (backgroundSwiperRef.current) {
        const nextIndex = (activeIndex + 1) % heroSlides.length;
        goToSlide(nextIndex);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section
      className="relative text-white overflow-hidden mt-20 flex items-center justify-center min-h-[85vh]"
      aria-label="Bulk custom T-shirts for corporates and events"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          ref={backgroundSwiperRef}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={1000}
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={handleSlideChange}
          className="w-full h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {/* Background image with reduced opacity */}
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30 transition-all duration-1000"
                  style={{ backgroundImage: `url('${slide.background}')` }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Enhanced dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 z-0" />

        {/* Text background overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 z-0" />

        {/* Animated elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 h-48 w-48 sm:h-56 sm:w-56 rounded-full bg-red-600/20 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 sm:-bottom-20 sm:-left-20 h-48 w-48 sm:h-56 sm:w-56 rounded-full bg-white/5 blur-2xl" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-12 max-[470px]:py-6 lg:py-12 z-10">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Hero Content with Animation */}
          <div className="w-full max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Badges with Animation */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div
                className={`inline-flex items-center gap-2 ${currentTheme.bg} ${currentTheme.border} rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-700 transform backdrop-blur-sm ${
                  textAnimation === "enter" ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "0.1s" }}
              >
                <span className={`w-2 h-2 ${currentTheme.dot} rounded-full animate-pulse flex-shrink-0`} />
                {currentSlide?.tagline}
              </div>
              <div
                className="inline-flex items-center gap-2 bg-red-600/30 border border-red-500/40 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-700 transform backdrop-blur-sm"
                style={{
                  transitionDelay: "0.2s",
                  transform: textAnimation === "enter" ? "translateY(0)" : "translateY(4px)",
                  opacity: textAnimation === "enter" ? 1 : 0,
                }}
              >
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse flex-shrink-0" />
                Minimum 50 pieces
              </div>
            </div>

            {/* Main Heading with Staggered Animation */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 overflow-hidden">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[60px] max-[470px]:text-[25px] font-black leading-tight sm:leading-tight transition-all duration-800 transform text-white drop-shadow-2xl"
                style={{
                  transitionDelay: "0.3s",
                  transform: textAnimation === "enter" ? "translateY(0)" : "translateY(20px)",
                  opacity: textAnimation === "enter" ? 1 : 0,
                }}
              >
                {currentSlide?.title}
                <span
                  className={`block ${currentTheme.text} ${currentTheme.glow} mt-3 sm:mt-4 lg:mt-6 transition-all duration-800 transform font-black`}
                  style={{
                    transitionDelay: "0.5s",
                    transform: textAnimation === "enter" ? "translateY(0)" : "translateY(20px)",
                    opacity: textAnimation === "enter" ? 1 : 0,
                  }}
                >
                  {currentSlide?.highlight}
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl sm:max-w-3xl mx-auto font-medium transition-all duration-800 transform drop-shadow-lg backdrop-blur-sm px-4 py-2 rounded-lg bg-white/5"
                style={{
                  transitionDelay: "0.7s",
                  transform: textAnimation === "enter" ? "translateY(0)" : "translateY(20px)",
                  opacity: textAnimation === "enter" ? 1 : 0,
                }}
              >
                {currentSlide?.description}
              </p>
            </div>

            {/* CTA Buttons with Animation */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-5 pt-2 sm:pt-2">
              <a
                href="https://wa.me/919876543210?text=Hi%20I%20want%20a%20bulk%20T-shirt%20quote"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp for a bulk T-shirt quote"
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-700 transform flex items-center justify-center gap-3 shadow-2xl shadow-green-600/40 min-w-[200px] hover:scale-105 hover:shadow-green-600/60 backdrop-blur-sm border border-green-500/30"
                style={{
                  transitionDelay: "0.9s",
                  transform: textAnimation === "enter" ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                  opacity: textAnimation === "enter" ? 1 : 0,
                }}
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                Get WhatsApp Quote
              </a>

              <a
                href="tel:+917867013553"
                aria-label="Call us directly"
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-700 transform flex items-center justify-center gap-3 shadow-2xl shadow-red-600/40 min-w-[200px] hover:scale-105 hover:shadow-red-600/60 backdrop-blur-sm border border-red-500/30"
                style={{
                  transitionDelay: "1.1s",
                  transform: textAnimation === "enter" ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                  opacity: textAnimation === "enter" ? 1 : 0,
                }}
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                Call Us Directly
              </a>
            </div>
          </div>

          {/* Logo Carousel */}
          <div
            className="w-full max-w-5xl mx-auto mt-10 sm:mt-12 max-[470px]:mt-5 lg:mt-8 transition-all duration-1000 transform"
            style={{
              transitionDelay: "1.3s",
              transform: textAnimation === "enter" ? "translateY(0)" : "translateY(30px)",
              opacity: textAnimation === "enter" ? 1 : 0,
            }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6 sm:mb-8 text-center drop-shadow-lg">
              Trusted by Leading Corporates & Events
            </h3>

            <div className="px-2 sm:px-4">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={25}
                slidesPerView={2}
                breakpoints={{
                  400: { slidesPerView: 2, spaceBetween: 25 },
                  480: { slidesPerView: 3, spaceBetween: 30 },
                  640: { slidesPerView: 4, spaceBetween: 30 },
                  768: { slidesPerView: 5, spaceBetween: 35 },
                  1024: { slidesPerView: 6, spaceBetween: 35 },
                  1280: { slidesPerView: 7, spaceBetween: 40 },
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop
                className="w-full"
                aria-label="Client logos carousel"
              >
                {clients.map((client, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex items-center justify-center p-3 sm:p-4 lg:p-5 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 h-16 sm:h-20 lg:h-24 backdrop-blur-sm">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-8 sm:max-h-10 lg:max-h-12 xl:max-h-14 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12 space-x-2 sm:space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white scale-125 sm:scale-150 shadow-lg"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient edge */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
}
