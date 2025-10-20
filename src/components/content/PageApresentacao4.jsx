"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { Tally4, BookMarked, BarChart } from "lucide-react"


export default function PageApresentacao4() {

  const cards = [
    {
      icon: Tally4,
      title: "Módulos",
      description: "O curso está estruturado em 4 módulos, compostos por seções de conteúdos relacionados à temática geral, que é a metodologia de aplicação do Programa de Educação Financeira da BEĨ Educação, através da coleção Aprendendo a Lidar com Dinheiro.",
      color: "blue"
    },
    {
      icon: BookMarked,
      title: "Conteúdo",
      description: "Para favorecer a compreensão dos conteúdos abordados neste material, no decorrer da leitura você encontrará links para ampliar o conhecimento a respeito de determinados métodos e informações; boxes com questões para reflexão...",
      color: "green"
    },
    {
      icon: BarChart,
      title: "Referências",
      description: "...e histórias fictícias de situações que podem ocorrer no cotidiano na sala de aula, para análise e reflexão. Ao final de cada módulo, temos leituras complementares por meio de uma lista de referências. Para uma visão geral da trilha e iniciar os estudos, confira o detalhamento dos modules no sumário a seguir.",
      color: "slate"
    },
  ]

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue':
        return {
          icon: 'text-blue-600',
          border: 'border-l-blue-500',
          accent: 'text-blue-600'
        }
      case 'green':
        return {
          icon: 'text-green-600',
          border: 'border-l-green-500',
          accent: 'text-green-600'
        }
      case 'slate':
        return {
          icon: 'text-slate-600',
          border: 'border-l-slate-500',
          accent: 'text-slate-600'
        }
      default:
        return {
          icon: 'text-blue-600',
          border: 'border-l-blue-500',
          accent: 'text-blue-600'
        }
    }
  }

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('apresentacao-3');
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
    <div ref={ref} id="apresentacao-3" className="scroll-mt-20 w-full rounded-xl bg-gradient-to-br from-blue-50 to-slate-200 p-8 shadow-2xl border border-slate-100">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-8">
          
          {/* Título estilizado */}
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Estrutura do curso
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {cards.map((card, index) => {
              const colors = getColorClasses(card.color)
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center space-y-6"
                >
                  <div className="flex flex-col items-center text-center space-y-6">
                    <card.icon className="h-12 w-12 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-800">
                      {card.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}