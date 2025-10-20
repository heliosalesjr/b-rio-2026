"use client"
import { useEffect, useRef, useState  } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Mat8 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('mat-8');
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
    <div ref={ref} id="mat-8" className="scroll-mt-20 bg-white rounded-lg shadow-2xl p-6 md:p-10 space-y-8 text-center">
      {/* Título */}
      <h2 className="text-2xl md:text-4xl font-bold text-slate-700">
        Encerrando o Módulo 1
      </h2>

      {/* Subtítulo */}
      <p className="text-slate-700 text-base md:text-lg max-w-3xl mx-auto">
        Chegamos ao final do primeiro módulo da nossa trilha de aprendizagem. Assista a seguir um vídeo com um resumo dos conteúdos abordados:
      </p>

      {/* Vídeo */}
      <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/6QVRbZvtHfw"
          title="Resumo Módulo 1"
          allowFullScreen
        ></iframe>
      </div>

      {/* Accordion de Referências */}
      <div className="text-left max-w-3xl mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg px-6 py-4 shadow border border-slate-200 text-slate-800 font-semibold"
        >
          Acesse aqui as Referências Gerais de nosso conteúdo
          {isOpen ? (
            <FaChevronUp className="text-slate-600" />
          ) : (
            <FaChevronDown className="text-slate-600" />
          )}
        </button>

        {isOpen && (
          <div className="bg-white border border-t-0 border-slate-200 rounded-b-lg px-6 py-4 space-y-4 text-sm text-slate-700">
            <p><strong>BACICH, L; MORAN, J.</strong> (Org.) Metodologias ativas para uma educação inovadora: uma abordagem teórico-prática. Porto Alegre: Penso, 2018.</p>
            <p><strong>BENDER, W., N.</strong> Aprendizagem Baseada em Projetos. Porto Alegre: Penso, 2015.</p>
            <p><strong>BRASIL.</strong> Ministério da Educação. Base Nacional Comum Curricular. Brasília, 2018.</p>
            <p>
              <strong>MOÇO, Anderson.</strong> 14 Perguntas e Respostas sobre Projetos Didáticos. Nova Escola, 2011. <br />
              Disponível em: <a href="https://novaescola.org.br/conteudo/424/14-perguntas-e-respostas-sobre-projetos-didaticos" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://novaescola.org.br/conteudo/424/14-perguntas-e-respostas-sobre-projetos-didaticos</a>
            </p>
            <p>
              <strong>NAOMI, Aline.</strong> Aprendizagem Baseada em Projetos: entenda o que é e como funciona na prática. Nova Escola, 2021. <br />
              Disponível em: <a href="https://novaescola.org.br/conteudo/20407/aprendizagem-baseada-em-projetos-entenda-o-que-e-e-como-funciona-na-pratica" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://novaescola.org.br/conteudo/20407/aprendizagem-baseada-em-projetos-entenda-o-que-e-e-como-funciona-na-pratica</a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Mat8
