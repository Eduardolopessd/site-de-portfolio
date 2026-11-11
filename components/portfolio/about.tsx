import { Database, FileBarChart, Clock, ShieldCheck, Zap, Users } from "lucide-react"

export function About() {
  const metrics = [
    {
      icon: Clock,
      value: "-70%",
      label: "Tempo em Queries SQL",
      description: "Otimização de rotinas pesadas, índices estratégicos e refatoração de stored procedures críticas.",
    },
    {
      icon: FileBarChart,
      value: "+120",
      label: "Relatórios Corporativos",
      description: "Desenvolvimento e manutenção no SAP Crystal Reports fornecendo inteligência em tempo real para a diretoria.",
    },
    {
      icon: Zap,
      value: "-85%",
      label: "Erros Operacionais",
      description: "Eliminação de retrabalho manual através de microsserviços automatizados de expedição, precificação e etiquetas.",
    },
    {
      icon: Users,
      value: "8+",
      label: "Setores Conectados",
      description: "Integração contínua entre TI, Estoque, Expedição, Compras, Faturamento, Fiscal e Canais Digitais.",
    },
  ]

  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Sobre Mim & Resultados</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Olá! Sou o <strong>Eduardo Lopes</strong>. Minha trajetória na tecnologia une a solidez da infraestrutura de dados corporativos ao desenvolvimento de software moderno. Atuo na linha de frente gerenciando e otimizando ecossistemas críticos de <strong>SQL Server</strong> e integrando soluções corporativas de missão crítica.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              No dia a dia, administro bancos de alta concorrência com milhões de transações, garantindo integridade, tempos de resposta sub-segundo e disponibilidade contínua. Para a liderança executiva e diretoria, asseguro visibilidade estratégica com mais de uma centena de relatórios analíticos em <strong>SAP Crystal Reports</strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Além de dados e infraestrutura, desenvolvo soluções <strong>Full Stack</strong> com <strong>Java (Spring Boot)</strong>, <strong>Rust</strong>, <strong>React/Next.js</strong> e <strong>TypeScript</strong>, criando microsserviços de alto desempenho que automatizam processos de logística, precificação dinâmica em marketplaces e auditoria de inventário.
            </p>

            <div className="pt-4">
              <p className="text-foreground font-medium mb-4">
                Tecnologias centrais no meu ecossistema:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "SQL Server (T-SQL Avançado)",
                  "SAP Crystal Reports & BI",
                  "Java (Spring Boot / HikariCP)",
                  "React / Next.js / TypeScript",
                  "Arquiteturas Offline-First & PWAs",
                  "Microsserviços & Automações Industriais",
                ].map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative group flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-xs mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-md" />
              <div className="absolute inset-0 border-2 border-primary rounded-md translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              <div className="relative w-full h-full bg-[#112240] rounded-md overflow-hidden flex flex-col items-center justify-center p-6 text-center border border-border">
                <Database className="h-16 w-16 text-primary mb-3" />
                <span className="font-mono text-sm text-foreground font-semibold">Eduardo Lopes</span>
                <span className="text-xs text-muted-foreground mt-1">Data & Backend Systems</span>
                <span className="mt-4 text-[11px] font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/30">
                  SQL Server • Java • Next.js
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Métricas e Resultados Comprovados */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Impacto Mensurável & Resultados Operacionais
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.label}
                  className="bg-card border border-border/80 hover:border-primary/50 transition-all p-6 rounded-lg shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-primary font-mono">{m.value}</span>
                    <div className="p-2 bg-primary/10 rounded-md text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">{m.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{m.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
