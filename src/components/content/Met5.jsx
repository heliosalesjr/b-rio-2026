'use client'
import { useEffect, useRef, useState } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'
import { FaPlus, FaArrowLeft, FaTimes, FaSearchPlus, FaSearchMinus } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Met5 = () => {
  const [expanded, setExpanded] = useState(false)
  const [showPDF, setShowPDF] = useState(false)
  const [scale, setScale] = useState(1.0)
  
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

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2.5))
  }

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5))
  }

  const handleClosePDF = () => {
    setShowPDF(false)
    setScale(1.0)
  }

  return (
    <>
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

        {/* Texto alternativo com fundo verde */}
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
                  Clique no botão abaixo para abrir a página 97 do caderno do educador
                </p>
                <div className="w-full flex justify-center">
                  <button
                    onClick={() => setShowPDF(true)}
                    className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg shadow-lg font-semibold text-lg transition-all hover:scale-105"
                  >
                    📄 Abrir PDF - Página 97
                  </button>
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

      {/* Modal do PDF */}
      <AnimatePresence>
        {showPDF && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          >
            {/* Controles */}
            <div className="absolute top-4 right-4 flex gap-2 z-50">
              <button
                onClick={handleZoomOut}
                className="bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all"
                title="Diminuir zoom"
              >
                <FaSearchMinus className="text-xl" />
              </button>
              <button
                onClick={handleZoomIn}
                className="bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all"
                title="Aumentar zoom"
              >
                <FaSearchPlus className="text-xl" />
              </button>
              <button
                onClick={handleClosePDF}
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all"
                title="Fechar"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Indicador de zoom */}
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg z-50">
              <span className="text-gray-800 font-semibold">{Math.round(scale * 100)}%</span>
            </div>

            {/* Container do PDF usando iframe */}
            <div className="w-full h-full p-8 flex items-center justify-center overflow-auto">
              <div 
                className="bg-white rounded-lg shadow-2xl transition-transform duration-300"
                style={{ 
                  transform: `scale(${scale})`,
                  width: '100%',
                  maxWidth: '1200px',
                  height: '90vh'
                }}
              >
                <iframe
                  src="/pagina_97.pdf#toolbar=1"
                  className="w-full h-full rounded-lg z-10000"
                  title="Página 97 - Caderno do Educador"
                />
              </div>
            </div>

            {/* Dica de uso */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-3 rounded-full shadow-lg z-50">
              <span className="text-gray-800 text-sm">
                💡 Use os botões acima para zoom ou os controles do PDF
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Met5