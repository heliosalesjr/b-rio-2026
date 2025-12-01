"use client";
import React, { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import { FaBullseye, FaListUl, FaRegLightbulb } from "react-icons/fa";

const PageApresentacaoObj = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed("objetivos-formacao");
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <section
      ref={ref}
      id="objetivos-formacao"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-10"
    >
      {/* Título principal */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
            Objetivos da Formação
          </h1>
          
        </div>
      </div>

      {/* Objetivo geral */}
      <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 space-y-4">
        <div className="flex items-center gap-3">
          <FaBullseye className="text-green-600 text-2xl" />
          <h2 className="text-2xl font-semibold text-slate-800">
            Objetivo Geral
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed">
          Capacitar educadores para planejar, implementar e avaliar atividades
          da coleção <strong>Aprendendo a Lidar com Dinheiro</strong>,
          promovendo a integração da educação financeira no currículo escolar
          de forma reflexiva, contextualizada e eficiente.
        </p>
      </div>

      {/* Objetivos específicos */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 p-6 space-y-6">
        <div className="flex items-center gap-3">
          <FaListUl className="text-blue-600 text-2xl" />
          <h2 className="text-2xl font-semibold text-slate-800">
            Objetivos Específicos
          </h2>
        </div>

        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <FaRegLightbulb className="text-green-600 mt-1" />
            <p className="text-slate-700 leading-relaxed">
              Compreender os fundamentos e a metodologia do Programa de
              Educação Financeira da <span style={{ whiteSpace: 'nowrap' }} className='font-bold'>BEĨ Educação</span>, mapeando seus princípios, estrutura e
              etapas de aplicação, para orientar o uso coerente da coleção em
              sala de aula.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaRegLightbulb className="text-green-600 mt-1" />
            <p className="text-slate-700 leading-relaxed">
              Desenvolver habilidades de planejamento e adaptação de aulas com
              projetos didáticos em educação financeira, de modo que as
              atividades se ajustem à realidade dos estudantes e ao contexto
              local.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaRegLightbulb className="text-green-600 mt-1" />
            <p className="text-slate-700 leading-relaxed">
              Aplicar instrumentos de monitoramento e avaliação contínua das
              atividades desenvolvidas, consolidando registros, promovendo
              reflexões e ajustes ao longo da implementação do programa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageApresentacaoObj;
