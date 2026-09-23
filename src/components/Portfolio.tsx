import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { DeveloperScene } from "./DeveloperScene";
import { Button } from "@/components/ui/button";

const skills = [
  "Java 21+", "Spring Boot", "Go", "Angular", "React", "PostgreSQL", "Docker", "Kubernetes", "Kafka", "RabbitMQ", "AWS", "GCP",
];

const projects = [
  {
    number: "01",
    title: "Sistema de Avaliação de Treinamentos",
    text: "Aplicação back-end para gestão e avaliação de treinamentos corporativos.",
    stack: "GO · POSTGRESQL · DOCKER",
  },
  {
    number: "02",
    title: "Contratação de Carga",
    text: "Microsserviços robustos para contratação logística, com arquitetura limpa e cobertura de testes.",
    stack: "JAVA 21 · SPRING BOOT 3 · JUNIT 5",
  },
  {
    number: "03",
    title: "Custo de Frota",
    text: "Solução back-end para gestão de custos operacionais e manutenção de frotas.",
    stack: "JAVA · POSTGRESQL · MOCKITO",
  },
];

export function Portfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#inicio" className="font-display text-lg font-bold tracking-normal">IURY<span className="text-primary">.</span></a>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#sobre">Sobre</a>
            <a className="transition-colors hover:text-foreground" href="#experiencia">Experiência</a>
            <a className="transition-colors hover:text-foreground" href="#projetos">Projetos</a>
          </nav>
          <Button asChild size="sm"><a href="mailto:iurys2lopes@gmail.com">Vamos conversar <ArrowUpRight /></a></Button>
        </div>
      </header>

      <section id="inicio" className="relative mx-auto grid min-h-[94svh] max-w-[1440px] items-center px-5 pb-8 pt-24 md:grid-cols-[1.05fr_.95fr] md:px-10">
        <div className="relative z-10 pt-8 md:pt-0">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase text-primary"><span className="h-px w-8 bg-primary" /> Full-Stack Developer · Itumbiara, GO</p>
          <h1 className="font-display text-[clamp(3.5rem,8vw,8.8rem)] font-extrabold leading-[.82] tracking-normal">
            <span className="text-gradient">IURY</span><br /><span className="text-outline">LOPES</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Transformo regras de negócio complexas em sistemas completos, estáveis e preparados para evoluir.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#projetos">Explorar projetos <ArrowDownRight /></a></Button>
            <Button asChild variant="outline" size="lg"><a href="https://github.com/lopeszera" target="_blank" rel="noreferrer"><Github /> GitHub</a></Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><span className="relative flex size-2"><span className="absolute size-full animate-ping rounded-full bg-primary opacity-70" /><span className="relative size-2 rounded-full bg-primary" /></span> Disponível para desafios</span>
            <span className="hidden items-center gap-2 sm:flex"><MapPin className="size-4" /> Brasil</span>
          </div>
        </div>
        <div className="relative h-[52vh] min-h-[420px] md:h-[78vh]">
          <div className="absolute inset-[12%_4%_8%] rounded-full bg-accent blur-3xl" />
          <DeveloperScene />
          <div className="absolute bottom-[14%] right-0 border border-border bg-card/90 px-4 py-3 backdrop-blur-md md:right-[4%]">
            <p className="text-[10px] font-bold uppercase text-muted-foreground">Experiência</p>
            <p className="font-display text-2xl font-bold">5+ anos</p>
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-card py-4">
        <div className="marquee flex w-max gap-8 text-xs font-bold uppercase text-muted-foreground">
          {[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`} className="flex items-center gap-8"><span className="text-primary">✦</span>{skill}</span>)}
        </div>
      </div>

      <section id="sobre" className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-[.42fr_1fr] md:px-10 md:py-36">
        <div><p className="section-label">01 — SOBRE</p></div>
        <div>
          <h2 className="font-display max-w-5xl text-3xl font-bold leading-tight tracking-normal md:text-6xl">Desenvolvedor de software com visão do todo — da regra de negócio ao deploy.</h2>
          <div className="mt-10 grid gap-8 text-muted-foreground md:grid-cols-2">
            <p className="leading-relaxed">Sou profissional de TI com mais de 5 anos de experiência e 3 anos de atuação direta no desenvolvimento, evolução e sustentação de sistemas corporativos.</p>
            <p className="leading-relaxed">Especialista no ecossistema Java e Spring, também construo experiências com Angular e React, integrações, microsserviços e pipelines modernos.</p>
          </div>
        </div>
      </section>

      <section id="experiencia" className="border-y border-border bg-card">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
          <p className="section-label">02 — EXPERIÊNCIA</p>
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
        <div className="flex items-end justify-between"><div><p className="section-label">03 — PROJETOS</p><h2 className="mt-4 font-display text-4xl font-bold md:text-7xl">Destaques</h2></div><ArrowDownRight className="hidden size-12 text-primary md:block" /></div>
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
          <a href="mailto:iurys2lopes@gmail.com" className="mt-6 flex items-center justify-between gap-4 border-b border-primary-foreground/40 pb-5 font-display text-[clamp(2rem,6vw,6rem)] font-bold leading-none">
            Vamos construir algo <ArrowUpRight className="size-10 shrink-0 md:size-20" />
          </a>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold">
            <a className="flex items-center gap-2" href="mailto:iurys2lopes@gmail.com"><Mail className="size-4" /> E-mail</a>
            <a className="flex items-center gap-2" href="https://github.com/lopeszera" target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub</a>
            <a className="flex items-center gap-2" href="https://www.linkedin.com/in/iury-lopes-b44027277" target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn</a>
            <a className="flex items-center gap-2" href="https://wa.me/5564992499965" target="_blank" rel="noreferrer"><MessageCircle className="size-4" /> WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}