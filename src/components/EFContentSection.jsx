import { Button } from "@/components/ui/button"
import FadeInWhenVisible from "./FadeInWhenVisible"
import Link from "next/link"
import EFIntro from "./content/EFIntro"
import EF2 from "./content/EF2"
import EF3 from "./content/EF3"
import EF4 from "./content/EF4"
import EF5 from "./content/EF5"

export default function EFContentSection() {
    return (
      <section id="content" className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">

            <FadeInWhenVisible>
              <EFIntro />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <EF2 />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <EF3 />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <EF4 />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <EF5 />
            </FadeInWhenVisible>
     
            
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/metodologias">Próxima Página: Metodologias</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  