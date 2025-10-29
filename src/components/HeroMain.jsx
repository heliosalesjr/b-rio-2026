"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroMain({ 
  title, 
  buttonText, 
  buttonHref = "#content", 
  imageSrc = "/ald_f_white.png" 
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden py-12 md:py-16 lg:py-20">
      
      {/* 🔥 Animated Background with Circulating Gradient */}
      <div className="absolute inset-0 animated-gradient">
        {/* Soft radial overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)] animate-pulse" />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.3)_0%,transparent_60%)]"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(59,130,246,0.2)_0%,transparent_50%)]"
          style={{ animation: "float 10s ease-in-out infinite reverse" }}
        />
      </div>

      {/* ✳️ Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div 
          className="w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{ animation: "gridMove 20s linear infinite" }}
        />
      </div>

      {/* 🌟 Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column */}
          <div
            className={`lg:col-span-3 space-y-6 lg:space-y-8 transition-all duration-1000 ease-out
                text-center lg:text-left
                flex flex-col items-center lg:items-start
                ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
            
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white leading-tight"
              style={{ fontFamily: "Open Sans Bold, sans-serif" }}
            >
              <span className="drop-shadow-2xl uppercase block">
                {title}
              </span>
            </h1>

            {/* Decorative line */}
            <div className="flex items-center gap-3">
              <div className="h-1 w-16 bg-white/80 rounded-full" />
              <div className="h-1 w-10 bg-white/60 rounded-full" />
              <div className="h-1 w-6 bg-white/40 rounded-full" />
            </div>

            {/* Button */}
            {buttonText && (
              <div className="pt-2">
                <Button 
                  asChild 
                  size="lg" 
                  className="group relative bg-white text-blue-600 hover:bg-white/95 font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0"
                >
                  <Link href={buttonHref} className="flex items-center space-x-3">
                    <span>{buttonText}</span>
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {/* Right Column - Floating Image */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ease-out ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative aspect-square max-w-sm mx-auto lg:max-w-md xl:max-w-lg">
              <div className="relative w-full h-full" style={{ animation: "float 6s ease-in-out infinite" }}>
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-white/40 rounded-full animate-ping" />
      <div className="absolute top-1/4 right-20 w-2 h-2 bg-white/30 rounded-full animate-bounce" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-green-300/40 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-300/40 rounded-full animate-ping" />

      {/* Local animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
      `}</style>
    </section>
  );
}
