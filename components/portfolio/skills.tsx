const skillCategories = [
  {
    title: "Banco de Dados & BI Corporativo",
    skills: [
      "SQL Server (T-SQL Avançado)",
      "SAP Crystal Reports & BI Executivo",
      "Modelagem Relacional & Normalização",
      "Stored Procedures, Triggers & Views",
      "Otimização de Queries, Planos de Execução & Índices",
      "Conexão com Connection Pooling (HikariCP / mssql)"
    ],
  },
  {
    title: "Backend & Automação de Sistemas",
    skills: [
      "Java 17+ (Spring Boot, Spring Security, JPA/Hibernate)",
      "Microsserviços & Integrações em Rust",
      "Protocolo ZPL & Impressão Térmica Industrial",
      "APIs RESTful com Autenticação JWT Stateless",
      "Cloud Object Storage (Backblaze B2 / AWS S3)",
      "Docker & Orquestração de Ambientes"
    ],
  },
  {
    title: "Frontend & Arquitetura Web Moderna",
    skills: [
      "React & Next.js (App Router, Server Components)",
      "TypeScript & JavaScript Moderno",
      "Vue.js 3 & Vite",
      "Arquiteturas Offline-First (IndexedDB & Dexie.js)",
      "Progressive Web Apps (PWAs & Service Workers)",
      "Tailwind CSS & Componentes Acessíveis (Radix UI)"
    ],
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Habilidades Técnicas</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border/60 pb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2.5 text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
