'use client'

import React, { useState } from 'react'
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Mat3 = () => {
  const [expanded, setExpanded] = useState(false)

  const steps = [
    "Apresentar o projeto de educação financeira aos estudantes.",
    "Realizar o diagnóstico do perfil da turma e de seus conhecimentos prévios em Matemática e Educação Financeira.",
    "Aplicar a primeira parte do Livro do Estudante (confira no sumário os capítulos que a compõem).",
    "Dialogar com os estudantes sobre a escolha do tema do projeto coletivo?",
    "Montar o planejamento do projeto e executar as tarefas.",
    "Apresentar os resultados.",
    "Ao longo de todo o processo, monitorar e fazer registros!"
  ]

  return (
    <motion.div
      layout
      className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
      transition={{ duration: 1.2 }}
    >
      {/* Conteúdo fechado */}
      <AnimatePresence>
        {!expanded && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white bg-gradient-to-br from-green-600 to-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Como iniciar a aplicação do programa, engajar os estudantes e fazer os primeiros registros
              </h2>
              <p className="text-sm md:text-base text-slate-100">
                Como vimos no tópico 1.2, na coleção <strong>Aprendendo a Lidar com Dinheiro</strong>, usamos a Abordagem Baseada em Projetos para que os estudantes coloquem a mão na massa, realizando <strong>Pequenos Projetos Didáticos Ativos (PPDA)</strong>, constituindo uma forma interessante e divertida de aplicar os conteúdos aprendidos. Ao fim de cada projeto, os estudantes devem apresentar os resultados para a comunidade escolar.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conteúdo expandido: Lista de Primeiros Passos */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 z-20 overflow-y-auto px-6 py-10 text-slate-800 bg-emerald-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-green-800">
                Primeiros Passos
              </h3>
              <ul className="space-y-4 text-base">
                {steps.map((step, index) => (
                  <li
                    key={index}
                    className={`bg-white p-4 rounded-xl shadow transition-all duration-300 border-l-4 `}
                  >
                    <span className="font-semibold text-slate-600 mr-2">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-4 right-4 z-30 bg-white text-blue-700 hover:bg-emerald-100 rounded-full px-5 py-3 shadow-xl flex items-center gap-2 transition-all"
        aria-label={expanded ? 'Voltar' : 'Primeiros Passos'}
      >
        {expanded ? <FaArrowLeft className="text-lg" /> : <><FaPlus className="text-lg" /> <span className="text-sm font-medium">Primeiros Passos</span></>}
      </motion.button>
    </motion.div>
  )
}

export default Mat3
