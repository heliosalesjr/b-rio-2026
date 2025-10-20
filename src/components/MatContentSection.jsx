
import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "./FadeInWhenVisible"
import Mat1 from "./content/Mat1"
import Mat2 from "./content/Mat2"
import Mat3 from "./content/Mat3"
import Mat4 from "./content/Mat4"
import Mat5 from "./content/Mat5"
import Mat6 from "./content/Mat6"
import Mat7 from "./content/Mat7"
//import Mat8 from "./content/Mat8"
//import Mat9 from "./content/Mat9"


export default function ContentSection() {
  return (
    <section id="content" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          
            <Mat1 />
          
          <FadeInWhenVisible>
            <Mat2 />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <Mat3 />
          </FadeInWhenVisible>
          
          <FadeInWhenVisible>
            <Mat5 />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <Mat6 />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <Mat7 />
          </FadeInWhenVisible>
          
          
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/diagnostico">Próxima Página: Diagnóstico e Encerramento</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

