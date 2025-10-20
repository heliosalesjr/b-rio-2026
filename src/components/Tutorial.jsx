"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiArrowRight, HiArrowLeft } from 'react-icons/hi'

export default function Tutorial({ onSidebarToggle }) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    // MODO PRODUÇÃO: verificar se o tutorial já foi exibido
    const tutorialShown = localStorage.getItem('tutorial-shown')
    
    if (!tutorialShown) {
      // Aguardar um pouco para a página carregar completamente
      setTimeout(() => {
        setIsVisible(true)
      }, 1000)
    }
    
    // MODO TESTE: sempre mostrar o tutorial
    // TODO: descomentar a linha abaixo para voltar ao modo teste se necessário
    // setTimeout(() => { setIsVisible(true) }, 1000)
  }, [])

  // Efeito para controlar a sidebar
  useEffect(() => {
    if (isVisible && currentStep === 2 && onSidebarToggle) {
      // Abrir sidebar no passo 2
      onSidebarToggle(true)
    }
  }, [currentStep, isVisible, onSidebarToggle])

  const closeTutorial = () => {
    setIsVisible(false)
    // Fechar sidebar quando encerrar tutorial
    if (onSidebarToggle) {
      onSidebarToggle(false)
    }
    // Marcar como exibido no localStorage
    localStorage.setItem('tutorial-shown', 'true')
  }

  const nextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else {
      closeTutorial()
    }
  }

  const prevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1)
      // Fechar sidebar quando voltar pro passo 1
      if (onSidebarToggle) {
        onSidebarToggle(false)
      }
    }
  }

  const tutorialContent = {
    1: {
      title: "Navegue pelo Curso! 📚",
      description: "Use a barra de navegação superior para acessar diferentes seções do curso. Clique em qualquer item do menu para explorar o conteúdo.",
      highlight: "navbar",
      // Desktop: abaixo da navbar, Mobile: centralizado
      position: "top-28 left-1/2 transform -translate-x-1/2 md:top-28 md:left-1/2 md:transform md:-translate-x-1/2"
    },
    2: {
      title: "Explore os Tópicos! 🎯", 
      description: "Use a barra lateral para navegar pelos tópicos específicos de cada seção. O ícone ✓ indica o que você já visualizou!",
      highlight: "sidebar",
      // Desktop: ao lado da sidebar, Mobile: centralizado
      position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-80 md:transform md:-translate-y-1/2 md:translate-x-0"
    }
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] pointer-events-none">
        {/* Overlay escuro - dividido em seções para não cobrir navbar e sidebar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-auto"
          transition={{ duration: 0.4 }}
        >
          {/* Passo 1: Destacar Navbar */}
          {currentStep === 1 && (
            <>
              {/* Área abaixo da navbar */}
              <div className="absolute top-[72px] left-0 right-0 bottom-0 bg-black/70" />
            </>
          )}
          
          {/* Passo 2: Destacar Sidebar */}
          {currentStep === 2 && (
            <>
              {/* Área da navbar */}
              <div className="absolute top-0 left-0 right-0 h-[72px] bg-black/70" />
              {/* Área à direita da sidebar */}
              <div className="absolute top-[72px] left-64 right-0 bottom-0 bg-black/70" />
              {/* Área abaixo da sidebar (se necessário) */}
              <div className="absolute top-[72px] left-0 w-64 bottom-0 bg-transparent" />
            </>
          )}
        </motion.div>

        {/* Card do Tutorial */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.3
          }}
          className={`absolute ${tutorialContent[currentStep].position} pointer-events-auto
            max-w-sm w-full mx-4`}
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
            {/* Header com gradiente */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative">
              <button
                onClick={closeTutorial}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <HiX className="text-xl" />
              </button>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="flex gap-1">
                  <div className={`w-2 h-2 rounded-full ${currentStep >= 1 ? 'bg-white' : 'bg-white/40'}`} />
                  <div className={`w-2 h-2 rounded-full ${currentStep >= 2 ? 'bg-white' : 'bg-white/40'}`} />
                </div>
                <span className="text-sm font-medium opacity-90">
                  Passo {currentStep} de 2
                </span>
              </div>
              
              <h3 className="text-xl font-bold">
                {tutorialContent[currentStep].title}
              </h3>
            </div>

            {/* Conteúdo */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                {tutorialContent[currentStep].description}
              </p>

              {/* Botões */}
              <div className="flex justify-between items-center">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentStep === 1 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <HiArrowLeft className="text-lg" />
                  Anterior
                </button>

                <button
                  onClick={nextStep}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 
                           text-white px-6 py-2 rounded-lg font-medium
                           hover:from-blue-700 hover:to-blue-800 
                           transform hover:scale-105 transition-all duration-200
                           shadow-lg hover:shadow-xl"
                >
                  {currentStep === 2 ? 'Finalizar' : 'Próximo'}
                  <HiArrowRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/* Seta indicativa */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, repeat: Infinity, repeatType: "reverse", duration: 1 }}
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 md:block hidden"
            >
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white" />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, repeat: Infinity, repeatType: "reverse", duration: 1 }}
              className="absolute top-1/2 -left-3 transform -translate-y-1/2 md:block hidden"
            >
              <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white" />
            </motion.div>
          )}
        </motion.div>

        {/* Botão para pular tutorial */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={closeTutorial}
          className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm text-white 
                   px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-200
                   pointer-events-auto text-sm font-medium"
        >
          Pular tutorial
        </motion.button>
      </div>
    </AnimatePresence>
  )
}