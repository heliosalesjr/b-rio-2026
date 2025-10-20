"use client";
import React from 'react'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { FaCalculator, FaPiggyBank } from 'react-icons/fa'

const EF3 = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ef-3');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  const dados = [
    [
      "Área do conhecimento que utiliza fundamentos matemáticos relacionados ao uso do dinheiro.",
      "Relacionada ao comportamento financeiro do indivíduo.",
    ],
    [
      "Ajuda a calcular juros, prestações, descontos e entender operações financeiras.",
      "Ajuda a desenvolver habilidades para gerenciar finanças pessoais de forma eficaz.",
    ],
    [
      "É focada em fórmulas, cálculos e teorias matemáticas aplicadas a finanças.",
      "É focada em hábitos, atitudes e estratégias para uma vida financeira saudável.",
    ],
    [
      "Envolve conceitos como juros simples e compostos, valor presente e futuro, amortização.",
      "Inclui conteúdos como orçamento, poupança, investimento, crédito e planejamento financeiro.",
    ],
    [
      "Utilizada para resolver problemas financeiros específicos e tomar decisões baseadas em cálculos.",
      "Aplicada no dia a dia para tomar decisões financeiras conscientes e responsáveis.",
    ],
    [
      "Frequentemente ensinada como parte de disciplinas de Matemática.",
      "Considerada um tema transversal na educação, integrando-se com várias disciplinas.",
    ],
    [
      "Melhora a capacidade de realizar cálculos financeiros precisos.",
      "Promove a conscientização financeira e a habilidade de planejar para o futuro.",
    ]
  ]

  return (
    <div ref={ref} id="ef-3" className="scroll-mt-20 bg-white p-6 md:p-10 rounded-2xl shadow-2xl overflow-x-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Diferenças entre Matemática Financeira e Educação Financeira
        </h1>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
        No programa Aprendendo a Lidar com Dinheiro, como educadores(as), vocês terão a oportunidade de trabalhar com os dois conhecimentos de forma integrada.
        </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Títulos com ícones */}
        <div className="bg-orange-100 rounded-xl p-4 flex justify-center items-center gap-3 shadow-sm border-b-4 border-pink-400 text-center">
          <FaCalculator className="text-pink-500 text-3xl" />
          <h2 className="text-xl font-bold text-orange-800">Matemática Financeira</h2>
        </div>

        <div className="bg-blue-100 rounded-xl p-4 flex justify-center items-center gap-3 shadow-sm border-b-4 border-blue-400 text-center">
          <FaPiggyBank className="text-yellow-500 text-3xl" />
          <h2 className="text-xl font-bold text-blue-800">Educação Financeira</h2>
        </div>

        {/* Linhas de conteúdo */}
        {dados.map(([matematica, educacao], index) => (
          <React.Fragment key={index}>
            <div className="bg-orange-50 p-4 rounded-lg hover:bg-orange-200/60 transition duration-300">
              <p className="text-sm md:text-base text-slate-700">{matematica}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-200/60 transition duration-300">
              <p className="text-sm md:text-base text-slate-700">{educacao}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default EF3
