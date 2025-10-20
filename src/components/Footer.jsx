import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t py-12 bg-blue-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo e tagline */}
          <div className="text-center">
            <h3 className="text-xl font-serif tracking-wide text-white">BEĨ Educação</h3>
            <p className="mt-1 text-sm italic text-white">conteúdo com propósito</p>
          </div>

          {/* Ícones de redes sociais */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
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
            <a href="mailto:contato@meuprojeto.com" className="hover:text-gray-300 transition-colors duration-200">
              <span className="sr-only">Email</span>
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
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

          {/* Links legais */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
              Termos de Uso
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
              Cookies
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs text-white">© 2025 todos os direitos</div>
        </div>
      </div>
    </footer>
  )
}
