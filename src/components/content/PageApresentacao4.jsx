"use client";
import { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import {
  Compass,
  Layers,
  MousePointerClick,
  LibraryBig,
  Handshake,
} from "lucide-react";

export default function PageApresentacao4() {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed("estrutura");
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  const cards = [
    {
      icon: Compass,
      title: "Visão geral da formação",
      text: "Esta formação em Educação Financeira faz parte da metodologia da BEĨ Educação e propõe um percurso dividido em quatro ciclos formativos. A ideia é apoiar o professor passo a passo, desde o diagnóstico e planejamento até a aplicação prática em sala e a reflexão sobre os resultados.",
      color: "from-blue-50 to-blue-100 border-blue-300 text-blue-700",
    },
    {
      icon: Layers,
      title: "Ciclos formativos (módulos)",
      text: "Cada módulo corresponde a um ciclo formativo, com foco em um momento específico do trabalho pedagógico. Juntos, eles compõem a trilha completa da formação: compreender, planejar, aplicar e refletir. Em cada módulo, o participante encontrará textos, exemplos e atividades que ajudam a transformar o conteúdo em prática.",
      color: "from-green-50 to-green-100 border-green-300 text-green-700",
    },
    {
      icon: MousePointerClick,
      title: "Como navegar",
      text: "O site foi pensado para ser intuitivo e flexível. Em cada módulo, você pode ler os textos, explorar os boxes de reflexão, acessar links complementares e baixar os materiais de apoio. Não há uma ordem rígida — o importante é avançar no seu ritmo, conectando teoria e prática.",
      color: "from-yellow-50 to-yellow-100 border-yellow-300 text-yellow-700",
    },
    {
      icon: LibraryBig,
      title: "Recursos e referências",
      text: "Ao longo dos módulos, estão disponíveis referências bibliográficas, vídeos, planos de aula e materiais de apoio. Eles servem para aprofundar o estudo e oferecer ferramentas concretas para o trabalho em sala de aula.",
      color: "from-purple-50 to-purple-100 border-purple-300 text-purple-700",
    },
    {
      icon: Handshake,
      title: "Conexão com a prática",
      text: "A formação parte da realidade escolar e volta para ela. Cada proposta foi pensada para inspirar práticas de Educação Financeira que façam sentido no cotidiano das escolas e dialoguem com os alunos, suas famílias e a comunidade.",
      color: "from-pink-50 to-rose-100 border-pink-300 text-rose-700",
    },
  ];

  return (
    <section
      ref={ref}
      id="estrutura"
      className="scroll-mt-20 w-full rounded-xl bg-gradient-to-br from-white to-slate-100 p-10 shadow-2xl border border-slate-200"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Título */}
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Estrutura e Navegação da Formação
        </h2>

        {/* Container dos cards */}
        <div className="space-y-8">
          {/* Primeira linha: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.slice(0, 3).map((card, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${card.color} rounded-xl border p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4`}
              >
                <div className="bg-white rounded-full p-4 shadow-inner">
                  <card.icon className={`w-10 h-10 ${card.text}`} />
                </div>
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="text-slate-700 leading-relaxed text-justify">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Segunda linha: 2 cards centralizados */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
              {cards.slice(3, 5).map((card, i) => (
                <div
                  key={i + 3}
                  className={`bg-gradient-to-br ${card.color} rounded-xl border p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4`}
                >
                  <div className="bg-white rounded-full p-4 shadow-inner">
                    <card.icon className={`w-10 h-10 ${card.text}`} />
                  </div>
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <p className="text-slate-700 leading-relaxed text-justify">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}