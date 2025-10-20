"use client";

import React from 'react'
import { FaUsersCog, FaBookOpen, FaChalkboardTeacher, FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { useState } from 'react'

const Mat2 = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const dropdownItems = [
    {
      title: "Abordagem de conteúdos",
      content: "O Caderno do Educador propõe trabalhar os conteúdos do Livro do Estudante por meio da aprendizagem baseada em projetos de curta duração e de outras metodologias ativas pensadas para desenvolver o protagonismo dos jovens."
    },
    {
      title: "Como engajar os estudantes?",
      content: "O material fornece dicas para engajamento dos estudantes. Para engajar os estudantes é necessário que o educador conheça seus interesses, habilidades, sonhos e conhecimentos prévios – no caso deste programa, sobre Matemática e Educação Financeira. Isso o ajuda a planejar atividades e viver um processo de aprendizagem significativa, marcada pela ampliação dos saberes e pela construção de novos conceitos e atitudes."
    },
    {
      title: "Mapa esquemático dos conteúdos de matemática para o ensino básico",
      content: "O mapa esquemático presente no material mostra os conteúdos elementares de objetos matemáticos previstos na BNCC para os anos finais do Ensino Fundamental."
    },
    {
      title: "Metodologias ativas e o trabalho das ideias fundamentais de matemática",
      content: "As metodologias ativas configuram estratégias potentes para associar as ideias fundamentais da Matemática à Educação Financeira de maneira que o estudante atribua significado ao que está estudando. Ao longo do caderno do educador, são apresentadas atividades que exploram tais abordagens, favorecendo a construção de conhecimento de forma mais engajada e significativa."
    },
    {
      title: "Aprendizagem Baseada em Projetos",
      content: "Existem várias formas de trabalhar por projetos e o material foca na Aprendizagem baseada em projetos (ABP), que envolve o desenvolvimento de conhecimentos por meio da investigação e resolução de problemas reais em projetos voltados à educação financeira."
    },
    {
      title: "Sugestões de atividades com metodologias ativas e estratégias didáticas (é aqui que ficam os PPDAs)",
      content: "O caderno do educador conta um conjunto de sugestões de atividades e de orientações, além de metodologias e estratégias didáticas, relacionadas às partes que compõem o livro do estudante."
    },
    {
      title: "Referências bibliográficas, leituras e vídeos",
      content: "As referências utilizadas, como links para leituras e vídeos, podem ser acessadas ao final do material."
    },
    {
      title: "Respostas das perguntas, exercícios, atividades e questões do Livro do Estudante",
      content: "Aqui o educador encontra as respostas dos exercícios presentes no livro do estudante."
    }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 space-y-10">
          
          {/* Título e Parágrafo */}
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-700 mb-4">
            Conhecendo a estrutura do Caderno do Educador
            </h2>
            <p className="text-slate-700 text-sm md:text-base max-w-3xl mx-auto">
            O Caderno do Educador foi concebido para auxiliar você a integrar em sala de aula tanto a teoria quanto a aplicação prática da Matemática Financeira, oferecendo subsídios valiosos para o planejamento das suas aulas. 
            </p>
          </div>
    
          {/* Seção com 3 blocos */}
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-300">
            
            {/* Bloco 1 */}
          <div className="md:w-1/3 px-4 md:px-6 pb-6 md:pb-0 flex flex-col items-center text-center md:text-left">
            <FaUsersCog className="text-indigo-600 text-3xl mb-4" />
            <h3 className="text-slate-700 font-bold text-lg mb-3">Papel do educador</h3>
            <p className="text-slate-700 text-sm md:text-base">
              Em vez de um manual rígido, o caderno reúne sugestões e referências que valorizam a experiência única do(a) educador(a) como mediador(a) da aprendizagem, promovendo a autonomia dos estudantes.
            </p>
          </div>

          {/* Bloco 2 */}
          <div className="md:w-1/3 px-4 md:px-6 py-6 md:py-0 flex flex-col items-center text-center md:text-left">
            <FaBookOpen className="text-emerald-600 text-3xl mb-4" />
            <h3 className="text-slate-700 font-bold text-lg mb-3">Finalidade pedagógica</h3>
            <p className="text-slate-700 text-sm md:text-base">
              Apresenta ideias e orientações que ajudam os estudantes a explorar conceitos de Educação Financeira integrados à Matemática, desenvolvendo também competências socioemocionais previstas na BNCC, por meio de projetos práticos.
            </p>
          </div>

          {/* Bloco 3 */}
          <div className="md:w-1/3 px-4 md:px-6 pt-6 md:pt-0 flex flex-col items-center text-center md:text-left">
            <FaChalkboardTeacher className="text-yellow-500 text-3xl mb-4" />
            <h3 className="text-slate-700 font-bold text-lg mb-3">Metodologias e estrutura</h3>
            <p className="text-slate-700 text-sm md:text-base">
              A proposta é aplicar metodologias ativas por meio de atividades significativas (Plano Pedagógico Didático de Apoio), organizadas em alinhamento com as quatro partes do <em>Livro do Estudante</em>.
            </p>
          </div>
          </div>
          
          {/* Seção de Dropdowns */}
          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-semibold text-center text-slate-800 mb-6">
              Estrutura do Caderno do Educador
            </h3>
            <div className="space-y-4 max-w-4xl mx-auto">
              {dropdownItems.map((item, index) => (
                <Collapsible 
                  key={index}
                  open={openItems[index]}
                  onOpenChange={() => toggleItem(index)}
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="bg-slate-100 hover:bg-slate-200 transition-all duration-300 rounded-xl p-4 shadow-md text-slate-700 text-sm md:text-base flex items-center justify-between gap-2 cursor-pointer">
                      <div className="flex items-start gap-2 text-left">
                        <span className="font-semibold text-slate-600">{index + 1}.</span> 
                        <span className='font-bold'>{item.title}</span>
                      </div>
                      {openItems[index] ? (
                        <FaChevronDown className="text-slate-500 flex-shrink-0" />
                      ) : (
                        <FaChevronRight className="text-slate-500 flex-shrink-0" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-2 p-4 bg-slate-50 rounded-xl border-l-4 border-slate-300">
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>  
  )
}

export default Mat2