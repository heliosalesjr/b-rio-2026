"use client";
import React from 'react'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import { FaRegLightbulb, FaUserGraduate } from 'react-icons/fa'

const EF5 = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ef-5');
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
    <div ref={ref} id="ef-5" className="scroll-mt-20 bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-300">
        {/* Bloco 1 */}
        <div className="md:w-1/2 px-4 md:px-8 pb-6 md:pb-0 flex flex-col items-center text-center md:text-left">
          <FaRegLightbulb className="text-yellow-500 text-3xl mb-4" />
          <p className="text-slate-700 text-sm md:text-base">
            O programa propõe que os(as) educadores(as) trabalhem os conteúdos do Livro do Estudante por meio da Aprendizagem Baseada em Projetos, realizando atividades de curta duração que são chamados de PEQUENOS PROJETOS DIDÁTICOS ATIVOS (PPDAs)...
          </p>
        </div>

        {/* Bloco 2 */}
        <div className="md:w-1/2 px-4 md:px-8 pt-6 md:pt-0 flex flex-col items-center text-center md:text-left">
          <FaUserGraduate className="text-indigo-600 text-3xl mb-4" />
          <p className="text-slate-700 text-sm md:text-base">
            ...e de outras metodologias ativas pensadas para desenvolver o protagonismo dos estudantes, bem como potencializar o aprendizado, o desenvolvimento de habilidades e a percepção da importância do tema para suas vidas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EF5
