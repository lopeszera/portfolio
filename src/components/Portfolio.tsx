import {
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  Braces,
  Coffee,
  Cloud,
  Code2,
  Container,
  Database,
  FileText,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  RefreshCw,
  ServerCog,
  Users,
  Workflow,
} from "lucide-react";

import { DeveloperScene } from "./DeveloperScene";
import { Button } from "@/components/ui/button";

const skills = [
  "Java", "Spring Boot", "Solid", "Design Patterns", "Angular", "JavaScript", "PostgreSQL", "Docker", "Kubernetes", "Kafka", "RabbitMQ", "AWS", "GCP",
];

const projects = [
  {
    number: "01",
          title: "Confirmação de Presença Digital",
          text: "Aplicação Web para confirmar presença de clientes convocados de treinamentos específicos através de um QRCode.",
          stack: "JAVA 21 · SPRING BOOT · POSTGRESQL · APIS RESTFUL · ANGULAR · MICROSSERVIÇOS · DOCKER · JUNIT",
  },
  {
    number: "02",
    title: "Contratação de Carga",
    text: "Microsserviços robustos para contratação logística, com arquitetura limpa e cobertura de testes.",
    stack: "JAVA 17 · SPRING BOOT · POSTGRESQL · APIS RESTFUL · SOLID · JUNIT ",
  },
  {
    number: "03",
    title: "Custo de Frota",
    text: "Solução back-end para gestão de custos operacionais e manutenção de frotas.",
    stack: "JAVA 21 · SPRING BOOT · POSTGRESQL · APIS RESTFUL · MICROSSERVIÇOS · DESIGN PATTERNS · JUNIT",
  },
  {
      number: "04",
      title: "Aprovações Diretoria",
      text: "Sistema desenvolvimento para diretores aprovarem solicitações de alterações de valores, parcelas, fornecedores de pedidos de compra.",
      stack: "JAVA 21 · SPRING BOOT · POSTGRESQL · APIS RESTFUL · JAVASCRIPT · MICROSSERVIÇOS · DOCKER · JUNIT",
    },
{
number: "05",
    title: "Sistema de Avaliação de Treinamentos",
    text: "Aplicação back-end para gestão e avaliação de treinamentos corporativos.",
    stack: "GO · POSTGRESQL · DOCKER · CI/CD",
    },
{
      number: "06",
      title: "Controle de Estoque Entrada x Saída",
      text: "Desenvolvido para controlar entradas de produtos alimentícios em estoque, e a saída do mesmo para uma carga específica.",
      stack: "JAVA 21 · SPRING BOOT · POSTGRESQL · APIS RESTFUL · CI/CD · MICROSSERVIÇOS · DOCKER · JUNIT",
    },
];

const services = [
  {
    icon: ServerCog,
    title: "Backend corporativo",
    text: "Desenvolvimento, manutenção e evolução de sistemas com Java 8, 11, 17 e 21+, atuando em aplicações legadas e novas soluções com Spring Boot, Spring Data, Spring Security e Hibernate/JPA.",
  },
  {
    icon: Network,
    title: "APIs & microsserviços",
    text: "Desenvolvimento e consumo de APIs RESTful e arquitetura de microsserviços, aplicando SOLID, Clean Code, Design Patterns e boas práticas de engenharia de software.",
  },
  {
    icon: Code2,
    title: "Frontend",
    text: "Interfaces com JavaScript, HTML, CSS e Angular 15+, integradas às APIs e serviços de back-end.",
  },
  {
    icon: FlaskConical,
    title: "Qualidade & testes",
    text: "Testes automatizados com JUnit e Mockito, contribuindo para qualidade, confiabilidade e segurança nas alterações.",
  },
  {
    icon: Database,
    title: "Banco de dados",
    text: "Integração com PostgreSQL e MySQL: consultas SQL, análise de desempenho e evolução de estruturas.",
  },
  {
    icon: Cloud,
    title: "DevOps & cloud",
    text: "Git, GitHub e GitFlow no versionamento; Docker, Kubernetes, Kafka e RabbitMQ; pipelines CI/CD com Jenkins e Azure DevOps e cloud com GCP.",
  },
  {
    icon: Users,
    title: "Produto & pessoas",
    text: "Atendimento a usuários, levantamento e análise de necessidades, investigação de problemas e definição de estratégias para evolução contínua.",
  },
  {
    icon: RefreshCw,
    title: "Metodologias ágeis",
    text: "Entrega incremental, manutenção evolutiva, correção de incidentes e melhoria contínua dos sistemas.",
  },
];

