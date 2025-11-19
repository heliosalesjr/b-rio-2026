"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react';
import Image from 'next/image';

const PageApresentacaoAoFinal = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ao-final');
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
    <div
      ref={ref}
      id="ao-final"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100"
    >
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {/* Imagem - 1/3 da largura e altura total */}
        <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/check.jpg"
            alt="Imagem ilustrativa"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Ao final deste módulo, você será capaz de:
            </h2>
          </div>

          <p className="text-slate-700 text-lg leading-relaxed">
            Compreender a <strong>importância da Educação Financeira</strong> no desenvolvimento da autonomia, da consciência crítica e da cidadania dos estudantes.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            Conhecer os princípios e a estrutura da coleção <strong>Aprendendo a Lidar com Dinheiro</strong>, entendendo como ela se articula à BNCC e à disciplina de Matemática.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            <strong>Planejar e realizar o diagnóstico do perfil da turma</strong>, identificando interesses, conhecimentos prévios e realidades socioculturais dos estudantes.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            Utilizar recursos digitais como o <strong>Padlet e o Diário de Bordo</strong> para registrar e acompanhar o desenvolvimento das atividades e projetos.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            <strong>Refletir sobre o papel do(a) educador(a)</strong> como mediador(a) da aprendizagem e facilitador(a) na construção de um ensino mais significativo e conectado à vida real.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageApresentacaoAoFinal;