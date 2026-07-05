"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import {
  Link2,
  User,
  Mail,
  ArrowRight,
  Code2,
  Server,
  Wrench,
  ExternalLink,
  Languages,
} from "lucide-react";

const portrait = "/pedro-portrait.jpg";

type Lang = "pt" | "en";

const COPY = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Stack",
      projects: "Projetos",
      contact: "Contato",
    },
    cta: "Vamos conversar",

    hero: {
      status: "Disponível para novos projetos",
      title: (
        <>
          Pedro Passos,
          <br />
          Desenvolvedor Front-end 
        </>
      ),
      description:
        "Crio sites, sistemas e interfaces com foco em performance, usabilidade e código bem estruturado. Da primeira tela à entrega final, meu trabalho é transformar ideias em produtos digitais claros, rápidos e escaláveis.",
      primary: "Ver projetos",
      secondary: "Vamos conversar",
      metricNumber: "20+",
      metricLabel: "projetos entregues",
    },

    about: {
      label: "Sobre",
      title:
        "Apaixonado por construir soluções escaláveis e evoluir continuamente.",
      role: "Desenvolvedor Front-end",
      educationTitle: "Formação",
      education:
        "Graduado em Análise e Desenvolvimento de Sistemas pela UNIFG, com pós-graduação em Desenvolvimento Full-Stack pela FIAP. Aprendizado contínuo faz parte da minha rotina de trabalho.",
      workTitle: "Como eu trabalho",
      work:
        "Antes de sair codando, gosto de entender o problema, o usuário e o objetivo do projeto. No desenvolvimento, priorizo código limpo, componentes reutilizáveis, boa experiência de uso e uma estrutura que permita o produto crescer sem virar bagunça.",
      tags: ["Código limpo", "Arquitetura", "Performance", "Usabilidade", "Produto"],
    },

    skills: {
      label: "Stack",
      title: "Tecnologias & Ferramentas.",
      description:
        "Trabalho principalmente com React, Next.js, TypeScript, Node.js e PostgreSQL. Meu foco é construir aplicações organizadas, performáticas e fáceis de evoluir.",
    },

    projects: {
      label: "Projetos",
      title: "Projetos que conectam design, código e experiência.",
      description:
        "Uma seleção de trabalhos e estudos que reúnem frontend, backend, organização de código e experiência do usuário.",
      details: "Ver detalhes",
    },

    contact: {
      label: "Contato",
      title: "Tem um projeto em mente?",
      description:
        "Me envie uma mensagem com o que você precisa construir, melhorar ou tirar do papel. Eu respondo com clareza sobre o próximo passo.",
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "voce@email.com",
      message: "Mensagem",
      messagePlaceholder: "Conte-me sobre seu projeto...",
      send: "Enviar",
      sent: "Mensagem enviada",
      response:
        "Resposta em até 24h. Aberto a oportunidades remotas, híbridas e projetos pontuais.",
    },

    footer: "Construído com React, Next.js e TypeScript.",
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Stack",
      projects: "Projects",
      contact: "Contact",
    },
    cta: "Let’s talk",

    hero: {
      status: "Available for selected projects",
      title: (
        <>
          Pedro Passos,
          <br />
          Front-End developer for web products.
        </>
      ),
      description:
        "I build websites, systems and interfaces focused on performance, usability and well-structured code. From the first screen to the final delivery, my work is about turning ideas into clear, fast and easy-to-evolve digital products.",
      primary: "View projects",
      secondary: "Let’s talk",
      metricNumber: "20+",
      metricLabel: "projects delivered",
    },

    about: {
      label: "About",
      title:
        "Passionate about building scalable solutions and continuously evolving.",
      role: "Full-Stack Developer",
      educationTitle: "Education",
      education:
        "Graduated in Systems Analysis and Development from UNIFG, with a postgraduate degree in Full-Stack Development from FIAP. Continuous learning is part of my work routine.",
      workTitle: "How I work",
      work:
        "Before writing code, I like to understand the problem, the user and the goal of the project. During development, I prioritize clean code, reusable components, good user experience and a structure that allows the product to grow without becoming messy.",
      tags: ["Clean code", "Architecture", "Performance", "Usability", "Product"],
    },

    skills: {
      label: "Stack",
      title: "Technologies I use to build web products from scratch.",
      description:
        "I mainly work with React, Next.js, TypeScript, Node.js and PostgreSQL. My focus is to build organized, performant and easy-to-evolve applications.",
    },

    projects: {
      label: "Projects",
      title: "Projects that connect design, code and experience.",
      description:
        "A selection of works and studies combining frontend, backend, code organization and user experience.",
      details: "View details",
    },

    contact: {
      label: "Contact",
      title: "Have a project in mind?",
      description:
        "Send me a message with what you need to build, improve or get off the ground. I will reply with a clear next step.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send",
      sent: "Message sent",
      response:
        "Reply within 24h. Open to remote, hybrid and project-based opportunities.",
    },

    footer: "Built with React, Next.js and TypeScript.",
  },
} as const;

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("pt");

  const toggleLang = () => {
    setLang((current) => (current === "pt" ? "en" : "pt"));
  };

  const content = COPY[lang];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundGlow />
      <Header lang={lang} onToggleLang={toggleLang} content={content} />

      <main>
        <Hero content={content} />
        <About content={content} />
        <Skills lang={lang} content={content} />
        <Projects lang={lang} content={content} />
        <Contact content={content} />
      </main>

      <Footer content={content} />
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(120,119,198,0.10),transparent_30%),radial-gradient(circle_at_16%_82%,rgba(216,143,103,0.07),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[88px_88px] opacity-20" />
    </div>
  );
}

function Header({
  lang,
  onToggleLang,
  content,
}: {
  lang: Lang;
  onToggleLang: () => void;
  content: typeof COPY.pt | typeof COPY.en;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "#inicio", label: content.nav.home },
    { href: "#sobre", label: content.nav.about },
    { href: "#habilidades", label: content.nav.skills },
    { href: "#projetos", label: content.nav.projects },
    { href: "#contato", label: content.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/75 backdrop-blur-xl"
          : "border-b border-border/30 bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-foreground font-display text-lg font-bold text-background">
            P
          </span>

          <span className="hidden font-display text-sm font-semibold tracking-wide text-muted-foreground sm:block">
            PedroPassos.dev
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label="Trocar idioma"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-accent/40"
          >
            <Languages className="h-4 w-4" />
            {lang === "pt" ? "PT" : "EN"}
          </button>

          <a
            href="#contato"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            {content.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label="Trocar idioma"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-card/60 px-3 py-2 text-xs font-semibold text-foreground"
          >
            <Languages className="h-3.5 w-3.5" />
            {lang === "pt" ? "PT" : "EN"}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="rounded-md border border-border bg-card/60 p-2"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-foreground transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-foreground transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-foreground transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-accent/40 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}

            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-foreground px-5 py-3 text-center text-sm font-semibold text-background"
            >
              {content.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${visible ? "animate-fade-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

function Hero({ content }: { content: typeof COPY.pt | typeof COPY.en }) {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#D98F67]" />
            {content.hero.status}
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.03] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            {content.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {content.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              {content.hero.primary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-[#D98F67]/70 hover:bg-accent/40"
            >
              {content.hero.secondary}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>TypeScript</span>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="relative">
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card/50 p-2 backdrop-blur">
              <Image
                src={portrait}
                alt="Pedro Passos"
                width={420}
                height={520}
                priority
                className="h-110 w-full rounded-[1.25rem] object-cover object-center sm:h-120"
              />
            </div>

            <div className="absolute -bottom-5 left-5 rounded-2xl border border-border bg-background/85 px-4 py-3 shadow-2xl backdrop-blur">
              <p className="font-display text-xl font-bold text-foreground">
                {content.hero.metricNumber}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {content.hero.metricLabel}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About({ content }: { content: typeof COPY.pt | typeof COPY.en }) {
  return (
    <section id="sobre" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>{content.about.label}</SectionLabel>

          <div className="mt-6 max-w-3xl">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {content.about.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card/40 p-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={portrait}
                  alt="Pedro Passos"
                  width={320}
                  height={400}
                  className="aspect-4/5 w-full rounded-2xl object-cover"
                />
              </div>

              <div className="px-1 pt-4 pb-2">
                <p className="font-display text-lg font-semibold">
                  Pedro Passos
                </p>
                <p className="text-sm text-muted-foreground">
                  {content.about.role}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <h3 className="font-display text-xl font-semibold">
                  {content.about.educationTitle}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {content.about.education}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <h3 className="font-display text-xl font-semibold">
                  {content.about.workTitle}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {content.about.work}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {content.about.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-accent/20 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

type Skill = { name: string; desc: string };

type SkillGroup = {
  title: string;
  icon: typeof Code2;
  intro: string;
  items: Skill[];
};

function getSkillGroups(lang: Lang): SkillGroup[] {
  if (lang === "en") {
    return [
      {
        title: "Frontend",
        icon: Code2,
        intro:
          "Responsive interfaces designed with organization and user experience in mind.",
        items: [
          { name: "HTML5", desc: "Semantic structure" },
          { name: "CSS3", desc: "Responsive layout" },
          { name: "Sass", desc: "Scalable styles" },
          { name: "JavaScript", desc: "Interactivity" },
          { name: "TypeScript", desc: "Typing" },
          { name: "React", desc: "Componentization" },
          { name: "Next.js", desc: "Modern applications" },
        ],
      },
      {
        title: "Backend",
        icon: Server,
        intro:
          "APIs, databases and structure for products that need to evolve.",
        items: [
          { name: "Node.js", desc: "APIs and services" },
          { name: "Express", desc: "Routes and endpoints" },
          { name: "PostgreSQL", desc: "Relational database" },
        ],
      },
      {
        title: "Tools",
        icon: Wrench,
        intro:
          "Tools that help keep the project organized from the beginning to deployment.",
        items: [
          { name: "Git", desc: "Version control" },
          { name: "GitHub", desc: "Collaboration" },
          { name: "Vite", desc: "Fast builds" },
        ],
      },
    ];
  }

  return [
    {
      title: "Frontend",
      icon: Code2,
      intro:
        "Interfaces responsivas, organizadas e pensadas para boa experiência de uso.",
      items: [
        { name: "HTML5", desc: "Estrutura semântica" },
        { name: "CSS3", desc: "Layout responsivo" },
        { name: "Sass", desc: "Estilos escaláveis" },
        { name: "JavaScript", desc: "Interatividade" },
        { name: "TypeScript", desc: "Tipagem" },
        { name: "React", desc: "Componentização" },
        { name: "Next.js", desc: "Aplicações modernas" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      intro:
        "APIs, banco de dados e estrutura para produtos que precisam evoluir.",
      items: [
        { name: "Node.js", desc: "APIs e serviços" },
        { name: "Express", desc: "Rotas e endpoints" },
        { name: "PostgreSQL", desc: "Banco relacional" },
      ],
    },
    {
      title: "Ferramentas",
      icon: Wrench,
      intro:
        "Ferramentas que ajudam a manter o projeto organizado do início ao deploy.",
      items: [
        { name: "Git", desc: "Versionamento" },
        { name: "GitHub", desc: "Colaboração" },
        { name: "Vite", desc: "Builds rápidos" },
      ],
    },
  ];
}

function Skills({
  lang,
  content,
}: {
  lang: Lang;
  content: typeof COPY.pt | typeof COPY.en;
}) {
  const skillGroups = getSkillGroups(lang);

  return (
    <section id="habilidades" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>{content.skills.label}</SectionLabel>

          <div className="mt-6 max-w-3xl">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {content.skills.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {content.skills.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delay={index * 100}>
                <div className="h-full rounded-3xl border border-border bg-card/35 p-6 transition-all hover:-translate-y-1 hover:border-foreground/25 sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-background/60 text-muted-foreground">
                      <Icon className="h-5 w-5" />
                    </span>

                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {group.title}
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {group.intro}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        title={item.desc}
                        className="rounded-2xl border border-border/60 bg-background/45 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/25"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type Project = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
};

function getProjects(lang: Lang): Project[] {
  if (lang === "en") {
  return [
    {
      title: "Vet-Dev veterinary clinic",
      desc: "Web application for a veterinary clinic, with a modern, responsive interface focused on clearly presenting services.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Strapi"],
      image: "/projects/vet-dev.png",
      liveUrl: "https://vet-dev-two.vercel.app/",
      codeUrl: "https://github.com/PedroPassos081/Vet-Dev",
    },
    {
      title: "Susana Lourenço clinic website",
      desc: "Institutional website developed for a clinic, focused on service presentation, clear navigation, responsive design and professional patient acquisition.",
      tags: ["React", "TypeScript", "Tailwind"],
      image: "/projects/susana.png",
      liveUrl: "https://susanalourenco.com/",
      codeUrl: "https://github.com/PedroPassos081/Clinica-Susana",
    },
    {
      title: "Luma-agenda",
      desc: "Web system in development for school management, with an administrative dashboard, Prisma database structure and internal modules for routine organization.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "/projects/luma-agenda.png",
      codeUrl: "https://github.com/PedroPassos081/Luma-Agenda",
    },
  ];
}

  return [
    {
      title: "Vet-Dev clínica veterinária",
      desc: "Aplicação web para clínica veterinária, com interface moderna, responsiva e foco em apresentação clara dos serviços.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Strapi"],
      image: "/projects/vet-dev.png",
      liveUrl: "https://vet-dev-two.vercel.app/",
      codeUrl: "https://github.com/PedroPassos081/Vet-Dev",
    },
     {
      title: "Susana Lourenco",
      desc: "Site institucional desenvolvido para uma clínica, com foco em apresentação dos serviços, navegação clara, design responsivo e experiência profissional para captação de pacientes.",
      tags: ["React", "TypeScript", "Tailwind"],
      image: "/projects/susana.png",
      liveUrl: "https://susanalourenco.com/",
      codeUrl: "https://github.com/PedroPassos081/Clinica-Susana",
    },
     {
      title: "Dashboard escolar",
      desc: "Sistema web em desenvolvimento para gestão escolar, com dashboard administrativo, estrutura de banco de dados com Prisma e módulos internos para organização da rotina escolar.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "/projects/luma-agenda.png",
      codeUrl: "https://github.com/PedroPassos081/Luma-Agenda",
    },
  ];
}

function Projects({
  lang,
  content,
}: {
  lang: Lang;
  content: typeof COPY.pt | typeof COPY.en;
}) {
  const projects = getProjects(lang);

  return (
    <section id="projetos" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>{content.projects.label}</SectionLabel>

          <div className="mt-6 max-w-3xl">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {content.projects.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {content.projects.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
         {projects.map((project, index) => (
  <Reveal key={project.title} delay={index * 80}>
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/35 p-4 transition-all hover:-translate-y-1 hover:border-foreground/30">
      <div className="flex items-start justify-between gap-4">
        <h3 className="max-w-md font-display text-lg font-semibold sm:text-xl">
          {project.title}
        </h3>

        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all group-hover:border-foreground/40 group-hover:text-foreground">
          <ExternalLink className="h-4 w-4" />
        </span>
      </div>

      <div className="relative mt-4 aspect-video overflow-hidden rounded-2xl border border-border bg-background/60">
        <Image
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        {project.desc}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-accent/20 px-3 py-1 text-xs text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex translate-y-3 flex-wrap gap-3 pt-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
          >
            Ver site
            <ExternalLink className="h-4 w-4" />
          </a>
        )}

        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40"
          >
            Ver código
            <Code2 className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  </Reveal>
))}
        </div>
      </div>
    </section>
  );
}

function Contact({ content }: { content: typeof COPY.pt | typeof COPY.en }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget; // salva antes do await
  setLoading(true);

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSent(true);
      form.reset();

      setTimeout(() => setSent(false), 4000);
      return;
    }

    const errorData = await response.json().catch(() => ({}));
    alert(errorData.error || "Ocorreu um erro ao enviar a mensagem. Tente novamente.");
  } catch (error) {
    console.error("Erro capturado no fetch do contato:", error);
    alert("Erro ao enviar a mensagem. Tente novamente.");
  } finally {
    setLoading(false);
  }
}

  return (
    <section id="contato" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>{content.contact.label}</SectionLabel>

          <div className="mt-6 max-w-3xl">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {content.contact.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {content.contact.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card/35 p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label={content.contact.name}
                  name="name"
                  placeholder={content.contact.namePlaceholder}
                />

                <Field
                  label={content.contact.email}
                  name="email"
                  type="email"
                  placeholder={content.contact.emailPlaceholder}
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {content.contact.message}
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder={content.contact.messagePlaceholder}
                  className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-semibold text-background transition-transform hover:scale-[1.01] sm:w-auto disabled:opacity-70 disabled:hover:scale-100"
              >
                {sent ? content.contact.sent : loading ? "Enviando..." : content.contact.send}
                {!sent && !loading && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-4">
              <ContactLink
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value="pedro.passos081@gmail.com"
                href="mailto:pedro.passos081@gmail.com"
              />

              <ContactLink
                icon={<User className="h-5 w-5" />}
                label="LinkedIn"
                value="/in/pedro-passos081"
                href="https://www.linkedin.com/in/pedro-passos081/"
              />

              <ContactLink
                icon={<Link2 className="h-5 w-5" />}
                label="GitHub"
                value="@pedroPassos081"
                href="https://github.com/PedroPassos081"
              />

              <div className="mt-auto rounded-3xl border border-border bg-card/35 p-6">
                <p className="text-sm leading-7 text-muted-foreground">
                  {content.contact.response}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>

      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40"
      />
    </div>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card/35 p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/30"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-background/60 text-muted-foreground">
        {icon}
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </p>

        <p className="truncate text-sm font-medium text-foreground">{value}</p>
      </div>

      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
    </a>
  );
}

function Footer({ content }: { content: typeof COPY.pt | typeof COPY.en }) {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground font-display text-sm font-bold text-background">
            P
          </span>

          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pedro Passos.
          </span>
        </div>

        <p className="text-xs text-muted-foreground">{content.footer}</p>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-[#D98F67]" />
      {children}
    </div>
  );
}