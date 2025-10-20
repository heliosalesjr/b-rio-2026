'use client'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Sparkles, Brain, Users, Lightbulb, NotebookPen, ArchiveRestore, ShieldQuestion } from "lucide-react"

const SectionCard = ({ icon: Icon, title, children, color = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="mx-2 md:mx-4"
  >
    <Card className={`bg-white p-8 rounded-2xl shadow-md border border-blue-200`}>  
      <CardHeader className="flex items-center gap-4">
        <Icon className="w-6 h-6 text-blue-700" />
        <CardTitle className="text-xl text-slate-800 font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="mt-4 text-slate-700 text-justify leading-relaxed space-y-4 font-medium">
        {children}
      </CardContent>
    </Card>
  </motion.div>
)

const ImageSection = ({ src, alt, caption }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
    className="mx-2 md:mx-4 my-8"
  >
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-white text-lg font-semibold drop-shadow-lg">
            {caption}
          </p>
        </div>
      )}
    </div>
  </motion.div>
)

export default function Mat4() {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('mat-4');
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
    <div ref={ref} id="mat-4" className="scroll-mt-20 max-w-5xl mx-auto my-16 p-6 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl shadow-2xl pt-16 pb-16">
      <motion.h1
        className="text-center text-3xl md:text-4xl font-bold text-slate-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Diagnóstico do perfil da turma e de seus conhecimentos prévios
      </motion.h1>

      <div className="space-y-8">
        <SectionCard icon={Sparkles} title="Determinar o perfil da turma">
          <p>
            Determinar o perfil da turma é um momento precioso no qual o educador descobre os interesses dos estudantes, seus talentos e desejos, destaca suas qualidades e seus potenciais, e identifica dificuldades e limites que devem ser superados.
          </p>
          <p>
            Isso deve auxiliá-lo a criar atividades que engajem a turma, assim como a selecionar os materiais que subsidiarão o seu trabalho. Em sala de aula, quando se fala de algo que tem relação com a realidade do estudante fora da escola, o interesse pela aprendizagem aumenta, e ela se torna mais significativa.
          </p>
        </SectionCard>

        {/* IMAGEM 1 - Após introdução sobre perfil da turma */}
        <ImageSection 
          src="/stu1.jpg" 
          alt="Estudantes interagindo em sala de aula"
          caption="Conhecer os interesses dos estudantes é fundamental para uma aprendizagem significativa"
        />

        <SectionCard icon={Brain} title="Diagnóstico de conhecimentos prévios">
          <p>
            Já em relação ao diagnóstico de conhecimentos prévios, é possível avaliar até que ponto os estudantes dominam os conteúdos que são pré-requisitos para a aplicação deste programa. Se os jovens não dominam conhecimentos básicos, não adianta avançar com o programa sem resolver as dificuldades prévias.
          </p>
          <p>
            Nesse caso, é preciso adotar estratégias para recuperar o conhecimento de forma que todos possam avançar no aprendizado.
          </p>
        </SectionCard>

        <SectionCard icon={Users} title="Para o diagnóstico do perfil da turma, considere:">
          <ul className="list-disc list-inside space-y-1">
            <li>O que meus alunos gostam de fazer? Quais atividades realizam fora da escola?</li>
            <li>Quais suas realidades?</li>
            <li>Quais seus planos para o futuro?</li>
            <li>Quem são as pessoas que admiram e por quê?</li>
          </ul>
        </SectionCard>

        <SectionCard icon={Lightbulb} title="Para refletir">
          <p>Como estas informações podem interferir no trabalho de sala de aula?</p>
        </SectionCard>

        {/* IMAGEM 2 - Após reflexão, antes das sugestões práticas */}
        <ImageSection 
          src="/stu3.jpg" 
          alt="Educador conduzindo atividade participativa"
          caption="Ferramentas participativas aproximam educadores e estudantes"
        />

        <SectionCard icon={NotebookPen} title="Sugestões de abordagem participativa">
          <p>
            Sugerimos o uso de ferramentas participativas, com capacidade de estimular uma aproximação entre educador e educandos e entre os próprios jovens, proporcionando um melhor conhecimento uns dos outros.
          </p>
          <p>Algumas ideias para realizar o diagnóstico do perfil da turma:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>→ Jogo de perguntas e respostas</li>
            <li>→ Bate-papo em pequenos grupos</li>
            <li>→ Roda de conversa</li>
            <li>→ "A pessoa mais importante da minha vida"</li>
            <p className='text-blue-900 pt-4'>(Estratégias descritas nas páginas 14 a 18 do Caderno do Educador)</p>
          </ul>
        </SectionCard>

        <SectionCard icon={ShieldQuestion} title="Para o diagnóstico de conhecimentos prévios, considere as seguintes informações:">
          <ul className="list-disc list-inside space-y-1">
            <li>Quais conteúdos prévios são necessários para abordar os temas de Educação Financeira e Matemática propostos neste Programa?</li>
            <li>Que aspectos do componente curricular devem ser retomados?</li>
            <li>Que tópicos são importantes em Educação Financeira?</li>
          </ul>
        </SectionCard>

        {/* IMAGEM 3 - Antes da última seção, destacando diagnóstico */}
        <ImageSection 
          src="/stu2.jpg" 
          alt="Estudantes realizando atividades de diagnóstico"
          caption="Atividades diagnósticas ajudam a identificar conhecimentos prévios e direcionar o ensino"
        />

        <SectionCard icon={ArchiveRestore} title="Algumas ideias para realizar o diagnóstico de conhecimentos prévios">
          <ul className="list-disc list-inside space-y-1">
            <li>→ Atividades dos capítulos 1, 2 e 3 do Livro do Estudante</li>
            <li>→ Sondagem por meio do Google Formulários</li>
            <li>→ Quiz sobre conteúdo de matemática do ano anterior</li>
            <li>→ Provinhas (importante deixar claro aos estudantes que não vale nota)</li>
            <p className='text-blue-900 pt-4'>(Estratégias descritas nas páginas 14 a 18 do Caderno do Educador)</p>
          </ul>
        </SectionCard>
      </div>
    </div>
  )
}