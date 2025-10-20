import React from 'react'
import { FaUsersCog, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa'

const Mat1 = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 space-y-10">
      
      {/* Título e Parágrafo */}
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-700 mb-4">
          Conhecendo a estrutura do Livro do Estudante
        </h2>
        <p className="text-slate-700 text-sm md:text-base max-w-3xl mx-auto">
          O Livro do Estudante aborda conteúdos do currículo de Matemática ancorados em conceitos de Educação Financeira – tais como operações com números inteiros; aumentos e descontos; interpretação de gráficos e tabelas; relação entre preço de serviços ou produtos; e grandezas como peso, tempo, área, capacidade e volume.
        </p>
      </div>

      {/* Seção com 3 blocos */}
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-300">
        
      <div className="md:w-1/3 px-4 md:px-6 pb-6 md:pb-0 flex flex-col items-center text-center md:text-left">
              <FaUsersCog className="text-indigo-600 text-3xl mb-4" />
              <h3 className="text-slate-700 font-bold text-lg mb-3">Interdisciplinaridade</h3>
              <p className="text-slate-700 text-sm md:text-base">
                A proposta incentiva o trabalho interdisciplinar, permitindo que o professor de Matemática colabore com docentes de áreas como Português, Ciências e Geografia.
              </p>
            </div>

            {/* Bloco 2 */}
            <div className="md:w-1/3 px-4 md:px-6 py-6 md:py-0 flex flex-col items-center text-center md:text-left">
              <FaBookOpen className="text-emerald-600 text-3xl mb-4" />
              <h3 className="text-slate-700 font-bold text-lg mb-3">Estrutura dos capítulos</h3>
              <p className="text-slate-700 text-sm md:text-base">
                Cada capítulo é construído a partir de reflexões e situações do cotidiano, articulando conteúdos matemáticos ao desenvolvimento da Educação Financeira, conforme o nível escolar.
              </p>
            </div>

            {/* Bloco 3 */}
            <div className="md:w-1/3 px-4 md:px-6 pt-6 md:pt-0 flex flex-col items-center text-center md:text-left">
              <FaChalkboardTeacher className="text-yellow-500 text-3xl mb-4" />
              <h3 className="text-slate-700 font-bold text-lg mb-3">Exercícios e fechamento</h3>
              <p className="text-slate-700 text-sm md:text-base">
                Os exercícios reforçam os temas discutidos em aula por meio de exemplos práticos. Cada lição é finalizada com uma reflexão: <em>por que esse tema é importante?</em> e <em>por que foi abordado dessa forma?</em>
              </p>
            </div>
      </div>

      {/* Subtítulo + PDF */}
      <div className="text-center mt-10 space-y-6">
        <h3 className="text-xl font-semibold text-slate-800">
          Veja uma amostra de um de nossos livros do estudante
        </h3>
        <div className="w-full h-[800px]">
          <iframe
            src="/sample.pdf"
            className="w-full h-full rounded-xl border"
            title="Amostra Livro do Estudante"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Mat1
