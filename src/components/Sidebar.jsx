"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSidebar } from '@/contexts/SidebarContext';

const navigation = {
  'Apresentação': {
    path: '/',
    components: [
      { id: 'apresentacao-1', title: 'Apresentação do Curso' },
      { id: 'apresentacao-2', title: 'Autonomia' },
      { id: 'apresentacao-3', title: 'Estrutura do Curso' },
      { id: 'apresentacao-4', title: 'Módulos' },
    ]
  },
  'Módulo 1': {
    path: '/modulo1',
    components: [
      { id: 'modulo-1-intro', title: 'O Módulo 1' },
      { id: 'modulo-1-objetivos', title: 'Objetivos do Módulo' },
      { id: 'modulo-1-situacao', title: 'Situação e Importância' },
        { id: 'modulo-1-midia', title: 'Educação Financeira na Mídia' },
        { id: 'modulo-1-video', title: 'A situação financeira dos Brasileiros' },
    ]
  },
  'Educação Financeira': {
    path: '/educacaofinanceira',
    components: [
      { id: 'ef-intro', title: 'Introdução' },
      { id: 'ef-2', title: 'Educação Financeira no Ensino Fundamental' },
      { id: 'ef-3', title: 'Matemática Financeira vs Educação Financeira' },
      { id: 'ef-4', title: 'O programa da BEĨ Educação' },
      { id: 'ef-5', title: 'Mais sobre o programa' },
       
    ]
  },
  'Metodologias': {
    path: '/metodologias',
    components: [
      { id: 'met-1', title: 'Metodologias Ativas' },
      { id: 'met-2', title: 'Aprendizagem Baseada em Projetos' },
      { id: 'met-3', title: 'ABP - Resumo' },
      { id: 'met-4', title: 'Pequenos Projetos Didáticos Ativos' },
      { id: 'met-5', title: 'Fator de Mobilização' },
      { id: 'met-6', title: 'Mais sobre mobilização' },
    ]
  },
  'Material Didático': {
    path: '/material',
    components: [
      { id: 'mat-1', title: 'Estrutura do Livro do Estudante' },
      { id: 'mat-2', title: 'Estrutura do Caderno do Educador' },
      { id: 'mat-3', title: 'Primeiros registros' },
      { id: 'mat-5', title: 'Diário de Bordo' },
      { id: 'mat-6', title: 'Padlet' },
      { id: 'mat-7', title: 'Saiba Mais - Links' },
    ]
  },
  'Diagnóstico': {
    path: '/diagnostico',
    components: [
      { id: 'mat-4', title: 'Diagnóstico do perfil da turma' },
       { id: 'mat-8', title: 'Encerramento do Módulo 1' },
       { id: 'what', title: 'O que aprendi?' },
    ]
  },
};

export default function Sidebar({ forceOpen, onToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isViewed } = useSidebar();
  const router = useRouter();

  // Efeito para controlar a sidebar externamente (pelo tutorial)
  useEffect(() => {
    if (forceOpen !== undefined) {
      setIsOpen(forceOpen);
    }
  }, [forceOpen]);

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    // Notificar o componente pai sobre a mudança
    if (onToggle) {
      onToggle(newState);
    }
  };

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (path, componentId = null) => {
    if (componentId) {
      if (window.location.pathname === path) {
        scrollToComponent(componentId);
      } else {
        router.push(`${path}#${componentId}`);
      }
    } else {
      router.push(path);
    }
    
    // Só fechar a sidebar se não estiver sendo controlada externamente
    if (forceOpen === undefined) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => {
            // Só permitir fechar clicando no overlay se não estiver sendo controlada externamente
            if (forceOpen === undefined) {
              setIsOpen(false);
            }
          }}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="w-64 p-4 pt-16 h-full overflow-y-auto mt-4 pb-32">
          <h3 className="font-bold text-lg mb-4">Navegação</h3>
          {Object.entries(navigation).map(([pageName, pageData]) => (
            <div key={pageName} className="mb-4">
              <button
                onClick={() => handleNavigation(pageData.path)}
                className="font-semibold mb-2 hover:text-blue-600 transition-colors duration-200 w-full text-left"
              >
                {pageName}
              </button>
              {pageData.components.length > 0 && (
                <div className="ml-4 space-y-1">
                  {pageData.components.map((component) => (
                    <button
                      key={component.id}
                      onClick={() => handleNavigation(pageData.path, component.id)}
                      className="flex items-center gap-2 text-sm hover:text-blue-600 py-1 w-full text-left transition-colors duration-200"
                    >
                      {isViewed(component.id) && (
                        <span className="text-green-600">✓</span>
                      )}
                      {component.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Botão de abrir/fechar */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-1/2 transform -translate-y-1/2 z-50 transition-all duration-200 hover:scale-105
          ${isOpen 
            ? 'left-64' // quando sidebar está aberta
            : 'left-0'  // quando está fechada
          }
          bg-white text-blue-600 border border-blue-600 
          hover:bg-blue-600 hover:text-white 
          p-3 rounded-r-lg shadow-lg
        `}
      >
        {isOpen ? '←' : '→'}
      </button>
    </>
  );
}