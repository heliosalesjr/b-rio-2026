import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import Modulo1ContentSection from "@/components/Modulo1ContentSection"


export default function Modulo1() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
      <Hero
        title="O Módulo 1"
        subtitle="Como funciona o programa “Aprendendo a lidar com dinheiro” da BEĨ Educação e a metodologia de aplicação do material"
        />
        
      <Modulo1ContentSection />

      </main>
      <Footer />
    </div>
  )
}

