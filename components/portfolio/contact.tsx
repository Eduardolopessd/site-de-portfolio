import Link from "next/link"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6 bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-primary font-mono text-sm">04. Conecte-se</span>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
          Vamos Conversar
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Estou disponível para novas oportunidades profissionais, consultorias em banco de dados,
          desenvolvimento de soluções sob medida ou licenciamento de sistemas. Fique à vontade para entrar em contato!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="mailto:eduardolopess1221@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-primary/20 w-full sm:w-auto"
          >
            <Send className="h-5 w-5" />
            Entrar em contato
          </Link>

          <Link
            href="https://www.linkedin.com/in/eduardo-lopes1221"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-4 rounded-md font-medium hover:border-primary hover:text-primary transition-colors w-full sm:w-auto"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </Link>

          <Link
            href="https://github.com/Eduardolopessd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-4 rounded-md font-medium hover:border-primary hover:text-primary transition-colors w-full sm:w-auto"
          >
            <Github className="h-5 w-5" />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
