"use client";
import React, { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import { ExternalLink, TrendingDown, HeartPulse, Building2, GraduationCap } from "lucide-react";

export default function Modulo1Midia() {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("modulo-1-midia");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div
      ref={ref}
      id="modulo-1-midia"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-10 shadow-2xl border border-slate-100"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Cabeçalho */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Educação Financeira na Mídia
          </h2>
        </div>

        {/* Bloco 1 – Endividamento */}
        <section className="bg-white/80 p-8 rounded-xl shadow-md border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="h-7 w-7 text-blue-600" />
            <h3 className="text-2xl font-semibold text-slate-800">Endividamento das Famílias</h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            O endividamento das famílias brasileiras alcança níveis preocupantes e vem se agravando progressivamente. 
            Em abril de 2025, por exemplo, <strong>77,6% das famílias</strong> já se declaravam endividadas, segundo dados da CNC — 
            representando o terceiro mês seguido de aumento. 
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Segundo artigo da{" "}
            <a
              href="https://www.cnnbrasil.com.br/economia/endividamento-das-familias-sobe-para-776-em-abril-diz-cnc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              CNN Brasil <ExternalLink className="h-4 w-4" />
            </a>
            , esse cenário evidencia uma fragilidade crescente no orçamento doméstico, especialmente considerando 
            que parcela significativa dessas dívidas está em atraso, com inadimplência atingindo aproximadamente 29,1% no mesmo período.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Em agosto de 2025, o índice de inadimplência bateu 30,4%, confirmando o maior patamar da série histórica da CNC. 
            Quase metade dos brasileiros encontra-se inadimplente — uma situação que revela profundas{" "}
            <em>“fraturas no crescimento econômico”</em> do país, como destacou o{" "}
            <a
              href="https://economia.uol.com.br/noticias/redacao/2025/05/26/endividamento.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              UOL Economia <ExternalLink className="h-4 w-4" />
            </a>.
          </p>
        </section>

        {/* Bloco 2 – Saúde emocional */}
        <section className="bg-white/80 p-8 rounded-xl shadow-md border-l-4 border-l-pink-500 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <HeartPulse className="h-7 w-7 text-pink-600" />
            <h3 className="text-2xl font-semibold text-slate-800">Saúde Mental e Finanças</h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Esse quadro financeiro adverso não afeta apenas as finanças materiais — ele tem 
            repercussões diretas na <strong>saúde emocional</strong> das pessoas. Problemas financeiros são reconhecidos como fortes gatilhos 
            de ansiedade, estresse e depressão, comprometendo o bem-estar e o desempenho profissional.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Programas de educação financeira surgem como ferramentas eficazes para mitigar esses impactos. 
            Segundo o{" "}
            <a
              href="https://www.sicredi.com.br/site/blog/educacao-financeira/saude-mental-financas-voce-precisa-saber/?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              Sicredi <ExternalLink className="h-4 w-4" />
            </a>
            , aprender a gerir recursos é uma estratégia que auxilia também no cuidado com a saúde mental, 
            promovendo engajamento e produtividade.
          </p>
        </section>

        {/* Bloco 3 – Impacto social */}
        <section className="bg-white/80 p-8 rounded-xl shadow-md border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-7 w-7 text-green-600" />
            <h3 className="text-2xl font-semibold text-slate-800">Impacto Social e Econômico</h3>
          </div>
          <p className="text-slate-700 leading-relaxed">
            O impacto social e econômico do alto endividamento não é negligenciável. Empresas e sindicatos já vêm alertando o governo sobre o alto endividamento dos trabalhadores, que limita o consumo interno e amplia vulnerabilidades sociais. 

          </p>

          <p className="text-slate-700 leading-relaxed pt-6">
            Diante desse panorama, a educação financeira emerge como intervenção estratégica, capaz de articular conhecimento técnico e atitudes sustentáveis no uso do crédito. O curso que você está desenvolvendo pode mostrar caminhos para romper esse ciclo: Se capacitar para estimular o protagonismo de seus estudantes e fortalecer a cultura do planejamento financeiro na escola. Ao revelar que finanças conscientes e bem-estar emocional andam juntos, promovemos não apenas cidadãos mais competentes, mas também comunidades mais saudáveis e resilientes.

          </p>
        </section>

        {/* Bloco 4 – Conclusão */}
        <section className="bg-white/80 p-8 rounded-xl shadow-md border-l-4 border-l-yellow-500 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-7 w-7 text-yellow-600" />
            <h3 className="text-2xl font-semibold text-slate-800">Educação Financeira e Bem-Estar</h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Promover a saúde financeira é, portanto, investir em bem-estar, autonomia e cidadania. Ao compreender que finanças conscientes e equilíbrio emocional caminham juntos, formamos não apenas cidadãos mais competentes, mas também comunidades mais saudáveis, resilientes e solidárias  pilares essenciais para um país mais equilibrado e próspero.
          </p>
          
        </section>
      </div>
    </div>
  );
}
