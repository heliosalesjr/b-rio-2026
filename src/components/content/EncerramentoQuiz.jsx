"use client";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/contexts/SidebarContext";

const perguntas = [
  {
    id: 1,
    enunciado: "Dos objetivos listados no Módulo 1, qual atividade prática é destacada como o ponto de partida para que o educador possa conhecer melhor seus alunos \"como vivem, seus sonhos\" e como a Educação Financeira pode se integrar à realidade deles?",
    opcoes: [
      "A) A apresentação da Estrutura do Livro do Estudante",
      "B) A discussão sobre a diferença entre Matemática Financeira e Educação Financeira",
      "C) A realização do diagnóstico do perfil da turma",
      "D) A familiarização com as ferramentas e atividades de engajamento",
    ],
    correta: 2,
    feedbacks: [
      "Incorreto. Embora a apresentação da estrutura seja importante, não é a atividade prática destacada como ponto de partida para conhecer os alunos.",
      "Incorreto. Essa discussão conceitual é relevante, mas não é a atividade prática inicial para conhecer a realidade dos alunos.",
      "Correto! O diagnóstico do perfil da turma é a atividade prática essencial para conhecer como os alunos vivem, seus sonhos e integrar a Educação Financeira à realidade deles.",
      "Incorreto. A familiarização com ferramentas é importante, mas não é o ponto de partida para conhecer os alunos e sua realidade.",
    ],
  },
  {
    id: 2,
    enunciado: "O Módulo 1 utiliza reportagens para justificar a urgência da Educação Financeira em sala de aula, destacando qual grande problema que afeta o cotidiano de milhões de brasileiros?",
    opcoes: [
      "A) A baixa taxa de poupança entre os jovens",
      "B) A alta volatilidade do mercado de ações",
      "C) O alto índice de endividamento e inadimplência das famílias",
      "D) A falta de educação empreendedora nas escolas",
    ],
    correta: 2,
    feedbacks: [
      "Embora seja um problema relevante, não é o grande problema destacado pelas reportagens no Módulo 1.",
      "Incorreto. A volatilidade do mercado não é o foco principal das reportagens mencionadas no módulo.",
      "Exato! O alto índice de endividamento e inadimplência das famílias brasileiras é o grande problema destacado para justificar a urgência da Educação Financeira.",
      "Incorreto. Embora a educação empreendedora seja importante, não é o problema central destacado pelas reportagens.",
    ],
  },
  {
    id: 3,
    enunciado: "Qual é o principal foco da Coleção \"Aprendendo a Lidar com Dinheiro\", mencionada no Módulo 1, que a distingue do foco tradicional da Matemática Financeira?",
    opcoes: [
      "A) Tornar o aprendizado de educação financeira mais prático e efetivo",
      "B) Promover a aplicação da autonomia e da abstração matemática",
      "C) Estudar exclusivamente o cálculo de juros compostos",
      "D) Ensinar unicamente sobre investimentos e renda fixa",
    ],
    correta: 0,
    feedbacks: [
      "Perfeito! O principal diferencial da coleção é tornar o aprendizado mais prático e efetivo, indo além dos cálculos tradicionais da Matemática Financeira.",
      "Incorreto. Embora a autonomia seja importante, o foco principal é a praticidade e efetividade do aprendizado.",
      "Incorreto. A coleção vai muito além do estudo exclusivo de juros compostos, abordando aspectos práticos da vida financeira.",
      "Incorreto. A coleção não se limita a investimentos e renda fixa, mas abrange aspectos mais amplos da Educação Financeira.",
    ],
  },
  {
    id: 4,
    enunciado: "A estrutura de navegação do Módulo 1 sugere a abordagem de \"Metodologias Ativas\". Qual o principal objetivo dessas metodologias em sala de aula?",
    opcoes: [
      "A) Aumentar o tempo de aula expositiva do professor",
      "B) Reduzir o diálogo e focar na leitura individual",
      "C) Colocar o estudante no centro do processo de aprendizagem, tornando-o protagonista",
      "D) Utilizar apenas tecnologia, eliminando o material físico",
    ],
    correta: 2,
    feedbacks: [
      "Incorreto. As Metodologias Ativas buscam justamente reduzir o tempo de aula expositiva tradicional.",
      "Incorreto. As Metodologias Ativas valorizam o diálogo e a interação, não sua redução.",
      "Correto! O principal objetivo das Metodologias Ativas é colocar o estudante no centro do processo, tornando-o protagonista da sua aprendizagem.",
      "Incorreto. Metodologias Ativas não se limitam à tecnologia e podem usar diversos recursos, incluindo materiais físicos.",
    ],
  },
  {
    id: 5,
    enunciado: "O Módulo 1 menciona o uso do \"Diário de Bordo\" e do \"Padlet\". Qual a função principal dessas ferramentas no contexto do programa de formação ou da aplicação em sala de aula?",
    opcoes: [
      "A) Servir como material de apoio para cálculos avançados",
      "B) Serem usados como instrumentos de avaliação padronizada (provas)",
      "C) Servir como ferramentas de registro e engajamento para documentar o aprendizado",
      "D) Substituir completamente o livro didático",
    ],
    correta: 2,
    feedbacks: [
      "Incorreto. Essas ferramentas não têm como foco principal os cálculos avançados.",
      "Incorreto. Não são instrumentos de avaliação padronizada, mas sim de registro processual.",
      "Exatamente! O Diário de Bordo e o Padlet funcionam como ferramentas de registro e engajamento, documentando o processo de aprendizagem.",
      "Incorreto. Essas ferramentas complementam, mas não substituem o livro didático.",
    ],
  },
  {
    id: 6,
    enunciado: "O que é fundamental ser estabelecido após o diagnóstico inicial, segundo a lógica das \"Metodologias Ativas\" mencionada no Módulo 1, para garantir o engajamento dos alunos?",
    opcoes: [
      "A) A definição imediata do tema da próxima aula de Matemática",
      "B) O uso de um material didático estritamente teórico",
      "C) A leitura de longos artigos científicos sobre finanças",
      "D) O Fator de Mobilização, que conecta o tema à realidade e aos sonhos da turma",
    ],
    correta: 3,
    feedbacks: [
      "Incorreto. A definição de temas específicos não é o elemento fundamental mencionado para garantir engajamento.",
      "Incorreto. Material estritamente teórico não está alinhado com a proposta de Metodologias Ativas.",
      "Incorreto. A leitura de artigos científicos longos não é a estratégia de engajamento destacada.",
      "Correto! O Fator de Mobilização é fundamental, pois conecta o tema à realidade e aos sonhos dos alunos, garantindo engajamento genuíno.",
    ],
  },
  {
    id: 7,
    enunciado: "Na estrutura do material didático, o que é sugerido para que o professor utilize como um recurso para auxiliar na sua prática e planejamento, complementando o Livro do Estudante?",
    opcoes: [
      "A) O Manual de Economia Global",
      "B) O Guia de Investimentos para Educadores",
      "C) O Livro de Registros Financeiros Pessoais",
      "D) O Caderno do Educador",
    ],
    correta: 3,
    feedbacks: [
      "Incorreto. Não há menção a um Manual de Economia Global como recurso complementar.",
      "Incorreto. O Guia de Investimentos não é o material sugerido para auxiliar o planejamento.",
      "Incorreto. O Livro de Registros Financeiros Pessoais não é mencionado como recurso para o professor.",
      "Perfeito! O Caderno do Educador é o recurso sugerido para auxiliar o professor na sua prática e planejamento.",
    ],
  },
  {
    id: 8,
    enunciado: "Qual conceito pedagógico, frequentemente associado a projetos de longa duração e que está alinhado com o princípio da \"prática e efetividade\" da coleção, é sugerido no conteúdo do Módulo 1?",
    opcoes: [
      "A) Aprendizagem Baseada em Problemas",
      "B) Ensino Tradicional por Repetição",
      "C) Aprendizagem Baseada em Projetos (ABP)",
      "D) Educação Financeira Passiva",
    ],
    correta: 2,
    feedbacks: [
      "Embora seja uma metodologia ativa, não é o conceito específico destacado no Módulo 1.",
      "Incorreto. O Ensino Tradicional por Repetição não está alinhado com os princípios da coleção.",
      "Correto! A Aprendizagem Baseada em Projetos (ABP) é o conceito pedagógico destacado, alinhado com a prática e efetividade da coleção.",
      "Incorreto. A Educação Financeira Passiva não é um conceito pedagógico válido nem está alinhado com a proposta.",
    ],
  },
  {
    id: 9,
    enunciado: "No contexto da formação, qual alternativa expressa melhor a finalidade dos projetos didáticos trabalhados em sala de aula?",
    opcoes: [
      "A) Servir como complemento recreativo às aulas tradicionais.",
      "B) Focar exclusivamente na memorização de conteúdos escolares.",
      "C) Promover aprendizagens significativas por meio da investigação, da colaboração e da resolução de problemas reais.",
      "D) Substituir completamente os conteúdos curriculares de cada disciplina.",
    ],
    correta: 2,
    feedbacks: [
      "Incorreto.",
      "Incorreto.",
      "Exatamente! Muito bem!",
      "Incorreto.",
    ],
  },
  {
    id: 10,
    enunciado: "O Módulo 1 enfatiza que a Educação Financeira deve começar a ser trabalhada em que fase da vida escolar para que seu impacto seja mais duradouro e efetivo?",
    opcoes: [
      "A) Apenas no Ensino Médio, quando o estudante está perto do mercado de trabalho",
      "B) Na faculdade, como uma disciplina de Economia",
      "C) Apenas em cursos técnicos de contabilidade",
      "D) No Ensino Fundamental, de forma transversal e contínua",
    ],
    correta: 3,
    feedbacks: [
      "Incorreto. Esperar até o Ensino Médio limita o impacto duradouro da Educação Financeira.",
      "Incorreto. Começar na faculdade é muito tarde para desenvolver hábitos financeiros saudáveis.",
      "Incorreto. A Educação Financeira não deve se limitar a cursos técnicos de contabilidade.",
      "Correto! O Módulo enfatiza que a Educação Financeira deve começar no Ensino Fundamental, de forma transversal e contínua, para impacto duradouro.",
    ],
  },
];

