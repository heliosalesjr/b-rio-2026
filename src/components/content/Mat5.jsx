import React from 'react'
import { FaUsersCog, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa'

const Mat5 = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 space-y-10">
          
          {/* Título e Parágrafo */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
           Diário de Bordo: Procedimentos e ferramentas para o registro das atividades
            </h2>
            <p className="text-slate-700 text-sm md:text-base max-w-3xl mx-auto">
            Essa ferramenta, comum em setores como tecnologia e educação, oferece um registro cronológico detalhado das operações diárias, facilitando a organização e o acompanhamento das tarefas. No contexto escolar, ele documenta o desenvolvimento de projetos, incluindo datas, locais, descobertas e resultados.

            </p>
          </div>
    
          {/* Seção com 3 blocos */}
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-300">
            
            {/* Bloco 1 */}
            <div className="md:w-1/3 px-4 md:px-6 pb-6 md:pb-0 flex flex-col items-center text-center md:text-left">
              <FaUsersCog className="text-indigo-600 text-3xl mb-4" />
              <p className="text-slate-700 text-sm md:text-base">
              É importante que cada ação, durante o desenvolvimento dos projetos, tenha um objetivo claro, permitindo que tanto você quanto os estudantes acompanhem o progresso. 

              </p>
            </div>
    
            {/* Bloco 2 */}
            <div className="md:w-1/3 px-4 md:px-6 py-6 md:py-0 flex flex-col items-center text-center md:text-left">
              <FaBookOpen className="text-emerald-600 text-3xl mb-4" />
              <p className="text-slate-700 text-sm md:text-base">
             Para isso, é essencial monitorar os processos regularmente, possibilitando ajustes e mudanças de direção quando necessário.


              </p>
            </div>
    
            {/* Bloco 3 */}
            <div className="md:w-1/3 px-4 md:px-6 pt-6 md:pt-0 flex flex-col items-center text-center md:text-left">
              <FaChalkboardTeacher className="text-yellow-500 text-3xl mb-4" />
              <p className="text-slate-700 text-sm md:text-base">
              O uso de um Diário de Bordo é recomendado para registrar atividades, progressos, ideias e desafios enfrentados durante o projeto. 


              </p>
            </div>
          </div>
          
        </div>  
  
  )
}

export default Mat5