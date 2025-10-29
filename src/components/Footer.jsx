import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t py-12 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo e tagline */}
          <div className="text-center">
            <div className="mb-3">
              <img
                src="/logo_white.png"
                alt="BEĨ Educação"
                className="h-[150px] w-auto mx-auto pb-8"
              />
            </div>
            <p 
              className="text-sm text-white tracking-wider"
              style={{ fontFamily: 'Open Sans Bold, sans-serif' }}
            >
              CONTEÚDO COM PROPÓSITO
            </p>
          </div>

          {/* Ícones de redes sociais */}
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/beieducacao/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            <a 
              href="https://www.beieducacao.com.br" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <span className="sr-only">Website</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </a>
            
            <a 
              href="https://www.youtube.com/c/BE%C4%A8Educa%C3%A7%C3%A3o" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <span className="sr-only">YouTube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-white">
            © 2025 BEĨ Educação - Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  )
}