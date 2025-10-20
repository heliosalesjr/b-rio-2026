'use client'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import React, { useState } from 'react'
import Image from 'next/image'
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Met2 = () => {
  const [expanded, setExpanded] = useState(false)

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('met-2');
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
      ref={ref} id="met-2"
      layout
      className="scroll-mt-20 relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
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
                src="/proj2.jpg"
                alt="Aprendizagem baseada em projetos"
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
                  Aprendizagem Baseada em Projetos
                </h2>
                <p className="text-sm md:text-base text-slate-100">
                  A Aprendizagem Baseada em Projetos é uma metodologia ativa que se apoia na resolução de um problema
                  ou no desenvolvimento de um projeto que tenha relação com a vida dos estudantes fora da sala de aula.
                  Os alunos selecionam muitos aspectos de sua tarefa e são motivados por problemas do mundo real que podem,
                  e em muitos casos irão, contribuir para a sua comunidade. Para desenvolver um projeto, os estudantes
                  precisam lidar com questões interdisciplinares, trabalhar em equipe, tomar decisões e assumir o protagonismo.
                  <br /><br />
                  O educador tem um papel muito importante nesse tipo de abordagem, uma vez que ele se torna o mediador
                  das relações de aprendizagem e o orientador que deve ajudar o estudante a encontrar sentido naquilo
                  que está aprendendo, criando também situações-problema cujo foco são essas relações.
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
            className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white bg-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="max-w-3xl">
              <p className="text-base md:text-lg font-medium text-white">
                “A investigação dos alunos é profundamente integrada à aprendizagem baseada em projetos, e como eles têm,
                em geral, algum poder de escolha em relação ao projeto do seu grupo e aos métodos a serem usados para desenvolvê-lo,
                eles tendem a ter uma motivação muito maior para trabalhar de forma diligente na solução dos problemas”.
                <br /><br />
                <span className="block mt-4 font-semibold">
                  – BENDER, W. Aprendizagem Baseada em Projetos. Editora Penso, 2014.
                </span>
              </p>
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

export default Met2
