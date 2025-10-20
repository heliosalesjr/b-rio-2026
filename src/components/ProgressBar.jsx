"use client";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-16 left-0 w-full h-2 bg-gray-200 z-1000">
      <div
        className="h-full transition-all duration-200"
        style={{
          width: `${scrollProgress}%`,
          background: `linear-gradient(to right, #3B82F6, #22C55E)`, // De blue-500 para green-500
        }}
      />
    </div>
  );
}
