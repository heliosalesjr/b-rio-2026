"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import { motion } from "framer-motion";
import {
  Lightbulb,
  Globe,
  Layers,
  Users,
  CheckSquare,
  Brain,
  BookOpenCheck,
} from "lucide-react";

const cards = [
  {
    title: "PROTAGONISMO DO ALUNO",
    text: [
      "Autonomia na aprendizagem",
      "Maior engajamento e motivação",
    ],
    icon: BookOpenCheck,
    color: "bg-green-100",
  },
  {
    title: "PROBLEMAS DO MUNDO REAL",
    text: [
      "Projetos baseados em desafios reais",
      "Aplicação prática do conhecimento",
    ],
    icon: Globe,
    color: "bg-blue-100",
  },
  {
    title: "INTERDISCIPLINARIDADE",
    text: [
      "Integração de diferentes áreas do conhecimento",
      "Conexões entre teoria e prática",
    ],
    icon: Layers,
    color: "bg-teal-100",
  },
  {
    title: "TOMADA DE DECISÃO",
    text: [
      "Planejamento e gestão de projetos",
      "Resolução de problemas complexos",
    ],
    icon: CheckSquare,
    color: "bg-cyan-100",
  },
  {
    title: "RESOLUÇÃO DE PROBLEMAS",
    text: [
      "Desenvolvimento do pensamento crítico",
      "Criatividade e inovação",
    ],
    icon: Brain,
    color: "bg-lime-100",
  },
  {
    title: "TRABALHO EM EQUIPE",
    text: [
      "Desenvolvimento de habilidades sociais",
      "Colaboração e troca de ideias",
    ],
    icon: Users,
    color: "bg-emerald-100",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Met3() {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('met-3');
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
    <div ref={ref} id="met-3" className="scroll-mt-20 bg-gradient-to-br from-blue-50 to-emerald-50 py-16 px-6 flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-blue-900"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        ABP - Aprendizagem Baseada em Projetos
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              className="relative bg-white p-6 rounded-2xl shadow-xl border border-green-100 overflow-visible"
              variants={item}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className={`absolute -top-6 -left-6 ${card.color} p-3 rounded-full shadow-md`}
              >
                <Icon className="text-green-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-blue-900 mb-2">
                {card.title}
              </h3>
              <ul className="list-disc ml-4 text-gray-700 text-sm space-y-1">
                {card.text.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
