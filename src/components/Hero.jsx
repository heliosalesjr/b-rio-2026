"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Hero({ title, subtitle, buttonText, buttonHref = "#content" }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden py-16 md:py-32 lg:py-40">
      {/* Enhanced Background with Subtle Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-green-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          
          {/* Enhanced Title */}
          <div className="space-y-6 max-w-6xl mx-auto">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin tracking-widest text-white transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="drop-shadow-2xl">
                {title}
              </span>
            </h1>
            
            {/* Subtitle with Glassmorphism */}
            <div className={`backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 max-w-[700px] mx-auto transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-white/95 md:text-xl leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Enhanced Button */}
          {buttonText && (
            <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button 
                asChild 
                size="lg" 
                className="group relative bg-white text-blue-600 hover:bg-white/95 font-medium px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0"
              >
                <Link href={buttonHref} className="flex items-center space-x-2">
                  <span>{buttonText}</span>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute top-32 right-20 w-1 h-1 bg-white/20 rounded-full animate-ping" />
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" />
    </section>
  )
}