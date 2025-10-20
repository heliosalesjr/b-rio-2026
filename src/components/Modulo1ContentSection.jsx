import FadeInWhenVisible from "./FadeInWhenVisible"
import Modulo1Intro from "./content/Modulo1Intro"
import Modulo1Objetivos from "./content/Modulo1Objetivos"
import Modulo1Situacao from "./content/Modulo1Situacao"
import Modulo1Video from "./content/Modulo1Video"
import { Button } from "@/components/ui/button"
import Link from "next/link"
//import Modulo1Midia from "./content/Modulo1Midia"
//import Modulo1Situacao2 from "./content/Modulo1Situacao2"
import Modulo1Midia from "./content/Modulo1Midia"

export default function Modulo1ContentSection() {
    return (
      <section id="content" className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            
                <FadeInWhenVisible>
                  <Modulo1Intro />
                </FadeInWhenVisible>
                  
                <FadeInWhenVisible>
                  <Modulo1Objetivos />
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                  <Modulo1Situacao />
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                  <Modulo1Midia />
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                  <Modulo1Video />
                </FadeInWhenVisible>
                
                
                
                
                
                <div className="flex justify-center mt-8">
                    <Button asChild className={"bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
                    <Link href="/educacaofinanceira">Próxima Página: Educação Financeira</Link>
                    </Button>
                </div>
            
          </div>
        </div>
      </section>
    )
  }
  
  