"use client";
import React from 'react'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import { FaGraduationCap, FaCalculator, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa'

const EF2 = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ef-2');
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
    <div ref={ref} id="ef-2" className="scroll-mt-20 max-w-6xl mx-auto p-6 bg-white rounded-xl">
      <h2 className="text-4xl font-bold text-slate-700 text-center mb-12">
        Educação Financeira no Ensino Fundamental
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-4xl text-blue-500 mr-4" />
            <h3 className="text-xl font-bold text-slate-700">Formação Cidadã</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            A Educação Financeira é essencial para preparar os jovens para a vida adulta, promovendo uma formação cidadã mais crítica e consciente diante dos desafios do mundo real.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaCalculator className="text-4xl text-green-500 mr-4" />
            <h3 className="text-xl font-bold text-slate-700">Conteúdo Aplicável e Conectado</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Seu conteúdo dialoga com o cotidiano dos estudantes e está fortemente integrado à Matemática, associando teoria à prática de forma significativa.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaBookOpen className="text-4xl text-red-500 mr-4" />
            <h3 className="text-xl font-bold text-slate-700">Presente na BNCC</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            A Base Nacional Comum Curricular (BNCC) inclui a Educação Financeira como um tema obrigatório, presente nos currículos escolares de todo o país.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaChalkboardTeacher className="text-4xl text-yellow-400 mr-4" />
            <h3 className="text-xl font-bold text-slate-700">Foco na Matemática</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Embora seja um tema transversal, a Educação Financeira é tratada com destaque na área de Matemática, especialmente nos 5º, 6º, 7º e 9º anos do Ensino Fundamental.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EF2
