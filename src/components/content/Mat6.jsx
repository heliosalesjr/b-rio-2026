'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Mat6 = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
      transition={{ duration: 1.2 }}
    >
      {/* Versão Azul com texto */}
      <AnimatePresence>
        {!expanded && (
          <>
            <motion.div
              className="absolute inset-0 bg-blue-600 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
            >
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Padlet</h2>
                <p className="text-sm md:text-base text-slate-100">
                  Uma ferramenta útil para esse registro é o <strong>PADLET</strong>, que funciona como um organizador virtual de tarefas.
                  Ele permite criar e gerenciar murais em diversos formatos, promovendo a curiosidade, a criação e a comunicação entre os estudantes.
                  O Padlet facilita a interação e a socialização, enriquecendo o processo de ensino-aprendizagem.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Versão Expandida com fundo verde e imagem */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-white bg-green-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="relative w-full max-w-4xl h-64 sm:h-80 md:h-96 mb-4">
              <Image
                src="/padlet_mt.png"
                alt="Exemplo Padlet"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm md:text-base max-w-xl font-medium text-white">
              Exemplo de um Padlet criado durante a aplicação do Programa de Educação Financeira SEDUC MT 2024
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Flutuante */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-4 right-4 z-30 bg-white text-blue-700 hover:bg-slate-100 rounded-full p-3 shadow-xl transition-all"
        aria-label={expanded ? 'Voltar' : 'Expandir'}
      >
        {expanded ? <FaArrowLeft className="text-lg" /> : <FaPlus className="text-lg" />}
      </motion.button>
    </motion.div>
  )
}

export default Mat6
