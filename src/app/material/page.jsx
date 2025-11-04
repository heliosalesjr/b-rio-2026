import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import MatContentSection from "@/components/MatContentSection"

export default function Modulo4() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Material Didático"
                subtitle="Conhecendo os livros do estudante e educador, e o início das atividades"
                />
        
        <MatContentSection />
      </main>
      <Footer />
    </div>
  )
}

