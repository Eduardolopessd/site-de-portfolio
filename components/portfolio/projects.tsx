"use client"

import { useState } from "react"
import { 
  ExternalLink, 
  Github, 
  ChevronDown, 
  ChevronUp, 
  ShoppingCart, 
  Lock, 
  Database, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowUpRight,
  TrendingUp,
  FileSpreadsheet,
  Tag,
  History,
  QrCode,
  HardDrive,
  Package,
  Laptop,
  Check,
  Search,
  Wifi,
  Cloud
} from "lucide-react"
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
  renderPreview: () => React.ReactNode
}

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>("precificador-automatico")

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const projects: Project[] = [
    {
      id: "precificador-automatico",
      title: "Precificador Automático Enterprise",
      category: "Software Comercial / E-commerce Automation",
      badge: "Disponível para Compra / Licença",
      description:
        "Motor completo de reprecificação dinâmica e proteção de margem de lucro para operações de e-commerce e sellers multi-marketplace. Elimina prejuízos operacionais, calcula automaticamente comissões complexas e taxas fixas e executa atualizações em massa conectando diretamente ao ERP.",
      tags: ["Java", "JavaFX / FXML", "SQL Server", "Multi-Marketplace", "Segurança / Stop-Loss", "Auditoria"],
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
      },
      renderPreview: () => (
        <div className="w-full bg-[#1e2430] border border-border/80 rounded-lg overflow-hidden shadow-2xl font-sans text-xs">
          {/* JavaFX Window Title Bar */}
          <div className="bg-[#141821] px-3 py-2 flex items-center justify-between border-b border-border/60">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-[11px] font-semibold text-gray-300 ml-2">
                Painel de Precificação Automática v3.4 - [main.fxml]
              </span>
            </div>
            <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-mono">
              SQL Server: CONECTADO
            </span>
          </div>

          {/* FXML Action Bar with exact original colors */}
          <div className="p-3 bg-[#181f2c] border-b border-border/60 space-y-2.5">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="px-2.5 py-1 rounded bg-[#27ae60] text-white font-medium flex items-center gap-1 text-[11px] shadow-sm">
                <FileSpreadsheet className="h-3 w-3" /> Importar Planilha Excel
              </span>
              <span className="px-2.5 py-1 rounded bg-[#27ae60] text-white font-medium flex items-center gap-1 text-[11px] shadow-sm">
                <TrendingUp className="h-3 w-3" /> Exportar Simulação
              </span>
              <span className="px-2.5 py-1 rounded bg-[#8e44ad] text-white font-medium flex items-center gap-1 text-[11px] shadow-sm">
                <Lock className="h-3 w-3" /> Travar Preço
              </span>
              <span className="px-2.5 py-1 rounded bg-[#d35400] text-white font-medium flex items-center gap-1 text-[11px] shadow-sm">
                <Tag className="h-3 w-3" /> Programar Oferta
              </span>
              <span className="px-2.5 py-1 rounded bg-[#2980b9] text-white font-medium flex items-center gap-1 text-[11px] shadow-sm">
                ⚙️ Gerenciar Travas
              </span>
              <span className="px-2.5 py-1 rounded bg-[#34495e] text-white font-medium flex items-center gap-1 text-[11px] shadow-sm">
                <History className="h-3 w-3" /> Ver Logs
              </span>
            </div>

            {/* FXML Filter Bar Mockup */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 pt-1 text-[10px] text-gray-400">
              <div className="bg-[#121620] px-2 py-1 rounded border border-border/40">
                <span className="text-gray-500 block text-[9px]">Vendedor *</span>
                <span className="text-gray-200 font-semibold">Mercado Livre ▼</span>
              </div>
              <div className="bg-[#121620] px-2 py-1 rounded border border-border/40">
                <span className="text-gray-500 block text-[9px]">SKU</span>
                <span className="text-gray-300">1042</span>
              </div>
              <div className="bg-[#121620] px-2 py-1 rounded border border-border/40">
                <span className="text-gray-500 block text-[9px]">ISBN</span>
                <span className="text-gray-300">978857608...</span>
              </div>
              <div className="bg-[#121620] px-2 py-1 rounded border border-border/40">
                <span className="text-gray-500 block text-[9px]">Título do Produto</span>
                <span className="text-gray-300 truncate block">Clean Code / Dev</span>
              </div>
              <div className="bg-[#121620] px-2 py-1 rounded border border-border/40">
                <span className="text-gray-500 block text-[9px]">Estoque Min / Max</span>
                <span className="text-gray-300">10 / 500</span>
              </div>
              <div className="bg-primary/20 text-primary px-2 py-1 rounded border border-primary/40 flex items-center justify-center font-bold">
                🔍 Filtrar
              </div>
            </div>
          </div>

          {/* TableView matching FXML columns */}
          <div className="overflow-x-auto bg-[#10141d]">
            <table className="w-full text-left border-collapse text-[11px]">
              <thead>
                <tr className="bg-[#161b26] text-gray-400 border-b border-border/60 font-mono text-[10px]">
                  <th className="py-2 px-2.5">Trava</th>
                  <th className="py-2 px-2.5">SKU</th>
                  <th className="py-2 px-2.5">Título</th>
                  <th className="py-2 px-2.5">Est.</th>
                  <th className="py-2 px-2.5">R$ Custo</th>
                  <th className="py-2 px-2.5">Comissão %</th>
                  <th className="py-2 px-2.5">R$ MktPlace</th>
                  <th className="py-2 px-2.5">Margem Atual</th>
                  <th className="py-2 px-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30 text-gray-300 font-mono">
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="py-2 px-2.5 text-purple-400 font-bold">🔒 ATIVA</td>
                  <td className="py-2 px-2.5 text-primary font-bold">1042</td>
                  <td className="py-2 px-2.5 text-gray-200 font-sans truncate max-w-[130px]">Clean Architecture</td>
                  <td className="py-2 px-2.5">48</td>
                  <td className="py-2 px-2.5">R$ 42,00</td>
                  <td className="py-2 px-2.5">16.5%</td>
                  <td className="py-2 px-2.5 font-bold text-white">R$ 98,90</td>
                  <td className="py-2 px-2.5 text-emerald-400 font-bold">32.4%</td>
                  <td className="py-2 px-2.5"><span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Otimizado</span></td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="py-2 px-2.5 text-orange-400 font-bold">🏷️ OFERTA</td>
                  <td className="py-2 px-2.5 text-primary font-bold">2180</td>
                  <td className="py-2 px-2.5 text-gray-200 font-sans truncate max-w-[130px]">Domain-Driven Design</td>
                  <td className="py-2 px-2.5">25</td>
                  <td className="py-2 px-2.5">R$ 58,00</td>
                  <td className="py-2 px-2.5">14.0%</td>
                  <td className="py-2 px-2.5 font-bold text-white">R$ 124,50</td>
                  <td className="py-2 px-2.5 text-emerald-400 font-bold">28.1%</td>
                  <td className="py-2 px-2.5"><span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">Promoção</span></td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="py-2 px-2.5 text-gray-500">-</td>
                  <td className="py-2 px-2.5 text-primary font-bold">3012</td>
                  <td className="py-2 px-2.5 text-gray-200 font-sans truncate max-w-[130px]">SQL Server Tuning</td>
                  <td className="py-2 px-2.5">112</td>
                  <td className="py-2 px-2.5">R$ 35,00</td>
                  <td className="py-2 px-2.5">18.0%</td>
                  <td className="py-2 px-2.5 font-bold text-white">R$ 84,90</td>
                  <td className="py-2 px-2.5 text-emerald-400 font-bold">31.0%</td>
                  <td className="py-2 px-2.5"><span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px]">Sincronizado</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
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
      },
      renderPreview: () => (
        <div className="w-full bg-[#0d131f] border border-border/80 rounded-lg overflow-hidden shadow-2xl text-xs">
          {/* Header PWA */}
          <div className="bg-[#131b2c] p-3 border-b border-border/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-foreground text-sm">Finanças Seven PWA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <Wifi className="h-3 w-3" /> IndexedDB • Offline-First
              </span>
            </div>
          </div>

          {/* Cards de Saldo e Fluxo */}
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="bg-card/70 border border-border/60 p-2.5 rounded-lg">
                <span className="text-gray-400 text-[10px] block">Saldo Atual</span>
                <span className="text-base font-bold text-white font-mono">R$ 14.850,00</span>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-2.5 rounded-lg">
                <span className="text-emerald-400 text-[10px] block">Receitas</span>
                <span className="text-base font-bold text-emerald-400 font-mono">+R$ 8.200,00</span>
              </div>
              <div className="bg-rose-500/10 border border-rose-500/30 p-2.5 rounded-lg">
                <span className="text-rose-400 text-[10px] block">Despesas</span>
                <span className="text-base font-bold text-rose-400 font-mono">-R$ 3.420,00</span>
              </div>
            </div>

            {/* Categorias e Teto Orçamentário */}
            <div className="space-y-2 bg-[#121927] p-3 rounded-lg border border-border/50">
              <div className="flex justify-between text-[11px] font-medium text-gray-300">
                <span>Orçamento Mensal por Categoria</span>
                <span className="font-mono text-primary text-[10px]">Dexie liveQuery</span>
              </div>
              <div className="space-y-1.5 text-[10px]">
                <div>
                  <div className="flex justify-between text-gray-400 mb-0.5">
                    <span>🛒 Alimentação & Mercado</span>
                    <span>R$ 1.250 / R$ 1.800 (69%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-[69%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-gray-400 mb-0.5">
                    <span>🏠 Moradia & Contas</span>
                    <span>R$ 1.800 / R$ 2.000 (90%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[90%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
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
      },
      renderPreview: () => (
        <div className="w-full bg-[#111726] border border-border/80 rounded-lg overflow-hidden shadow-2xl text-xs font-sans">
          {/* Top Bar */}
          <div className="bg-[#172033] p-3 border-b border-border/60 flex items-center justify-between">
            <span className="font-bold text-gray-200 text-xs">Curva ABC • Faturamento & Giro (SQL Server)</span>
            <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
              Janela: 90 Dias
            </span>
          </div>

          <div className="p-4 space-y-3">
            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-2 rounded">
                <span className="text-[10px] text-emerald-400 block font-bold">Classe A (80% Fat.)</span>
                <span className="text-sm font-bold text-white font-mono">18.4% SKUs</span>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 p-2 rounded">
                <span className="text-[10px] text-blue-400 block font-bold">Classe B (15% Fat.)</span>
                <span className="text-sm font-bold text-white font-mono">31.6% SKUs</span>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 p-2 rounded">
                <span className="text-[10px] text-amber-400 block font-bold">Classe C (Estoque Parado)</span>
                <span className="text-sm font-bold text-white font-mono">50.0% SKUs</span>
              </div>
            </div>

            {/* Simulação Gráfica Curva ABC */}
            <div className="bg-[#0b101b] p-3 rounded border border-border/40 space-y-2">
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>Concentração Acumulada de Faturamento (Pareto)</span>
                <span className="font-mono text-emerald-400">SUM() OVER(PARTITION)</span>
              </div>
              <div className="h-16 flex items-end gap-1.5 pt-2">
                <div className="flex-1 bg-emerald-500/80 rounded-t h-[95%]" title="SKU Top 1" />
                <div className="flex-1 bg-emerald-500/80 rounded-t h-[88%]" title="SKU Top 2" />
                <div className="flex-1 bg-emerald-500/70 rounded-t h-[75%]" title="SKU Top 3" />
                <div className="flex-1 bg-blue-500/80 rounded-t h-[52%]" title="SKU Top 4" />
                <div className="flex-1 bg-blue-500/70 rounded-t h-[40%]" title="SKU Top 5" />
                <div className="flex-1 bg-blue-500/60 rounded-t h-[30%]" title="SKU Top 6" />
                <div className="flex-1 bg-amber-500/60 rounded-t h-[18%]" title="SKU Baixo Giro" />
                <div className="flex-1 bg-amber-500/50 rounded-t h-[12%]" title="SKU Baixo Giro" />
                <div className="flex-1 bg-amber-500/40 rounded-t h-[6%]" title="SKU Baixo Giro" />
              </div>
            </div>
          </div>
        </div>
      )
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
      },
      renderPreview: () => (
        <div className="w-full bg-[#151c28] border border-border/80 rounded-lg overflow-hidden shadow-2xl text-xs font-sans">
          {/* Vue 3 App Header */}
          <div className="bg-[#1c2434] p-3 border-b border-border/60 flex items-center justify-between">
            <span className="font-bold text-gray-200">Painel de Auditoria & Fotos • Vue 3 + Spring Boot</span>
            <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30 flex items-center gap-1">
              <Cloud className="h-3 w-3" /> Backblaze B2 S3
            </span>
          </div>

          <div className="p-3 grid grid-cols-2 gap-3">
            {/* Form de Edição */}
            <div className="space-y-2 bg-[#0e141f] p-2.5 rounded border border-border/40 text-[10px]">
              <span className="text-primary font-bold block">SKU #4819 - Correção Cadastral</span>
              <div>
                <span className="text-gray-400 block text-[9px]">Título no E-commerce</span>
                <span className="text-gray-200 font-medium block truncate">Kit Livros Gestão & Estratégia</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <div>
                  <span className="text-gray-400 block text-[9px]">NCM</span>
                  <span className="text-gray-200 font-mono">4901.99.00</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[9px]">Peso Líquido</span>
                  <span className="text-gray-200 font-mono">820g</span>
                </div>
              </div>
              <div className="pt-1 flex gap-1.5">
                <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded font-bold text-[9px]">Salvar & Próximo</span>
                <span className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded text-[9px]">Pular</span>
              </div>
            </div>

            {/* Cloud Storage Image Preview */}
            <div className="bg-[#0e141f] p-2.5 rounded border border-border/40 flex flex-col justify-between text-[10px]">
              <div className="flex justify-between items-center text-gray-400 text-[9px]">
                <span>Acervo de Fotos S3</span>
                <span className="text-emerald-400 font-mono">3 Sincronizadas</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 py-1">
                <div className="aspect-square bg-gray-900 border border-border/60 rounded flex flex-col items-center justify-center p-1 text-center">
                  <span className="text-base">📸</span>
                  <span className="text-[8px] text-emerald-400 mt-1">Capa_Full.webp</span>
                </div>
                <div className="aspect-square bg-gray-900 border border-border/60 rounded flex flex-col items-center justify-center p-1 text-center">
                  <span className="text-base">📖</span>
                  <span className="text-[8px] text-emerald-400 mt-1">Verso.webp</span>
                </div>
              </div>
              <span className="text-[8px] text-gray-500 font-mono">Status: Sincronização Batch OK</span>
            </div>
          </div>
        </div>
      )
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
      },
      renderPreview: () => (
        <div className="w-full bg-[#121722] border border-border/80 rounded-lg overflow-hidden shadow-2xl text-xs font-sans">
          {/* Terminal / Queue Header */}
          <div className="bg-[#181f2d] p-3 border-b border-border/60 flex items-center justify-between">
            <span className="font-bold text-gray-200">Spooler de Expedição • Java + Rust Microservice</span>
            <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
              1.2ms / etiqueta
            </span>
          </div>

          <div className="p-3 grid sm:grid-cols-2 gap-3 items-center">
            {/* Status do Worker */}
            <div className="space-y-2 text-[10px] font-mono text-gray-400">
              <div className="flex justify-between border-b border-border/30 pb-1">
                <span>Fila de Pedidos Faturados:</span>
                <span className="text-white font-bold">1.482 processados</span>
              </div>
              <div className="flex justify-between border-b border-border/30 pb-1">
                <span>Microservice Rust:</span>
                <span className="text-emerald-400 font-bold">ONLINE (Port 8089)</span>
              </div>
              <div className="flex justify-between border-b border-border/30 pb-1">
                <span>Destino ZPL:</span>
                <span className="text-primary truncate">./etiquetas_txt/</span>
              </div>
            </div>

            {/* Mockup da Etiqueta Térmica ZPL */}
            <div className="bg-white text-black p-2.5 rounded shadow border border-gray-300 font-mono text-[9px] space-y-1">
              <div className="flex justify-between items-center border-b border-black pb-1">
                <span className="font-extrabold text-[10px]">SEDEX EXPEDIÇÃO</span>
                <span className="text-[8px] font-bold">NF #98421</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <div>
                  <span className="block text-[8px] text-gray-600">RASTREIO:</span>
                  <span className="font-bold text-[10px]">BR849201923X</span>
                </div>
                <QrCode className="h-6 w-6 text-black" />
              </div>
              {/* Representação visual do código de barras Code 128 */}
              <div className="h-5 flex items-center justify-center gap-0.5 bg-gray-100 p-1">
                {[2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2].map((w, i) => (
                  <span key={i} className="h-full bg-black inline-block" style={{ width: `${w}px` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )
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
      },
      renderPreview: () => (
        <div className="w-full bg-[#10141f] border border-border/80 rounded-lg overflow-hidden shadow-2xl text-xs font-mono">
          <div className="bg-[#171d2b] p-3 border-b border-border/60 flex items-center justify-between">
            <span className="font-bold text-gray-200">Spring Boot REST API • Dual DataSource</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
              HikariCP: ACTIVE
            </span>
          </div>

          <div className="p-3 space-y-2 text-[10px] text-gray-400">
            <div className="bg-[#0b0e16] p-2 rounded border border-border/30">
              <span className="text-emerald-400 font-bold block">GET /api/produtos/buscar?isbn=9788576082675</span>
              <p className="text-gray-300 font-sans mt-1 text-[11px]">
                {`{ "sku": 1042, "titulo": "Clean Code", "estoque": 48, "db_origem": "ERIS_PROD", "status": 200 }`}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[9px]">
              <div className="bg-[#151a26] p-2 rounded">
                <span className="text-primary font-bold block">Pool-1 (db-produto)</span>
                <span>Max: 10 | Active: 2 | Idle: 5</span>
              </div>
              <div className="bg-[#151a26] p-2 rounded">
                <span className="text-primary font-bold block">Pool-2 (db-login)</span>
                <span>Max: 10 | Active: 1 | Idle: 5</span>
              </div>
            </div>
          </div>
        </div>
      )
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
      },
      renderPreview: () => (
        <div className="w-full bg-[#121824] border border-border/80 rounded-lg overflow-hidden shadow-2xl text-xs font-sans">
          <div className="bg-[#192233] p-3 border-b border-border/60 flex items-center justify-between">
            <span className="font-bold text-gray-200">SaaS Multi-Tenant E-Commerce</span>
            <span className="text-[10px] font-mono bg-primary/20 text-primary px-2 py-0.5 rounded border border-primary/30">
              Tenant: Store-Alpha
            </span>
          </div>

          <div className="p-3 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#0c1018] p-2 rounded border border-border/40 space-y-1.5">
                <div className="aspect-video bg-gray-900 rounded flex items-center justify-center text-lg">
                  📦
                </div>
                <div className="text-[10px]">
                  <span className="font-bold text-gray-200 block truncate">Produto Demo #{item}</span>
                  <span className="text-primary font-mono font-bold">R$ 149,90</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
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
      },
      renderPreview: () => (
        <div className="w-full bg-[#111722] border border-border/80 rounded-lg overflow-hidden shadow-2xl text-xs font-sans">
          <div className="bg-[#171f2e] p-3 border-b border-border/60 flex items-center justify-between">
            <span className="font-bold text-gray-200">Gestão Patrimonial & Ativos de TI</span>
            <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
              Patrimônios: 450 Ativos
            </span>
          </div>

          <div className="p-3 space-y-2 text-[10px]">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#0b0f17] p-2 rounded border border-border/40">
                <span className="text-gray-400 block text-[9px]">Em Operação</span>
                <span className="text-white font-bold font-mono">422</span>
              </div>
              <div className="bg-[#0b0f17] p-2 rounded border border-border/40">
                <span className="text-gray-400 block text-[9px]">Em Manutenção</span>
                <span className="text-amber-400 font-bold font-mono">18</span>
              </div>
              <div className="bg-[#0b0f17] p-2 rounded border border-border/40">
                <span className="text-gray-400 block text-[9px]">Reserva Técnica</span>
                <span className="text-emerald-400 font-bold font-mono">10</span>
              </div>
            </div>

            <div className="bg-[#0b0f17] p-2 rounded border border-border/40 space-y-1">
              <div className="flex justify-between text-gray-400 text-[9px]">
                <span>PAT-0842 • Notebook Dell Core i7</span>
                <span className="text-emerald-400">Setor: Expedição</span>
              </div>
              <div className="flex justify-between text-gray-400 text-[9px]">
                <span>PAT-0911 • Switch Cisco Gigabit 24p</span>
                <span className="text-blue-400">Setor: CPD / Servidores</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

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
          interfaces operacionais de alta fidelidade e segurança. Clique nos detalhes técnicos de cada projeto para conferir as decisões de engenharia.
        </p>

        <div className="grid gap-14">
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
                {/* Grid contendo o Preview Visual (como no FXML/UI) e as Informações do Projeto */}
                <div className="p-6 md:p-8 grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Coluna Visual: Preview fiel da tela (FXML / Web / Mobile) */}
                  <div className="lg:col-span-5 w-full">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/20 rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition duration-300" />
                      <div className="relative">
                        {project.renderPreview()}
                      </div>
                    </div>
                  </div>

                  {/* Coluna de Conteúdo e Metadados */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
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

                        {/* Ações / Links */}
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

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Pitch Comercial Destacado (caso seja o Precificador) */}
                      {project.commercial && (
                        <div className="mb-5 p-4 rounded-lg bg-primary/10 border border-primary/30 space-y-3">
                          <div className="flex items-center gap-2 text-primary font-semibold text-xs">
                            <ShoppingCart className="h-4 w-4" />
                            <span>{project.commercial.headline}</span>
                          </div>
                          <p className="text-foreground/90 text-[11px] leading-relaxed">
                            {project.commercial.pitch}
                          </p>

                          <div className="grid sm:grid-cols-2 gap-3 pt-1">
                            <div>
                              <span className="text-[11px] font-mono font-semibold text-primary block mb-1">
                                ✓ Marketplaces Homologados:
                              </span>
                              <ul className="space-y-1 text-[11px] text-muted-foreground">
                                {project.commercial.marketplaces.map((m, i) => (
                                  <li key={i} className="flex items-start gap-1">
                                    <span className="text-primary mt-0.5">•</span>
                                    <span>{m}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <span className="text-[11px] font-mono font-semibold text-primary block mb-1">
                                ✓ Proteção de Margem:
                              </span>
                              <ul className="space-y-1 text-[11px] text-muted-foreground">
                                {project.commercial.pontosFortes.slice(0, 3).map((p, i) => (
                                  <li key={i} className="flex items-start gap-1">
                                    <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                                    <span>{p}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="pt-2 flex flex-wrap gap-3 items-center">
                            <Link
                              href={project.commercial.ctaHref}
                              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-md text-xs hover:opacity-95 transition-all shadow-lg hover:shadow-primary/30"
                            >
                              <ShoppingCart className="h-3.5 w-3.5" />
                              {project.commercial.ctaText}
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                            <span className="text-[10px] text-muted-foreground font-mono">
                              Código completo, arquitetura testada e suporte à implantação.
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Tags do Projeto */}
                      <ul className="flex flex-wrap gap-2 mb-4 font-mono text-xs text-muted-foreground">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="bg-secondary/60 text-secondary-foreground px-2 py-0.5 rounded border border-border/40 text-[11px]"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botão de Expandir Detalhes Técnicos */}
                    {project.technical && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(project.id)}
                        className="inline-flex items-center gap-2 text-xs font-mono text-primary hover:underline cursor-pointer pt-2"
                      >
                        <Layers className="h-4 w-4" />
                        {isExpanded ? "Ocultar execução técnica e arquitetura" : "Ver execução técnica e arquitetura detalhada"}
                        {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                      </button>
                    )}
                  </div>
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
