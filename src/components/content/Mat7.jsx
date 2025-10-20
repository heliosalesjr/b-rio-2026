import React from 'react'
import { FaVideo, FaBookOpen } from 'react-icons/fa'

const Mat7 = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10">
      <h2 className="text-xl md:text-3xl font-bold text-center text-slate-700 mb-8">Saiba Mais</h2>
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-300">
        {/* Bloco 1 - Vídeo tutorial */}
        <div className="md:w-1/2 px-4 md:px-8 pb-6 md:pb-0 flex flex-col items-center text-center md:text-left">
          <FaVideo className="text-blue-600 text-3xl mb-4" />
          <p className="text-slate-700 text-sm md:text-base">
            <strong>Vídeo tutorial de como usar o PADLET:</strong><br />
            Descubra como utilizar essa poderosa ferramenta colaborativa com um vídeo direto ao ponto.<br />
            <a
              href="https://www.youtube.com/watch?v=WzPqHeUq6z8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Assista no YouTube
            </a>
          </p>
        </div>

        {/* Bloco 2 - Diário de bordo */}
        <div className="md:w-1/2 px-4 md:px-8 pt-6 md:pt-0 flex flex-col items-center text-center md:text-left">
          <FaBookOpen className="text-green-600 text-3xl mb-4" />
          <p className="text-slate-700 text-sm md:text-base">
            <strong>Diário de Bordo:</strong><br />
            Explore as possibilidades de escrita para transformar sua sala de aula em uma comunidade de aprendizagem.<br />
            <a
              href="https://www.escrevendoofuturo.org.br/conteudo/sua-aula/orientacao-para-a-pratica/38/diario-de-bordo--possibilidades-de-escrita-para-tornar-a-sala-de-aula-uma-comunidade-de-aprendizagem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline mt-2 inline-block"
            >
              Leia mais no Escrevendo o Futuro
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mat7
