import React from 'react'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const PageApresentacao3 = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
            {/* Second Component - FAQ */}
            <div className="rounded-lg bg-white p-6 shadow-2xl">
              <h2 className="mb-4 text-2xl font-bold">Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>O que é Next.js?</AccordionTrigger>
                  <AccordionContent>
                    Next.js é um framework React que permite funcionalidades como renderização do lado do servidor e
                    geração de sites estáticos para aplicativos web baseados em React.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>O que é shadcn/ui?</AccordionTrigger>
                  <AccordionContent>
                    shadcn/ui é uma coleção de componentes reutilizáveis que você pode copiar e colar em seus
                    aplicativos, totalmente personalizáveis e acessíveis.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Este site é responsivo?</AccordionTrigger>
                  <AccordionContent>
                    Sim! Este site foi construído com design responsivo em mente, adaptando-se a diferentes tamanhos de
                    tela.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Third Component - Image with hover effect */}
            <div className="rounded-lg bg-white p-6 shadow-2xl">
              <div className="relative group">
                <Image
                  src="/ph.jpg"
                  alt="Imagem com overlay"
                  width={400}
                  height={250}
                  className="w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                  <p className="text-white p-4 text-center">
                    Este é um texto explicativo que aparece quando você passa o mouse sobre a imagem. Ele fornece
                    informações adicionais sobre o conteúdo da imagem.
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Legenda da imagem - passe o mouse para ver mais detalhes
                </p>
              </div>
            </div>
          </div>
  )
}

export default PageApresentacao3