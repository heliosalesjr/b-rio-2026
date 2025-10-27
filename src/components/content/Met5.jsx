'use client'
import { useEffect, useRef, useState } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
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
      ref={ref} 
      id="met-5"
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
                  Atividades de Projeto
                </h2>
                <p className="text-sm md:text-base text-slate-100">
                  Em algumas aulas do livro, temos uma sessão "Agora é sua vez!", em que apresentamos atividades de projeto para desenvolver com os estudantes. Elas costumam ser encadeadas com as demais atividades de projeto, ajudando a colocar as crianças em situações práticas que vão construir conhecimentos mais amplos e trabalhar em equipe.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* PDF no iframe */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <iframe
              src="/pagina_97.pdf#navpanes=0&toolbar=1"
              className="w-full h-full"
              title="Página 97 - Caderno do Educador"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-4 right-4 z-30 bg-white text-blue-600 hover:bg-blue-100 rounded-full px-5 py-3 shadow-xl transition-all flex items-center gap-2"
        aria-label={expanded ? 'Voltar' : 'Ver PDF'}
      >
        {expanded ? (
          <>
            <FaArrowLeft className="text-lg" />
            <span className="text-sm font-medium">Voltar</span>
          </>
        ) : (
          <>
            <FaPlus className="text-lg" />
            <span className="text-sm font-medium">Acesse a página do material didático que mostra um exemplo</span>
          </>
        )}
      </motion.button>
    </motion.div>
  )
}

export default Met5