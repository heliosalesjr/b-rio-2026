"use client";

import React from 'react'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

const Modulo1Intro = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-1-intro');
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
    <div ref={ref} id="modulo-1-intro" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 min-h-[50vh]">
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {/* Imagem - 1/3 da largura */}
        <div className="flex items-center justify-center h-full">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-96">
            <Image
              src="/pbank.jpg"
              alt="Imagem ilustrativa"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Módulo 1
            </h2>
          </div>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Sejam bem-vindos e bem-vindas ao módulo 1 da nossa formação! 
            Neste primeiro módulo, queremos começar falando sobre a importância da{' '}
            Educação Financeira para o cotidiano de 
            qualquer pessoa e, assim, a importância de trazer isso para sala de aula.
          </p>
          
          <p className="text-slate-700 leading-relaxed">
            A partir daí, vamos falar sobre a coleção{' '}
            <span className="font-semibold text-slate-800">Aprendendo a lidar com Dinheiro</span>, criada 
            para tornar o aprendizado de educação financeira em sala de aula mais prático e efetivo.
          </p>
          
          <p className="text-slate-700 leading-relaxed">
            Para isso, nosso primeiro passo é fazer um{' '}
            <span className="font-semibold">diagnóstico da turma</span> que vamos trabalhar, 
            entendendo como vivem, seus sonhos e como a educação financeira pode fazer parte da realização desses sonhos.
          </p>
          
          <p className="text-slate-700 leading-relaxed">
            Por fim, apresentamos{' '}
            <span className="font-semibold ">ferramentas e atividades</span> que podem 
            ajudar a engajar a turma, aproximando-os do tema, uns dos outros e mesmo de você, 
            professor e professora.
          </p>
          
          <p className="text-slate-700 font-medium italic text-center pt-2 border-t border-slate-200">
            Bons estudos!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modulo1Intro