import { ArrowDown, Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm mb-4">Olá, meu nome é</p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
          <span className="text-balance">Eduardo Lopes</span>
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6">
          <span className="text-balance">Engenharia de dados, banco de dados & soluções de missão crítica.</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-10">
          Especialista em administração de ambientes críticos em <strong>SQL Server</strong>, relatórios analíticos em <strong>SAP Crystal Reports</strong> e desenvolvimento de aplicações de alta performance em <strong>Java (Spring Boot)</strong> e <strong>Next.js</strong>. Foco em estabilidade, otimização extrema e inteligência operacional.
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <Link
            href="#projetos"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-primary/20"
          >
            Ver Projetos Técnicos
            <ArrowDown className="h-4 w-4" />
          </Link>

          <Link
            href="mailto:eduardolopess1221@gmail.com"
            className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3.5 rounded-md font-medium hover:bg-primary/10 transition-colors"
          >
            <Send className="h-4 w-4" />
            Entrar em Contato
          </Link>

          <div className="flex items-center gap-4 ml-0 sm:ml-2">
            <Link
              href="https://github.com/Eduardolopessd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/eduardo-lopes1221"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:eduardolopess1221@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
