

import FadeInWhenVisible from "./FadeInWhenVisible"
import EncerramentoQuiz from "./content/EncerramentoQuiz"
import Mat4 from "./content/Mat4"
import Mat8 from "./content/Mat8"
import Mat9 from "./content/Mat9"

export default function DiagnosticoContentSection() {
    return (
      <section id="content" className="w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8 mb-16">

            
             
            
            <FadeInWhenVisible>
                <Mat8 />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <EncerramentoQuiz />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <Mat9 />
            </FadeInWhenVisible>
     
            
            
          </div>
        </div>
      </section>
    )
  }