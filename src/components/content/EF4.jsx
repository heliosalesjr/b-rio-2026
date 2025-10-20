"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'

const EF4 = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ef-4');
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

    <div ref={ref} id="ef-4" className='scroll-mt-20 bg-white rounded-2xl shadow-2xl p-6 mb-8'>
      <div className="relative min-h-[60vh] w-full">
        <Image
          src="/bei_banner.jpeg" // Caminho relativo à pasta /public
          alt="Banner BEĨ Educação"
          fill
          className="object-cover object-top transition-transform duration-500 ease-in-out hover:scale-105"
          priority
        />
      </div>
      <div className="px-6 py-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-slate-800">
          Compreendendo o programa da BEĨ Educação e a Aprendizagem Baseada em Projetos
        </h1>
        <p className="text-lg leading-relaxed text-slate-700">
          O Programa de Educação Financeira da BEĨ Educação foi elaborado com o objetivo de levar para a sala de aula a Educação Financeira, ancorada na disciplina de Matemática, por meio de um material acessível, que amparado em problemas reais do dia a dia, pretende despertar e mobilizar a atenção do estudante para lidar de forma responsável com seus recursos ao mesmo que apreende conceitos fundamentais da Matemática.
        </p>
      </div>
    </div>
  )
}

export default EF4