const technologies = [
  { name: "Java", detail: "Backend", icon: Coffee },
  { name: "Spring", detail: "APIs & serviços", icon: ServerCog },
  { name: "Angular", detail: "Frontend", icon: Code2 },
  { name: "PostgreSQL", detail: "Dados", icon: Database },
  { name: "Docker", detail: "Containers", icon: Container },
  { name: "Kubernetes", detail: "Orquestração", icon: Boxes },
  { name: "Kafka", detail: "Eventos", icon: Workflow },
  { name: "RabbitMQ", detail: "Mensageria", icon: Network },
  { name: "AWS & GCP", detail: "Cloud", icon: Cloud },
  { name: "JavaScript", detail: "Web", icon: Braces },
];

export function Portfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#inicio" className="font-display text-lg font-bold tracking-normal">IURY<span className="text-primary">.</span></a>
         <nav className="hidden items-center gap-8 text-xs font-semibold uppercase text-muted-foreground md:flex">
           <a className="transition-colors hover:text-foreground" href="#sobre">
             Sobre
           </a>

           <a className="transition-colors hover:text-foreground" href="#servicos">
             O que faço
           </a>

           <a className="transition-colors hover:text-foreground" href="#experiencia">
             Experiência
           </a>

           <a className="transition-colors hover:text-foreground" href="#projetos">
             Projetos
           </a>
         </nav>
          <Button asChild size="sm"><a href="mailto:iury.dev@outlook.com">Vamos conversar <ArrowUpRight /></a></Button>
        </div>
      </header>

    <section
      id="inicio"
      className="relative mx-auto grid min-h-[94svh] max-w-[1440px] items-center overflow-visible px-5 pb-8 pt-24 md:px-10 lg:grid-cols-[.95fr_1.55fr] lg:gap-0"
    >
      {/* =========================================================
          ESQUERDA — APRESENTAÇÃO
          ========================================================= */}
      <div className="relative z-20 pt-8 lg:pt-0">
        <p className="flex items-center gap-3 font-mono text-xs font-bold uppercase text-primary">
          <span className="h-px w-8 bg-primary" />
          Olá, eu sou
        </p>

        <h1 className="mt-8 font-display text-[clamp(5rem,9vw,9rem)] font-extrabold uppercase leading-[0.8] tracking-[-0.06em]">
          <span className="text-gradient">IURY</span>
          <br />
          <span className="text-outline">LOPES</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
          Transformo regras de negócio complexas em sistemas
          completos, estáveis e preparados para evoluir.
        </p>

      <div className="mt-8 flex flex-wrap gap-3 lg:flex-nowrap">
         <Button asChild size="lg">
           <a href="#projetos">
             Explorar projetos
             <ArrowDownRight className="size-4" />
           </a>
         </Button>

         <Button asChild variant="outline" size="lg">
           <a
             href="/curriculo-iury-silva.pdf"
             target="_blank"
             rel="noreferrer"
           >
             <FileText className="size-4" />
             Currículo
           </a>
         </Button>

         <Button asChild variant="outline" size="lg">
           <a
             href="https://www.linkedin.com/in/iury-lopes-b44027277"
             target="_blank"
             rel="noreferrer"
           >
             <Linkedin className="size-4" />
             LinkedIn
           </a>
         </Button>
       </div>

        <div className="mt-10 flex items-center gap-6 font-mono text-xs uppercase text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="availability-dot animate-pulse" />
            Disponível para desafios
          </span>

          <span className="flex items-center gap-2">
            <MapPin className="size-3" />
            Brasil
          </span>
        </div>
      </div>

     {/* =========================================================
         DIREITA — 3D + INFORMAÇÕES
         ========================================================= */}
     <div className="relative mt-10 min-h-0 overflow-visible lg:mt-0 lg:min-h-[720px]">

       {/* =======================================================
           PERSONAGEM 3D
           MOBILE: ocupa uma área própria
           DESKTOP: posicionamento lateral
           ======================================================= */}
       <div
         className="
           relative
           h-[500px]
           w-full
           overflow-visible

           sm:h-[580px]

           lg:absolute
           lg:inset-y-0
           lg:left-[-12%]
           lg:right-[22%]
           lg:h-auto
         "
       >

         {/* Glow */}
         <div
           className="
             absolute
             inset-[10%_5%_5%]
             rounded-full
             bg-accent
             blur-3xl
             opacity-70
           "
         />

         {/* 3D */}
         <div className="relative h-full w-full overflow-visible">
           <DeveloperScene />
         </div>

       </div>


       {/* =======================================================
           INFORMAÇÕES
           MOBILE: fluxo normal, abaixo do personagem
           DESKTOP: posicionamento absoluto à direita
           ======================================================= */}
       <div
         className="
           relative
           z-30
           mt-2
           w-full
           px-2

           lg:absolute
           lg:right-[-1%]
           lg:top-1/2
           lg:mt-0
           lg:w-[36%]
           lg:-translate-y-1/2
           lg:px-0
         "
       >

         {/* Label */}
         <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-primary sm:text-xs">
           Full-Stack&nbsp; · &nbsp;Produto&nbsp; · &nbsp;Web
         </p>


         {/* Título */}
         <h2
           className="
             mt-3
             font-display
             text-3xl
             font-extrabold
             uppercase
             leading-[0.9]
             tracking-[-0.04em]

             sm:text-4xl

             lg:text-5xl
           "
         >
           <span className="text-gradient">
             Software
           </span>

           <br />

           <span className="text-outline">
             Developer
           </span>
         </h2>


         {/* =====================================================
             ESTATÍSTICAS
             ===================================================== */}
         <div
           className="
             mt-8
             grid
             grid-cols-2
             border-t
             border-border
             pt-4
           "
         >

           {/* 3+ */}
           <div className="border-r border-border pr-4">
             <strong
               className="
                 block
                 font-display
                 text-4xl
                 font-extrabold
                 leading-none
                 text-primary
                 lg:text-5xl
               "
             >
               3+
             </strong>

             <span
               className="
                 mt-2
                 block
                 max-w-[105px]
                 font-mono
                 text-[9px]
                 font-bold
                 uppercase
                 leading-4
                 text-muted-foreground
                 lg:text-[10px]
               "
             >
               Anos em desenvolvimento
             </span>
           </div>


           {/* 5+ */}
           <div className="pl-4">
             <strong
               className="
                 block
                 font-display
                 text-4xl
                 font-extrabold
                 leading-none
                 text-primary
                 lg:text-5xl
               "
             >
               5+
             </strong>

             <span
               className="
                 mt-2
                 block
                 max-w-[105px]
                 font-mono
                 text-[9px]
                 font-bold
                 uppercase
                 leading-4
                 text-muted-foreground
                 lg:text-[10px]
               "
             >
               Anos em tecnologia
             </span>
           </div>

         </div>

       </div>

     </div>
    </section>

      <div className="border-y border-border bg-card py-4">
        <div className="marquee flex w-max gap-8 text-xs font-bold uppercase text-muted-foreground">
          {[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`} className="flex items-center gap-8"><span className="text-primary">✦</span>{skill}</span>)}
        </div>
      </div>


      <section id="sobre" className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-[.42fr_1fr] md:px-10 md:py-36">
        <div><p className="section-label">SOBRE MIM</p></div>
        <div>
          <h2 className="font-display max-w-5xl text-3xl font-bold leading-tight tracking-normal md:text-6xl">Analista Desenvolvedor de Software com visão do todo — da regra de negócio ao deploy.</h2>
          <div className="mt-10 grid gap-8 text-muted-foreground md:grid-cols-2">
            <p className="leading-relaxed">Sou profissional de TI com mais de 5 anos de experiência, sendo cerca de 3 anos atuando diretamente no desenvolvimento, evolução e sustentação de sistemas corporativos, com foco em soluções Full-Stack e na transformação de regras de negócio em aplicações estáveis e escaláveis. Atualmente curso Análise e Desenvolvimento de Sistema pela FIAP.</p>
            <p className="leading-relaxed">Atuo principalmente com Java e Spring no backend, além de Angular e JavaScript no frontend, desenvolvendo APIs RESTful, microsserviços e integrações. Também tenho experiência com sistemas legados, testes automatizados, Docker, mensageria e CI/CD, sempre buscando equilibrar evolução técnica, qualidade de código e estabilidade das soluções.</p>
          </div>
        </div>
          </section>

          <section id="servicos" className="border-y border-border bg-card">
            <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">

              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="section-label">O QUE EU FAÇO</p>

                  <h2 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight md:text-7xl">
                    Transformo problemas de negócio em soluções de software.
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-right">
                  Atuo do entendimento da necessidade à implementação,
                  integração, testes e evolução contínua das soluções.
                </p>
              </div>

              <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <article
                      key={service.title}
                      className="group min-h-72 bg-background p-7 transition-all duration-300 hover:bg-accent"
                    >
                      <div className="flex items-start justify-between">
                        <Icon className="size-7 text-primary transition-transform duration-300 group-hover:-translate-y-1" />

                        <span className="font-mono text-xs text-muted-foreground">
                          //
                        </span>
                      </div>

                      <div className="mt-16">
                        <h3 className="font-display text-xl font-bold">
                          {service.title}
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {service.text}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-20">
                <p className="section-label">TECNOLOGIAS</p>

                <div className="mt-8 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-5">
                  {technologies.map((technology) => {
                    const Icon = technology.icon;

                    return (
                      <div
                        key={technology.name}
                        className="group border-b border-r border-border p-5 transition-colors hover:bg-background"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="size-5 text-primary" />

                          <div>
                            <p className="font-display text-sm font-bold">
                              {technology.name}
                            </p>

                            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                              {technology.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </section>

      <section id="experiencia" className="border-y border-border">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
          <p className="section-label">EXPERIÊNCIA</p>
          <div className="mt-12 divide-y divide-border border-t border-border">
            {[
              ["2023 — PRESENTE", "Analista Desenvolvedor de Sistema", "Alcafoods Ltda", "Java · Spring · Angular · Microsserviços · CI/CD"],
              ["2023", "Analista de Suporte", "Alcafoods Ltda", "Windows · Linux · Active Directory · Infraestrutura"],
              ["2020 — 2023", "Assistente de T.I.", "Alcafoods Ltda", "Suporte · Redes · Equipamentos · CFTV"],
            ].map(([date, role, company, tech]) => (
              <article key={role} className="group grid gap-4 py-8 md:grid-cols-[.26fr_.54fr_.2fr] md:items-center">
                <span className="font-mono text-xs text-primary">{date}</span>
                <div><h3 className="font-display text-xl font-bold md:text-3xl">{role}</h3><p className="mt-1 text-sm text-muted-foreground">{company}</p></div>
                <p className="text-sm text-muted-foreground md:text-right">{tech}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <div className="flex items-end justify-between"><div><p className="section-label">PROJETOS</p><h2 className="mt-4 font-display text-4xl font-bold md:text-7xl">Destaques</h2></div><ArrowDownRight className="hidden size-12 text-primary md:block" /></div>
        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="group flex min-h-80 flex-col bg-background p-7 transition-colors hover:bg-accent">
              <span className="font-mono text-xs text-primary">{project.number}</span>
              <div className="mt-auto"><p className="mb-4 text-xs font-bold text-muted-foreground">{project.stack}</p><h3 className="font-display text-2xl font-bold leading-tight">{project.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.text}</p></div>
            </article>
          ))}
        </div>
      </section>



      <section className="bg-gradient-primary text-primary-foreground">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
          <p className="text-xs font-bold uppercase">Disponível para oportunidades</p>
          <a href="mailto:iury.dev@outlook.com" className="mt-6 flex items-center justify-between gap-4 border-b border-primary-foreground/40 pb-5 font-display text-[clamp(2rem,6vw,6rem)] font-bold leading-none">
            Vamos construir algo <ArrowUpRight className="size-10 shrink-0 md:size-20" />
          </a>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold">
            <a className="flex items-center gap-2" href="mailto:iury.dev@outlook.com"><Mail className="size-4" /> E-mail</a>
            <a className="flex items-center gap-2" href="https://github.com/lopeszera" target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub</a>
            <a className="flex items-center gap-2" href="https://www.linkedin.com/in/iury-lopes-b44027277" target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn</a>
            <a className="flex items-center gap-2" href="https://wa.me/5564992499965" target="_blank" rel="noreferrer"><MessageCircle className="size-4" /> WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}