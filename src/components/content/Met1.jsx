"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import React from 'react'
import { FaCheckCircle, FaProjectDiagram, FaSyncAlt, FaGamepad, FaChalkboardTeacher } from 'react-icons/fa'


const Met1 = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('met-1');
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
    <div ref={ref} id="met-1" className="scroll-mt-20 bg-gradient-to-b from-white to-sky-200 py-10 px-4 md:px-16 relative overflow-hidden rounded-2xl shadow-2xl">
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-700 ">
        Metodologias Ativas
      </h2>
      <p className="text-lg leading-relaxed text-slate-700 my-8">
      <strong>Metodologias ativas </strong>são uma série de técnicas, procedimentos e processos com a finalidade de auxiliar a aprendizagem dos estudantes. São <strong>ativas</strong> porque consistem em práticas pedagógicas que pressupõem a realização de atividades práticas que estimulam o protagonismo dos jovens. Por meio das metodologias ativas, são trabalhadas habilidades como o pensamento crítico e criativo e a consciência de que há várias maneiras de realizar uma tarefa ou superar um desafio. Elas:
    </p>
      {/* Destaques iniciais */}
      <div className="bg-pink-400 rounded-xl p-4 md:p-6 text-white max-w-2xl mx-auto mb-8 shadow-lg space-y-2">
        <p className="flex items-center  gap-2">
          <FaCheckCircle className="text-white" />
          Apoiam no desenvolvimento de habilidades essenciais para o século 21
        </p>
        <p className="flex items-center  gap-2">
          <FaCheckCircle className="text-white" />
          Tornam o aprendizado mais significativo
        </p>
        <p className="flex items-center  gap-2">
          <FaCheckCircle className="text-white" />
          Incentivam a participação ativa e o protagonismo dos estudantes
        </p>
      </div>

      {/* Cards de metodologias */}
      <div className="space-y-8 max-w-3xl mx-auto ">
      <div className="bg-white border-l-8 border-yellow-400 rounded-lg shadow p-5 flex items-start gap-4 transform transition duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl">

          <FaProjectDiagram className="text-yellow-400 text-3xl mt-1" />
          <div>
            <h3 className="text-lg font-bold text-slate-800">Aprendizagem Baseada em Projetos (ABP)</h3>
            <p className="text-slate-600 text-sm">
              Os alunos aprendem ao desenvolver projetos aplicáveis no mundo real.
            </p>
          </div>
        </div>

        <div className="bg-white border-l-8 border-pink-400 rounded-lg shadow p-5 flex items-start gap-4 transform transition duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl">
          <FaSyncAlt className="text-pink-400 text-3xl mt-1" />
          <div>
            <h3 className="text-lg font-bold text-slate-800">Rotação por Estações</h3>
            <p className="text-slate-600 text-sm">
              Os alunos circulam por diferentes atividades e recursos, por estações, em uma mesma aula.
            </p>
          </div>
        </div>

        <div className="bg-white border-l-8 border-orange-400 rounded-lg shadow p-5 flex items-start gap-4 transform transition duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl">
          <FaGamepad className="text-orange-400 text-3xl mt-1" />
          <div>
            <h3 className="text-lg font-bold text-slate-800">Gamificação</h3>
            <p className="text-slate-600 text-sm">
              Uso de elementos de jogos, como desafios e recompensas, para estimular a participação e o engajamento.
            </p>
          </div>
        </div>

        <div className="bg-white border-l-8 border-blue-400 rounded-lg shadow p-5 flex items-start gap-4 transform transition duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl">
          <FaChalkboardTeacher className="text-blue-400 text-3xl mt-1" />
          <div>
            <h3 className="text-lg font-bold text-slate-800">Sala de Aula Invertida</h3>
            <p className="text-slate-600 text-sm">
              O estudante acessa conteúdos antes da aula e utiliza o tempo em sala para discussões e práticas.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Met1
