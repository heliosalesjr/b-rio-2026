"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'

const PageApresentacao1 = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('apresentacao-1');
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
    <div ref={ref} id="apresentacao-1" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-8">
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
              Apresentação do Curso
            </h2>
          </div>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Este curso sobre a aplicação da Coleção{' '}
            <span className="italic font-semibold text-slate-800">Aprendendo a Lidar com Dinheiro</span>{' '}
            integra as ações de acompanhamento pedagógico promovidas pela{' '}
            <span className="font-semibold">BEĨ Educação</span>, voltadas aos educadores 
            e às educadoras da Secretaria de Estado de Educação de Mato Grosso que lecionam 
            Matemática para turmas do 6º ao 8º ano do Ensino Fundamental e da 1ª série do Ensino Médio.
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Desenvolvido pela equipe pedagógica da{' '}
            <span className="font-semibold ">BEĨ Educação</span>, em parceria com a 
            equipe de tecnologia da{' '}
            <span className="font-semibold">SEDUC</span>, o curso é oferecido no 
            formato <span className="font-semibold text-slate-800">autoinstrucional</span> — ou seja, 
            sem a presença de tutores para interação ou esclarecimento de dúvidas dos participantes.
          </p>
          
          
        </div>
        
        {/* Imagem - 1/3 da largura */}
        <div className="flex items-center justify-center h-full">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-96">
            <Image
              src="/livros_bei.png"
              alt="Imagem ilustrativa"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Seção do Vídeo */}
      <div className="space-y-6 items-center">
        
         
          <h3 className="text-3xl font-bold text-slate-700 justify-center text-center py-8">
            Vídeo de Apresentação
          </h3>
       
        
        <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/42BVLPl0xw8"
            title="Resumo Módulo 1"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default PageApresentacao1