export default function EncerramentoQuiz() {
  const ref = useRef(null);
  const { markAsViewed } = useSidebar();

  const [respostas, setRespostas] = useState({});
  const [feedback, setFeedback] = useState({
    open: false,
    perguntaId: null,
    mensagem: "",
    correta: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("modulo1-quiz");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  const handleResposta = (perguntaIndex, opcaoIndex) => {
    const pergunta = perguntas[perguntaIndex];
    const jaAcertou = respostas[pergunta.id] === pergunta.correta;

    if (jaAcertou) return;

    const correta = opcaoIndex === pergunta.correta;

    if (correta) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    setRespostas((prev) => ({
      ...prev,
      [pergunta.id]: correta ? opcaoIndex : prev[pergunta.id],
    }));

    setFeedback({
      open: true,
      perguntaId: pergunta.id,
      mensagem: pergunta.feedbacks[opcaoIndex],
      correta,
    });
  };

  const closeFeedback = () => {
    setFeedback({ open: false, perguntaId: null, mensagem: "", correta: false });
  };

  const perguntasCorretas = Object.values(respostas).filter(
    (resposta, index) => resposta === perguntas[index]?.correta
  ).length;

  return (
    <div className="rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100">
      <div
        ref={ref}
        id="modulo1-quiz"
        className="flex items-center justify-center gap-3 mb-8"
      >
        <div className="scroll-mt-20 mt-8 bg-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent pb-8 p-4">
            Quiz do Módulo 1
          </h2>

          <p className="text-slate-700 text-base md:text-lg max-w-3xl mx-auto">
            Para encerrar este módulo, que tal verificar o quanto absorveu do conteúdo? 
            Responda ao quiz para consolidar sua aprendizagem e refletir sobre os principais 
            pontos do Módulo 1 sobre Educação Financeira.
          </p>
        </div>
      </div>

      {Object.keys(respostas).length > 0 && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-center text-blue-700 font-medium">
            Progresso: {perguntasCorretas} de {perguntas.length} perguntas corretas
          </p>
        </div>
      )}

      <div className="space-y-10 text-slate-700">
        {perguntas.map((pergunta, perguntaIndex) => {
          const respostaUsuario = respostas[pergunta.id];

          return (
            <div key={pergunta.id} className="space-y-4">
              <p className="text-xl font-medium">
                <span className="text-blue-600 font-bold">{pergunta.id}.</span>{" "}
                {pergunta.enunciado}
              </p>
              <div className="space-y-3">
                {pergunta.opcoes.map((opcao, opcaoIndex) => {
                  const selecionada = respostaUsuario === opcaoIndex;
                  const jaAcertou = respostaUsuario === pergunta.correta;

                  const cor =
                    selecionada && opcaoIndex === pergunta.correta
                      ? "bg-green-100 border-green-400 text-green-800 font-semibold"
                      : selecionada && opcaoIndex !== pergunta.correta
                      ? "bg-red-100 border-red-400 text-red-800"
                      : "bg-white hover:bg-slate-100 border-slate-300";

                  return (
                    <button
                      key={opcaoIndex}
                      onClick={() => handleResposta(perguntaIndex, opcaoIndex)}
                      disabled={jaAcertou}
                      className={`w-full text-left px-4 py-3 rounded-md border transition-all duration-300 ease-in-out ${cor} ${
                        jaAcertou ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                    >
                      {opcao}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <AlertDialog open={feedback.open}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>
              {feedback.correta ? "✅ Resposta correta!" : "❌ Resposta incorreta"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600 mt-2">
              {feedback.mensagem}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={closeFeedback}>Fechar</Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}