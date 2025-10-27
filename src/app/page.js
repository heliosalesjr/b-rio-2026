import Navbar from "@/components/Navbar"
import HeroMain from "@/components/HeroMain"
import ContentSection from "@/components/ContentSection"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
      <HeroMain
          title="Formação Material de Educação Financeira"

          
        />
        <ContentSection />
      </main>
      <Footer />
    </div>
  )
}

