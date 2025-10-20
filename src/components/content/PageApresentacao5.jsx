"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function CourseStructure() {
  const modules = [
    {
      title: "MÓDULO 1 - Como funciona o programa “Aprendendo a lidar com dinheiro” da BEĨ Educação e sua metodologia de aplicação",
      topics: [
        "Educação Financeira na sala de aula",
        "O programa da BEĨ Educação",
        "O material didático",
        "Iniciando a aplicação",
        "Recapitulando",
      ],
    },
    {
      title: "MÓDULO 2 - Como planejar aulas e orientar os estudantes a realizar os projetos em sala de aula",
      topics: [
        "Roteiro para elaboração do PPDA e PDA",
        "Matriz de habilidades (Quadro Geral das Etapas)",
        "Ferramenta SMART: um modelo para aperfeiçoar suas metas",
        "Ferramenta 5W2H: um modelo de plano de ação de atividades",
      ],
    },
    {
      title: "MÓDULO 3 - Como realizar o monitoramento e ferramentas de avaliação de aprendizagem ao longo do programa",
      topics: [
        "Tópico 1",
        "Tópico 2",
      ],
    },
    {
      title: "MÓDULO 4 - Como realizar o encerramento e consolidar os registros das atividades resultantes do programa",
      topics: [
        "Tópicos ainda a definir...",
      ],
    },
  ]

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('apresentacao-4');
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
    <section ref={ref} id="apresentacao-4" className="w-full scroll-mt-20">
      <div className="container max-w-6xl bg-white p-6 rounded-lg shadow-2xl">
        <h2 className="mb-4 text-3xl text-center font-bold">Módulos</h2>
        <Accordion type="single" collapsible className="w-ful mx-4">
          {modules.map((module, index) => (
            <AccordionItem key={index} value={`module-${index}`} className="text-2xl">
              <AccordionTrigger>{module.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-4 space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
