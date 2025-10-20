"use client";
import React from 'react'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import { FaLink } from 'react-icons/fa'

const Modulo1Video = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-1-video');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);


  return (
    <div ref={ref} id="modulo-1-video" className="scroll-mt-20 bg-white rounded-lg shadow-2xl p-6 md:p-10 space-y-8 text-center">
      {/* Título */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-700">
            A Situação Financeira dos Brasileiros
          </h2>
        <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
      </div>
      

      {/* Vídeo */}
      <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/srOQ8l_ps0o"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>

      {/* Subtítulo */}
      <h3 className="text-xl font-semibold text-slate-800">Saiba mais</h3>

      {/* Cards com links */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 text-left">
        {/* Card 1 */}
        <a
          href="https://porque.com.br/endividamento-excessivo-papo-reto"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg p-6 shadow hover:shadow-lg border border-slate-200"
        >
          <div className="flex items-center gap-4">
            <FaLink className="text-blue-600 text-2xl" />
            <div>
              <h4 className="text-lg font-bold text-slate-900">Riscos do Endividamento Excessivo</h4>
              <p className="text-slate-600 text-sm">Descubra como o descontrole financeiro pode levar ao endividamento crítico e entenda os impactos sociais e pessoais dessa situação.</p>
            </div>
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="https://porque.com.br/endividamento-guetonomia-27"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg p-6 shadow hover:shadow-lg border border-slate-200"
        >
          <div className="flex items-center gap-4">
            <FaLink className="text-green-600 text-2xl" />
            <div>
              <h4 className="text-lg font-bold text-slate-900">Realidade do Endividamento nas Periferias</h4>
              <p className="text-slate-600 text-sm">Uma análise sensível e crítica sobre como a desigualdade econômica influencia o endividamento nas regiões periféricas.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Modulo1Video
