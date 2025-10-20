import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "./FadeInWhenVisible"
import Met1 from './content/Met1'
import Met2 from './content/Met2'
import Met3 from './content/Met3'
import Met4 from './content/Met4'
import Met5 from './content/Met5'
import Met6 from './content/Met6'

const MetContentSection = () => {
  return (
    <section id="content" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          <FadeInWhenVisible>
            <Met1 />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Met2 />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Met3 />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Met4 />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Met5 />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Met6 />
          </FadeInWhenVisible>
          
          
          
          
          
          
          {/* Next Page Button */}
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/material">Próxima Página: Material Didático</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MetContentSection