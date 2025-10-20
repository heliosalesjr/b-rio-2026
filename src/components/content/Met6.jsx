"use client";
import React from 'react'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import { FaPeopleCarry, FaHandsHelping } from 'react-icons/fa'

const Met6 = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('met-6');
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
    <div ref={ref} id="met-6" className="scroll-mt-20 bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-300">
        {/* Bloco 1 */}
        <div className="md:w-1/2 px-4 md:px-8 pb-6 md:pb-0 flex flex-col items-center text-center md:text-left">
          <FaPeopleCarry className="text-emerald-600 text-3xl mb-4" />
          <p className="text-slate-700 text-sm md:text-base">
            Mas você também pode optar pela realização de um projeto mais amplo que envolva a turma, a escola e a comunidade de acordo com as necessidades e ideias trazidas pelos próprios estudantes.
          </p>
        </div>

        {/* Bloco 2 */}
        <div className="md:w-1/2 px-4 md:px-8 pt-6 md:pt-0 flex flex-col items-center text-center md:text-left">
          <FaHandsHelping className="text-rose-500 text-3xl mb-4" />
          <p className="text-slate-700 text-sm md:text-base">
            Em outras aplicações do Programa, já foram desenvolvidos projetos como horta escolar, bazar solidário, levantamento de recursos por meio de festas e outras atividades para reforma e melhoria de algum espaço, aquisição de materiais e bens para a escola, atividades sociais como ajuda a ONGs e instituições correlatas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Met6
