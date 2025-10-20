import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
//import EFContentSection from "@/components/EFContentSection"
//import Mat4 from "@/components/content/Mat4"
import DiagnosticoContentSection from "@/components/DiagnosticoContentSection"

export default function Diagnostico() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Diagnóstico e Encerramento"
                subtitle="Como funciona o programa “Aprendendo a lidar com dinheiro” da BEĨ Educação e a metodologia de aplicação do material"
                />
       
       <DiagnosticoContentSection />
      </main>
      <Footer />
    </div>
  )
}
