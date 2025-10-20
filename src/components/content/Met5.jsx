'use client'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import React, { useState } from 'react'
import Image from 'next/image'
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Met5 = () => {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('met-5');
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
    <motion.div
      ref={ref} id="met-5"
      layout
      className="scroll-mt-20 relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-white"
      transition={{ duration: 1.2 }}
      
    >
      {/* Imagem e camada escura */}
      <AnimatePresence>
        {!expanded && (
          <>
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/game.jpg"
                alt="Fator de Mobilização"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-black/50 z-10" />
            </motion.div>

            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
            >
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Fator de Mobilização
                </h2>
                <p className="text-sm md:text-base text-slate-100">
                  Refere-se ao que desafia, motiva e desperta o interesse da turma a partir do conteúdo trabalhado naquela seção, que vai definir o escopo dos projetos.
                  Esse desafio pode ser, por exemplo, algo a ser construído, uma habilidade a ser desenvolvida, uma apresentação a ser organizada ou um evento a ser planejado e organizado pelos estudantes.
                  É aquilo que a turma pode colocar em prática a partir do conhecimento teórico adquirido.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Texto alternativo com fundo azul */}
      <AnimatePresence>
      {expanded && (
        <motion.div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-white bg-emerald-500 overflow-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
        >
            <div className="max-w-3xl">
            <p className="text-base md:text-lg font-medium text-white mb-6">
                A ideia é que ao final de cada parte do livro do estudante, seja proposto um Pequeno Projeto (PPDA). As orientações de como dinamizar estas atividades estão no Caderno do Educador.
            </p>
            <div className="w-full flex justify-center">
                <Image
                src="/exemplo.png"
                alt="Exemplo de projeto"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
                />
            </div>
            </div>
        </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante com efeito bounce */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-4 right-4 z-30 bg-white text-blue-600 hover:bg-blue-100 rounded-full p-3 shadow-xl transition-all"
        aria-label={expanded ? 'Voltar' : 'Expandir'}
      >
        {expanded ? <FaArrowLeft className="text-lg" /> : <FaPlus className="text-lg" />}
      </motion.button>
    </motion.div>
  )
}

export default Met5