"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronDown, ChevronUp, ShoppingCart, Lock, Database, Layers, CheckCircle2, AlertTriangle, ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface TechnicalDossier {
  problemasResolvidos: string
  arquitetura: string
  armazenamento: string
  autenticacao: string
  bancoDados: string
  dificuldadesResolvidas: string
}

interface CommercialOffer {
  headline: string
  pitch: string
  pontosFortes: string[]
  marketplaces: string[]
  ctaText: string
  ctaHref: string
}

interface Project {
  id: string
  title: string
  category: string
  badge?: string
  description: string
  tags: string[]
  github?: string
  live?: string
  commercial?: CommercialOffer
  technical?: TechnicalDossier
}

const projects: Project[] = [
  {
    id: "precificador-automatico",
    title: "Precificador Automático Enterprise",
    category: "Software Comercial / E-commerce Automation",
    badge: "Disponível para Compra / Licença",
    description:
      "Motor completo de reprecificação dinâmica e proteção de margem de lucro para operações de e-commerce e sellers multi-marketplace. Elimina prejuízos operacionais, calcula automaticamente comissões complexas e taxas fixas e executa atualizações em massa conectando diretamente ao ERP.",
    tags: ["Java", "JavaFX", "SQL Server", "Multi-Marketplace", "Segurança / Stop-Loss", "Auditoria"],
    commercial: {
      headline: "Por que adquirir este código para sua operação ou cliente?",
      pitch:
        "Se você ou sua empresa vendem em múltiplos marketplaces, já enfrentou o pesadelo de perder margem por alterações repentinas de taxas, faixas de preço de frete obrigatório ou erros manuais de cadastro de equipe. Este software foi concebido e testado em ambiente de produção de alto volume para resolver isso de ponta a ponta.",
      marketplaces: [
        "Mercado Livre (Clássico e Premium com faixas escalonadas e taxa fixa abaixo de R$ 79)",
        "Amazon DBA (FBA e logística direta com cálculo de comissão de categoria e custos de armazenagem)",
        "Shopee (regras tributárias, comissões de frete grátis e taxas transacionais)",
        "Canais Próprios & B2B (regras de margem líquida customizadas e markup dinâmico)"
      ],
      pontosFortes: [
        "Sistema de Trava de Preço e Stop-Loss: proteção algorítmica rigorosa que bloqueia vendas abaixo da margem mínima estabelecida pela diretoria.",
        "Programador de Ofertas Temporárias: agendamento automático de campanhas com horário de início/fim e rollback autônomo para o preço padrão.",
        "Trilha Completa de Auditoria: histórico transacional que registra data, hora, usuário, SKU, valor anterior, novo valor e justificativa da alteração.",
        "Execução Concorrente em Lote: processamento de milhares de SKUs em segundos via conexão direta de alto desempenho com o banco SQL Server do ERP.",
        "Hierarquia de Permissões Administrativas: controle de acesso para alteração de margens críticas protegido por autenticação em dois níveis."
      ],
      ctaText: "Entrar em contato para comprar o código",
      ctaHref: "mailto:eduardolopess1221@gmail.com?subject=Interesse%20na%20Aquisicao%20do%20Precificador%20Automatico&body=Ola%20Eduardo,%20tenho%20interesse%20em%20adquirir%20o%20codigo/licenca%20do%20Precificador%20Automatico%20Enterprise.%20Gostaria%20de%20agendar%20uma%20conversa."
    },
    technical: {
      problemasResolvidos:
        "Automatiza a precificação multi-canal considerando custo da mercadoria, regime tributário, comissões de cada marketplace, frete obrigatório e margem líquida desejada. Elimina o risco de vendas no prejuízo causadas por reajustes unilaterais de taxas de canais de venda.",
      arquitetura:
        "Desktop Client Enterprise em Java modular estruturado em MVC + DAO, com camada de regras de cálculo isoladas por canal (`MarketplaceCalculator`, `MlCalculator`, `AmazonDBACalculator`) e runner de segundo plano para processamento em lote assíncrono.",
      armazenamento:
        "Conexão JDBC direta e transacional com SQL Server corporativo (`ConexaoBanco` com pool de conexões), desacoplando a base de autenticação/permissões da base de produção do ERP.",
      autenticacao:
        "Controle de sessão local com níveis de privilégio (Operador e Administrador), exigindo autenticação administrativa (`AdminAuthDialog`) para alteração de regras de comissão e remoção de travas de preço.",
      bancoDados:
        "Integração com tabelas e views transacionais de produtos, histórico de preços (`LogPreco`), travas de segurança (`TravaPreco`) e ofertas programadas, mantendo integridade referencial e auditoria.",
      dificuldadesResolvidas:
        "Parametrização precisa de algoritmos tributários e taxas compostas não-lineares (como o frete escalonado do Mercado Livre para produtos abaixo de R$ 79 e percentuais variáveis por categoria na Amazon), garantindo que a margem real no bolso do vendedor nunca fique negativa."
    }
  },
  {
    id: "financas-seven",
    title: "Finanças Seven",
    category: "Web Application / PWA",
    badge: "Offline-First",
    description:
      "Plataforma de gestão financeira pessoal focada em extrema privacidade, velocidade e resiliência offline. Permite controle minucioso de receitas, despesas e orçamentos mensais sem depender de conexão ou APIs de terceiros.",
    tags: ["Next.js", "TypeScript", "IndexedDB", "Dexie.js", "PWA", "Service Workers", "Tailwind CSS"],
    github: "https://github.com/Eduardolopessd/App-controle-financeiro-",
    live: "https://app-controle-financeiro-seven.vercel.app",
    technical: {
      problemasResolvidos:
        "Ajuda a registrar receitas e despesas, acompanhar o saldo e os gastos por período e categoria, definir limites mensais e visualizar o fluxo financeiro — incluindo de onde vem a renda e para onde vão as despesas. O foco é permitir esse controle com rapidez, inclusive sem conexão, mantendo os dados financeiros sob custódia exclusiva no dispositivo do usuário.",
      arquitetura:
        "A interface é uma aplicação web instalável (PWA). O service worker é registrado pelo app e o navegador mantém os recursos da aplicação disponíveis conforme as regras de cache definidas em public/sw.js. Os registros financeiros são gravados diretamente no IndexedDB, por meio do Dexie; portanto, operações de leitura e escrita não dependem de uma chamada a um servidor. A aplicação também acompanha os eventos de conectividade para refletir se o dispositivo está online ou offline.",
      armazenamento:
        "Categorias, transações e orçamentos são persistidos localmente no IndexedDB. O Dexie React Hooks observa essas tabelas, e useLiveQuery atualiza as telas quando os dados locais mudam. Nesse contexto, 'sincronização' significa manter a interface reativa ao banco local — sem latência de rede. Os dados ficam no navegador/dispositivo com total soberania do usuário.",
      autenticacao:
        "Atualmente, os dados residem localmente no navegador, garantindo que nenhuma informação pessoal ou financeira transite para servidores terceiros. A privacidade decorre da retenção 100% client-side, eliminando vetores de ataque em nuvem.",
      bancoDados:
        "O banco local FinanceDB, definido em lib/db.ts, tem três tabelas: categories (nome, ícone, cor e tipo), transactions (descrição, valor, tipo, categoryId e timestamp) e budgets (categoryId, limite e mês no formato YYYY-MM). Os IDs são autoincrementais, com índices estruturados para consultas eficientes por período e categoria, além de rotinas de seeding com categorias padrão na primeira inicialização.",
      dificuldadesResolvidas:
        "A implementação reúne persistência local assíncrona e reativa com Dexie, consultas e filtros em memória por período/categoria sem lentidão na UI, ciclo de vida de PWA com service worker resiliente e análise visual dinâmica de fluxo de caixa sem qualquer dependência de conectividade externa."
    }
  },
  {
    id: "dashboard-curva-abc",
    title: "Dashboard Analítico de Curva ABC & Faturamento",
    category: "Data Analytics & BI / Gestão de Estoque",
    badge: "Big Data & SQL Analytics",
    description:
      "Plataforma analítica para classificação 80/20 de vendas, produtos com alto faturamento e identificação de estoque parado em grandes bases de ERP. Fornece aos gestores visão clara dos produtos que geram a maior rentabilidade da empresa.",
    tags: ["Next.js", "TypeScript", "SQL Server (T-SQL)", "Window Functions", "Chart.js", "Connection Pooling"],
    github: "https://github.com/Eduardolopessd/dashboard-de-analise-abc",
    technical: {
      problemasResolvidos:
        "Identifica com precisão cirúrgica os produtos Classe A (responsáveis pela maior fatia do faturamento), Classe B (impacto intermediário) e Classe C (baixo giro/volume), permitindo compras mais assertivas e identificação de capital retido em estoque ocioso.",
      arquitetura:
        "Aplicação Full Stack com Next.js (App Router). A camada de API (`/api/curva-abc`) se conecta diretamente a bancos SQL Server corporativos utilizando Connection Pooling via biblioteca `mssql` com limites e timeouts controlados.",
      armazenamento:
        "Consultas executadas em streaming analítico contra o banco do ERP corporativo, agregando milhares de linhas de movimentação com filtros de status faturado e validação de período estatístico mínimo de 90 dias.",
      autenticacao:
        "Isolamento de credenciais via variáveis de ambiente seguras (`.env`) e suporte a controle de acesso por perfil corporativo.",
      bancoDados:
        "Queries otimizadas em T-SQL fazendo uso de Window Functions (`SUM(VALOR) OVER()`, `ORDER BY PERCENTUAL DESC`) e particionamento lógico para calcular o faturamento acumulado sem sobrecarregar a memória do servidor de banco.",
      dificuldadesResolvidas:
        "Processamento analítico em tempo real sobre tabelas de milhões de itens de pedidos (`ped_item`) e saldo físico (`prod_estoque`), reduzindo o tempo de geração do relatório de minutos para menos de 2 segundos através de indexação e restrições inteligentes."
    }
  },
  {
    id: "sistema-correcao-produtos",
    title: "Sistema de Correção Cadastral & Acervo de Fotos",
    category: "Full Stack / Cloud Storage & Catalog Management",
    badge: "Spring Boot + Vue 3 + Cloud S3",
    description:
      "Solução corporativa para auditoria, correção cadastral em massa e gestão de fotos de produtos para e-commerce. Integração direta com Cloud Object Storage (Backblaze B2) e banco corporativo em alta concorrência.",
    tags: ["Java 17", "Spring Boot", "Vue.js 3", "Vite", "SQL Server", "Backblaze B2 (S3)", "JWT", "Docker"],
    github: "https://github.com/Eduardolopessd/cadastro-produto",
    technical: {
      problemasResolvidos:
        "Resolve inconsistências cadastrais de produtos (NCM, dimensões, descrições e títulos) que geram rejeições em canais de e-commerce, além de gerenciar o upload, compactação e sincronização automática de fotos de alta resolução com bucket na nuvem.",
      arquitetura:
        "Arquitetura Full Stack desacoplada: Backend REST em Spring Boot com Spring Security, configurado com dois DataSources independentes (Login corporativo e Banco de Produção/Views). Frontend SPA moderno em Vue 3 + Vite com Nginx em contêineres Docker.",
      armazenamento:
        "Armazenamento híbrido: metadados e status de revisão gravados em SQL Server, enquanto os arquivos de imagem são despachados de forma assíncrona para Cloud Object Storage Backblaze B2 compatível com protocolo AWS S3.",
      autenticacao:
        "Autenticação stateless via tokens JWT criptografados com filtro customizado (`JwtAuthFilter`), controlando permissões de operadores e supervisores.",
      bancoDados:
        "Consumo de views otimizadas (`VIEW_CORRECAO_CADASTRO_PRODUTO`) evitando locks na tabela transacional principal, com separação clara de responsabilidades entre schemas.",
      dificuldadesResolvidas:
        "Isolamento da verificação de fotos opcionais em segundo plano no frontend para não travar a experiência do operador, e sincronização confiável de arquivos grandes via batch sem instabilidade de rede."
    }
  },
  {
    id: "processador-etiquetas-tk",
    title: "Processador de Etiquetas Térmicas ZPL",
    category: "Automação Industrial & Logística",
    badge: "Java + Microsserviço Rust",
    description:
      "Pipeline de alta performance para extração de pedidos e conversão direta para arquivos de impressão térmica no padrão Zebra (ZPL), integrando Java e um microsserviço de conversão em Rust para máxima vazão de expedição.",
    tags: ["Java", "Spring Boot", "Rust", "Protocolo ZPL", "SQL Server", "Hardware Industrial"],
    github: "https://github.com/Eduardolopessd/ProcessadorEtiquetasTK",
    technical: {
      problemasResolvidos:
        "Elimina gargalos na expedição logística onde centenas de volumes precisavam de impressão imediata de etiquetas térmicas com código de barras e layout de transporte sem travar o sistema ERP corporativo.",
      arquitetura:
        "Pipeline híbrido de alto rendimento: Spring Boot consulta pedidos faturados ainda não impressos no SQL Server e encaminha os payloads para um microsserviço ultrarrápido escrito em Rust, que compila e gera as instruções matriciais ZPL em milissegundos.",
      armazenamento:
        "Geração de arquivos `.txt` contendo as diretivas puras de comando ZPL em diretório de spool local/rede (`./etiquetas_txt/`), prontos para comunicação direta via TCP/IP ou porta serial com as impressoras térmicas industriais.",
      autenticacao:
        "Serviço interno de automação operando sob credenciais de infraestrutura com isolamento de rede e regras restritas por vendedor/setor.",
      bancoDados:
        "Consultas parametrizadas no SQL Server com flags de controle para trazer apenas notas pendentes de expedição, atualizando o status pós-geração.",
      dificuldadesResolvidas:
        "Compatibilização de layouts complexos de etiqueta (código de barras Code 128, QR Code de rastreio e dados de destinatário) com consumo de memória quase nulo e tempo de resposta instantâneo viabilizado pelo microsserviço em Rust."
    }
  },
  {
    id: "api-produtos-estoque",
    title: "API REST de Produtos e Conciliação de Estoque",
    category: "Backend & Multi-Database Integration",
    badge: "Spring Boot Multi-Tenant",
    description:
      "API corporativa para conciliação contínua 24/7 entre bancos de dados heterogêneos de catálogo e faturamento, com busca otimizada por ISBN, autor, SKU e gerenciamento refinado de pools de conexão.",
    tags: ["Java", "Spring Boot", "Multi-DataSource", "HikariCP", "SQL Server", "JWT", "Docker"],
    github: "https://github.com/Eduardolopessd/API-Produtos",
    technical: {
      problemasResolvidos:
        "Sincronização e consulta em tempo real de produtos entre bancos de dados de origens diferentes sem conflito de locks ou instabilidade na operação de vendas.",
      arquitetura:
        "Spring Boot com configuração explícita de Múltiplos DataSources (`db-produto` e `db-login`), cada qual gerenciado por seu próprio pool HikariCP dimensionado para 10 conexões máximas e tolerâncias rigorosas a timeout.",
      armazenamento:
        "Bancos de dados SQL Server corporativos com dialect Hibernate otimizado e parâmetros de auditoria e logging transacional via `LoggingFilter`.",
      autenticacao:
        "Segurança com Spring Security e autenticação JWT para acesso seguro às rotas de inventário e catálogo.",
      bancoDados:
        "Modelagem com DTOs limpos e queries nativas preparadas para buscas instantâneas por ISBN e autores em catálogos com centenas de milhares de títulos.",
      dificuldadesResolvidas:
        "Eliminação de problemas de esgotamento de conexões (connection leaks) e travamento de threads em ambientes corporativos através de tuning fino no HikariCP."
    }
  },
  {
    id: "multi-tenant-ecommerce",
    title: "Plataforma E-commerce Multi-Tenant",
    category: "Full Stack / SaaS",
    badge: "SaaS Multi-Lojas",
    description:
      "Plataforma completa de e-commerce multi-tenant permitindo a criação e gestão de múltiplas lojas virtuais na mesma base, com catálogo independente, carrinho de compras reativo e painel administrativo.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com/Eduardolopessd/multi-tenant-e-commerce/tree/main",
    technical: {
      problemasResolvidos:
        "Permite que múltiplos lojistas gerenciem seus próprios produtos, preços e pedidos em lojas virtuais isoladas com subdomínios ou identificadores únicos compartilhando a mesma infraestrutura de backend.",
      arquitetura:
        "Arquitetura moderna em Next.js com App Router, server-side rendering para indexação em buscadores (SEO) e rotas de API para checkout e gestão de estoque.",
      armazenamento:
        "PostgreSQL com particionamento lógico por tenant (`tenant_id`), garantindo isolamento total dos dados de cada empresa.",
      autenticacao:
        "Gestão de usuários por papel (admin de plataforma, dono de loja e cliente final) com controle granular de permissões.",
      bancoDados:
        "Modelagem relacional completa com integridade referencial: tenants, produtos, categorias, clientes, pedidos e itens de pedido.",
      dificuldadesResolvidas:
        "Garantia de isolamento estrito entre diferentes lojistas sem vazamento de dados de pedidos ou clientes entre os tenants."
    }
  },
  {
    id: "gestao-inventario-patrimonio",
    title: "Sistema Corporativo de Gestão de Inventário e Ativos de TI",
    category: "Gestão Patrimonial & Infraestrutura",
    badge: "Controle Patrimonial",
    description:
      "Sistema corporativo para controle patrimonial de ativos de infraestrutura de TI, permitindo catalogação de equipamentos, movimentação entre setores, histórico de manutenção e rastreabilidade por número de patrimônio.",
    tags: ["Java", "SQL Server", "MySQL", "Docker", "HTML5 / CSS3 / JavaScript"],
    github: "https://github.com/Eduardolopessd/Inventario/tree/main",
    technical: {
      problemasResolvidos:
        "Elimina o descontrole e perda de ativos de TI corporativos (máquinas, servidores, switches, monitores e periféricos), oferecendo rastreabilidade completa de qual colaborador ou setor está com cada equipamento.",
      arquitetura:
        "Aplicação conteinerizada com Docker, backend estruturado para alta confiabilidade e interface web direta para auditorias físicas rápidas no chão de fábrica e escritórios.",
      armazenamento:
        "Persistência em banco de dados relacional com trilha histórica de movimentação de patrimônio por data, responsável e motivo.",
      autenticacao:
        "Acesso restrito à equipe de TI e auditoria com níveis diferenciados de visualização e edição de patrimônio.",
      bancoDados:
        "Tabelas estruturadas para ativos, setores da empresa, colaboradores e ordens de serviço de manutenção técnica preventiva/corretiva.",
      dificuldadesResolvidas:
        "Facilidade na realização de inventários físicos periódicos através de consultas rápidas por código patrimonial e geração de relatórios de auditoria."
    }
  }
]

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>("precificador-automatico")

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="projetos" className="py-24 px-6 bg-card/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Projetos & Engenharia de Software</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>
        <p className="text-muted-foreground text-sm max-w-2xl mb-12">
          Abaixo estão soluções desenvolvidas com foco em resolução real de problemas de negócio, arquitetura robusta, 
          performance e segurança. Clique nos detalhes técnicos de cada projeto para conferir as decisões de engenharia.
        </p>

        <div className="grid gap-12">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id
            const isCommercial = !!project.commercial

            return (
              <article
                key={project.id}
                className={`relative rounded-xl border transition-all duration-300 overflow-hidden ${
                  isCommercial
                    ? "border-primary/60 bg-[#0d182b] shadow-xl shadow-primary/5 ring-1 ring-primary/30"
                    : "border-border bg-card/70 hover:border-border/80 shadow-md"
                }`}
              >
                {/* Cabeçalho do Card */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                          isCommercial 
                            ? "bg-primary/20 text-primary border-primary/40 font-bold" 
                            : "bg-secondary text-secondary-foreground border-border"
                        }`}>
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Ações / Links no topo */}
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors p-1"
                          title="Ver Código no GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                      )}
                      {project.live && (
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors p-1"
                          title="Acessar Demonstração Online"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Pitch Comercial Destacado (caso seja o Precificador) */}
                  {project.commercial && (
                    <div className="mb-6 p-5 rounded-lg bg-primary/10 border border-primary/30 space-y-4">
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                        <ShoppingCart className="h-4 w-4" />
                        <span>{project.commercial.headline}</span>
                      </div>
                      <p className="text-foreground/90 text-xs leading-relaxed">
                        {project.commercial.pitch}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 pt-2">
                        <div>
                          <span className="text-xs font-mono font-semibold text-primary block mb-2">
                            ✓ Marketplaces Homologados:
                          </span>
                          <ul className="space-y-1 text-xs text-muted-foreground">
                            {project.commercial.marketplaces.map((m, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-primary mt-0.5">•</span>
                                <span>{m}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="text-xs font-mono font-semibold text-primary block mb-2">
                            ✓ Diferenciais que Garantem Margem:
                          </span>
                          <ul className="space-y-1 text-xs text-muted-foreground">
                            {project.commercial.pontosFortes.slice(0, 3).map((p, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-4 items-center">
                        <Link
                          href={project.commercial.ctaHref}
                          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md text-sm hover:opacity-95 transition-all shadow-lg hover:shadow-primary/30"
                        >
                          <ShoppingCart className="h-4 w-4" />
                          {project.commercial.ctaText}
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        <span className="text-xs text-muted-foreground font-mono">
                          Código-fonte completo, arquitetura testada e suporte à implantação.
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Tags do Projeto */}
                  <ul className="flex flex-wrap gap-2 mb-6 font-mono text-xs text-muted-foreground">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="bg-secondary/60 text-secondary-foreground px-2.5 py-1 rounded border border-border/40"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Botão de Expandir Detalhes Técnicos */}
                  {project.technical && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-primary hover:underline cursor-pointer"
                    >
                      <Layers className="h-4 w-4" />
                      {isExpanded ? "Ocultar execução técnica e arquitetura" : "Ver execução técnica e arquitetura detalhada"}
                      {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    </button>
                  )}
                </div>

                {/* Seção Técnica Expandida (Dossiê de Engenharia) */}
                {isExpanded && project.technical && (
                  <div className="border-t border-border/80 bg-background/95 p-6 md:p-8 space-y-6 animate-in fade-in-50 duration-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Quais problemas a aplicação resolve?
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {project.technical.problemasResolvidos}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5" />
                          Como funciona a arquitetura técnica?
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {project.technical.arquitetura}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                          <Database className="h-3.5 w-3.5" />
                          Armazenamento, persistência e sincronização
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {project.technical.armazenamento}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                          <Lock className="h-3.5 w-3.5" />
                          Autenticação, segurança e privacidade
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {project.technical.autenticacao}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                          <Database className="h-3.5 w-3.5" />
                          Como você estruturou o banco de dados?
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {project.technical.bancoDados}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                          <AlertTriangle className="h-3.5 w-3.5" />
                          Quais dificuldades técnicas você resolveu?
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {project.technical.dificuldadesResolvidas}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
