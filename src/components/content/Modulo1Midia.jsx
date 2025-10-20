"use client";
import React from 'react'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import { ExternalLink } from 'lucide-react'

const Modulo1Midia = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-1-midia');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  const noticias = [
    {
      titulo: "Endividamento das famílias atinge novos patamares",
      fonte: "UOL Economia",
      url: "https://economia.uol.com.br/noticias/redacao/2025/05/26/endividamento.htm"
    },
    {
      titulo: "Endividamento das famílias sobe para 77,6% em abril",
      fonte: "CNN Brasil",
      url: "https://www.cnnbrasil.com.br/economia/endividamento-das-familias-sobe-para-776-em-abril-diz-cnc/"
    },
    {
      titulo: "Empresas alertam governo sobre alto endividamento dos trabalhadores",
      fonte: "Correio Braziliense",
      url: "https://blogs.correiobraziliense.com.br/capital-sa/2025/05/22/empresas-alertam-governo-sobre-alto-endividamento-dos-trabalhadores/"
    },
    {
      titulo: "Recorde de endividados revela fraturas no crescimento econômico",
      fonte: "Veja",
      url: "https://veja.abril.com.br/economia/recorde-de-endividados-revela-fraturas-no-crescimento-economico-do-brasil/"
    },
    {
      titulo: "64% dos trabalhadores tiveram saúde mental afetada por problemas financeiros",
      fonte: "Exame",
      url: "https://exame.com/carreira/setembro-amarelo-64-dos-trabalhadores-tiveram-a-saude-mental-afetada-por-problemas-financeiros/"
    },
    {
      titulo: "Educação financeira contribui para a saúde mental",
      fonte: "Sicredi",
      url: "https://www.sicredi.com.br/coop/celeiro-mtrr/noticias/educacao/educacao-financeira-contribui-para-a-saude-mental/"
    },
    {
      titulo: "Quase metade dos brasileiros está inadimplente",
      fonte: "Valor Econômico",
      url: "https://valor.globo.com/brasil/noticia/2025/05/19/quase-metade-dos-brasileiros-esta-inadimplente.ghtml"
    }
  ]

  const coluna1 = noticias.slice(0, Math.ceil(noticias.length / 2))
  const coluna2 = noticias.slice(Math.ceil(noticias.length / 2))

  return (
    <div ref={ref} id="modulo-1-midia" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100">
      <div className="flex items-center justify-center gap-3 mb-8">
        
        <h2 className="text-3xl font-bold text-center text-slate-700">
          Educação Financeira na Mídia
        </h2>
        
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        {/* Coluna 1 */}
        <div className="space-y-4">
          {coluna1.map((noticia, index) => (
            <a
              key={index}
              href={noticia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-500 group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {noticia.titulo}
                  </h3>
                  <p className="text-sm font-medium text-slate-600">
                    {noticia.fonte}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>

        {/* Coluna 2 */}
        <div className="space-y-4">
          {coluna2.map((noticia, index) => (
            <a
              key={index}
              href={noticia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-500 group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300 mb-2">
                    {noticia.titulo}
                  </h3>
                  <p className="text-sm font-medium text-slate-600">
                    {noticia.fonte}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-green-600 transition-colors duration-300 flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modulo1Midia