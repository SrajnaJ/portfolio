import { useState } from "react";

function IconButton({ children, label, href }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(15,23,42,0.12)]"
    >
      {children}
    </a>
  );
}

function LeetCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
      <path
        d="M14.8 4.3l4.8 4.7c.8.8.8 2.1 0 2.9l-4.8 4.8"
        stroke="#FFA116"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7 3.2L5.3 8.6a4.8 4.8 0 000 6.8l5.4 5.4"
        stroke="#111111"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.8 12h8"
        stroke="#B9B9B9"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="#111111">
      <path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.2 1.83 1.2 1.08 1.8 2.82 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.66-.3-5.47-1.3-5.47-5.78 0-1.28.47-2.33 1.22-3.16-.12-.3-.53-1.52.12-3.16 0 0 1-.31 3.3 1.2A11.7 11.7 0 0112 6.6c1.03 0 2.07.14 3.03.4 2.3-1.5 3.3-1.2 3.3-1.2.65 1.64.24 2.86.12 3.16.76.83 1.22 1.88 1.22 3.16 0 4.49-2.81 5.47-5.49 5.77.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.83.58A12 12 0 0012 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5">
      <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" fill="#0A66C2" />
      <path
        d="M8.1 10.1H5.9V18h2.2v-7.9zm.15-2.45c0-.76-.57-1.36-1.43-1.36-.84 0-1.42.6-1.42 1.36 0 .75.57 1.36 1.4 1.36h.02c.86 0 1.43-.61 1.43-1.36zM18.1 13.3c0-2.42-1.29-3.55-3-3.55-1.38 0-2 .76-2.34 1.29v-1.1h-2.2c.03.73 0 7.9 0 7.9h2.2v-4.4c0-.24.02-.47.09-.64.19-.47.62-.95 1.34-.95.95 0 1.33.71 1.33 1.75V18h2.2v-4.7z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const experienceItems = [
  {
    company: "Consultadd",
    role: "SOFTWARE ENGINEER I",
    period: "March 2025 - March 2026",
    points: [
      "Contributed to backend services for a data platform using Java and Spring Boot, enabling scalable data ingestion, processing, and internal APIs for research workflows.",
      "Built an AI-powered voice assistant using FastAPI, ElevenLabs, and Twilio, supporting real-time speech processing and automated call handling.",
    ],
    tags: ["Java", "Spring Boot", "FastAPI", "AWS", "LLMs"],
  },
];

const projectItems = [
  {
    title: "Internal Organization Chatbot",
    description:
      "RAG-based internal knowledge chatbot with auth-ready FastAPI and Next.js architecture.",
    tags: ["FastAPI", "Next.js", "FAISS", "Sentence Transformers", "LLM API"],
    imageUrl: "/images/chatbot.png",
    projectHref: "#",
    repoHref: "#",
  },
  {
    title: "Social Genius AI",
    description:
      "AI-powered content generation platform for social media with Gemini-driven content workflows.",
    tags: ["Next.js", "Tailwind CSS", "Gemini API", "Stripe"],
    imageUrl: "/images/social_genius.png",
    projectHref: "#",
    repoHref: "#",
  },
  {
    title: "Estates Here",
    description:
      "Real estate web app for buying, selling, and renting with advanced filters and user auth.",
    tags: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Vite",
      "JWT",
      "bcrypt",
      "React",
    ],
    imageUrl: "/images/estates.png",
    projectHref: "#",
    repoHref: "#",
  },
  {
    title: "Mapty",
    description:
      "Workout mapping app that uses browser geolocation to track runs and rides on an interactive map.",
    tags: ["HTML", "CSS", "JavaScript", "Geolocation API"],
    imageUrl: "/images/mapty.png",
    projectHref: "#",
    repoHref: "#",
  },
];

const skillIcons = [
  { label: "JAVA", symbol: "J" },
  { label: "PYTHON", symbol: "Py" },
  { label: "FASTAPI", symbol: "F" },
  { label: "SPRINGBOOT", symbol: "S" },
  { label: "POSTGRESQL", symbol: "DB" },
  { label: "DOCKER", symbol: "Dk" },
  { label: "AWS", symbol: "☁" },
  { label: "LLMS", symbol: "AI" },
];

const skillCards = [
  {
    title: "BACKEND",
    description: "Java, Python, FastAPI, Spring Boot",
    value: "",
  },
  {
    title: "CLOUD & DATA",
    description: "PostgreSQL, Docker, AWS",
    value: "",
  },
  {
    title: "AI SYSTEMS",
    description: "LLMs, real-time speech workflows, applied AI integrations",
    value: "",
  },
];

const hobbyItems = [
  {
    title: "Badminton",
    subtitle: "Speed and strategy.",
  },
  {
    title: "Sketching",
    subtitle: "Focus through art.",
  },
  {
    title: "Reading",
    subtitle: "New perspectives.",
  },
  {
    title: "Traveling",
    subtitle: "Exploring the world.",
  },
];

const contactCards = [
  {
    icon: "✉",
    title: "Email",
    subtitle: "hello@atelier.dev",
  },
  {
    icon: "◔",
    title: "LinkedIn",
    subtitle: "Connect with me",
  },
  {
    icon: "⌖",
    title: "Location",
    subtitle: "San Francisco, CA",
  },
];

export default function App() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const visibleProjects = projectItems.map((project, index) => {
    let position = index - activeProjectIndex;
    const midpoint = Math.floor(projectItems.length / 2);

    if (position > midpoint) position -= projectItems.length;
    if (position < -midpoint) position += projectItems.length;

    return { ...project, position, index };
  });

  return (
    <div className="min-h-screen bg-[#f8f6f3] text-slate-900">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#5c4df5]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:212px_264px] opacity-45" />
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,220,104,0.18),_transparent_62%)]" />

      <div className="relative">
        <header className="border-b border-slate-200/70 bg-white/85 backdrop-blur-sm">
          <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4 lg:px-12">
            <div className="text-sm font-black tracking-tight text-[#0476D0]">
              ATELIER.DEV
            </div>

            <ul className="hidden items-center gap-12 text-[11px] font-medium text-slate-500 md:flex">
              <li>Projects</li>
              <li>Experience</li>
              <li>Skills</li>
              <li>Contact</li>
            </ul>

            <button
              type="button"
              className="rounded-md bg-[#ffd11a] px-5 py-2 text-[11px] font-black tracking-[0.2em] text-slate-900 shadow-[0_8px_20px_rgba(255,209,26,0.32)]"
            >
              RESUME
            </button>
          </nav>
        </header>

        <main className="mx-auto max-w-[1280px] px-8 pb-24 pt-16 lg:px-12 lg:pb-32 lg:pt-24">
          <section className="min-h-[calc(100vh-90px)]">
            <div className="grid items-center gap-10 lg:grid-cols-[620px_1fr]">
              <div className="max-w-[620px] pt-14 lg:pt-20">
                <h1 className="text-[4.2rem] leading-[0.9] font-black tracking-[-0.08em] sm:text-[5.3rem] lg:text-[5.9rem]">
                  <span className="block text-slate-900">Hello!</span>
                  <span className="block text-[#1682e3]">
                    I&apos;m a Software
                  </span>
                  <span className="block text-[#1682e3]">Engineer.</span>
                </h1>

                <p className="mt-8 max-w-[560px] text-[1.04rem] leading-7 text-slate-500">
                  Code, curiosity, and a lot of &ldquo;why does this behave like
                  that?&rdquo; I&apos;m a Software Engineer who enjoys exploring
                  problems and building practical solutions along the way.
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <button
                    type="button"
                    className="rounded-md bg-[#0476D0] px-6 py-3 text-xs font-bold tracking-[0.18em] text-white shadow-[0_16px_32px_rgba(4,118,208,0.28)] transition hover:-translate-y-0.5 hover:bg-[#0367b6]"
                  >
                    VIEW WORK
                  </button>

                  <div className="flex items-center gap-3">
                    <IconButton
                      label="LeetCode"
                      href="https://leetcode.com/u/Srajna/"
                    >
                      <LeetCodeIcon />
                    </IconButton>
                    <IconButton
                      label="GitHub"
                      href="https://github.com/SrajnaJ"
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      label="LinkedIn"
                      href="https://www.linkedin.com/in/srajna-jain-74a183233/"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </div>
                </div>
              </div>

              <div className="relative hidden min-h-[470px] items-center justify-center lg:flex">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_56%_32%,rgba(22,130,227,0.14),transparent_30%),radial-gradient(circle_at_50%_68%,rgba(255,209,26,0.16),transparent_24%)]" />
                <img
                  src="/images/avatar.png"
                  alt="Avatar illustration"
                  className="relative h-[470px] w-auto object-contain opacity-95 [mask-image:radial-gradient(circle_at_center,black_56%,transparent_90%)]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(248,246,243,0),rgba(248,246,243,1))]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(248,246,243,1),rgba(248,246,243,0))]" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,rgba(248,246,243,1),rgba(248,246,243,0))]" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[linear-gradient(270deg,rgba(248,246,243,1),rgba(248,246,243,0))]" />
              </div>
            </div>
          </section>

          <section className="grid gap-10 pb-24 pt-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-14">
            <div className="pt-2">
              <h2 className="text-4xl font-black tracking-[-0.06em] text-[#1682e3]">
                Experience
              </h2>
              <p className="mt-3 text-sm font-medium text-slate-500">
                Professional timeline and roles.
              </p>
            </div>

            <div className="space-y-5">
              {experienceItems.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="rounded-lg border border-slate-200/70 bg-[#f5f2ef] p-7 shadow-[0_14px_34px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-[2rem] leading-none font-black tracking-[-0.05em] text-slate-900">
                        {item.company}
                      </h3>
                      <p className="mt-2 text-[11px] font-black tracking-[0.24em] text-[#1682e3]">
                        {item.role}
                      </p>
                    </div>

                    <span className="inline-flex w-fit rounded-md bg-[#ffd11a] px-4 py-2 text-[11px] font-black tracking-tight text-slate-900 shadow-[0_8px_18px_rgba(255,209,26,0.25)]">
                      {item.period}
                    </span>
                  </div>

                  <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-[1rem] leading-7 text-slate-600">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-500 shadow-[0_4px_10px_rgba(15,23,42,0.04)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="pb-16 pt-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-[3.2rem] leading-none font-black tracking-[-0.07em] text-slate-900 sm:text-[3.8rem]">
                  <span>Featured</span>
                  <span className="text-[#1682e3]">Projects</span>
                </h2>
              </div>

              <p className="max-w-sm text-right text-sm font-medium leading-6 text-slate-500">
                Swipe through some of my favorite engineering challenges.
              </p>
            </div>

            <div className="mt-10">
              <div className="relative mx-auto h-[500px] max-w-[980px] overflow-hidden">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() =>
                    setActiveProjectIndex(
                      (activeProjectIndex - 1 + projectItems.length) %
                        projectItems.length,
                    )
                  }
                  className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-[0_14px_30px_rgba(15,23,42,0.12)] transition hover:bg-white hover:text-[#0476D0]"
                >
                  <ChevronLeftIcon />
                </button>

                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() =>
                    setActiveProjectIndex(
                      (activeProjectIndex + 1) % projectItems.length,
                    )
                  }
                  className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-[0_14px_30px_rgba(15,23,42,0.12)] transition hover:bg-white hover:text-[#0476D0]"
                >
                  <ChevronRightIcon />
                </button>

                {visibleProjects.map((project) => {
                  const isVisible = Math.abs(project.position) <= 1;
                  const translateX = project.position * 250;
                  const translateY = project.position === 0 ? 0 : 28;
                  const scale = project.position === 0 ? 1 : 0.8;
                  const opacity = project.position === 0 ? 1 : 0.76;
                  const cardWidth = project.position === 0 ? 440 : 330;
                  const pointerClass =
                    project.position === 0
                      ? "pointer-events-auto"
                      : isVisible
                        ? "pointer-events-auto cursor-pointer"
                        : "pointer-events-none";

                  return (
                    <article
                      key={project.title}
                      onClick={() => setActiveProjectIndex(project.index)}
                      className={`absolute left-1/2 top-0 overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.14)] transition-all duration-500 ease-out ${pointerClass} ${
                        project.position === 0 ? "" : "select-none"
                      }`}
                      style={{
                        width: `${cardWidth}px`,
                        transform: `translate3d(calc(-50% + ${translateX}px), ${translateY}px, 0) scale(${scale})`,
                        opacity: isVisible ? opacity : 0,
                        zIndex: 20 - Math.abs(project.position),
                      }}
                    >
                      <div className="h-[250px] overflow-hidden bg-[#efedeb]">
                        {project.imageUrl ? (
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="h-full w-full object-cover object-top"
                          />
                        ) : (
                          <div
                            className={`flex h-full items-center justify-center text-[10px] font-black tracking-[0.32em] ${
                              project.imageTone || "bg-[#efedeb] text-slate-400"
                            }`}
                          >
                            <span
                              className={
                                project.imageTone?.includes("text-white")
                                  ? "text-white/80"
                                  : "text-slate-400"
                              }
                            >
                              {project.imageLabel}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.96)_18%,#ffffff)] p-5">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-[1.55rem] leading-tight font-black tracking-[-0.05em] text-slate-900">
                            {project.title}
                          </h3>
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black tracking-[0.18em] text-slate-500">
                            0{project.index + 1}
                          </span>
                        </div>
                        <p className="mt-2 truncate text-[0.92rem] leading-6 text-slate-600">
                          {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={`${project.title}-${tag}`}
                              className="bg-[#e9f3fd] px-2.5 py-1 text-[10px] font-black tracking-[0.14em] text-[#1682e3]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 flex items-center gap-2">
                          <a
                            href={project.projectHref}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-md bg-[#0476D0] px-3 py-2 text-[10px] font-black tracking-[0.14em] text-white shadow-[0_10px_20px_rgba(4,118,208,0.2)]"
                          >
                            PROJ LINK
                          </a>
                          <a
                            href={project.repoHref}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-[10px] font-black tracking-[0.14em] text-slate-700"
                          >
                            REPO LINK
                          </a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-1 flex items-center justify-center gap-2">
                {projectItems.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => setActiveProjectIndex(index)}
                    className={`rounded-full transition-all ${
                      index === activeProjectIndex
                        ? "h-2.5 w-2.5 bg-[#0476D0]"
                        : "h-2.5 w-2.5 bg-slate-300"
                    }`}
                    aria-label={`Go to ${project.title}`}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="mx-[-2rem] bg-[#f3f1ef] px-8 py-20 lg:mx-[-3rem] lg:px-12">
            <div className="mx-auto max-w-[1220px]">
              <div className="text-center">
                <h2 className="text-[3rem] leading-none font-black tracking-[-0.06em] text-slate-900 sm:text-[3.4rem]">
                  <span>Technical</span>
                  <span className="text-[#1682e3]">Skills</span>
                </h2>
                <div className="mx-auto mt-4 h-1 w-20 bg-[#ffd11a]" />
              </div>

              <div className="mt-12 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
                {skillIcons.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-md border border-slate-200 bg-white text-xl font-bold text-[#1682e3] shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
                      {item.symbol}
                    </div>
                    <p className="mt-3 text-[10px] font-black tracking-[0.24em] text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                {skillCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-md border border-slate-200 bg-white px-5 py-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[10px] font-black tracking-[0.22em] text-[#1682e3]">
                        {card.title}
                      </p>
                      {card.value ? (
                        <span className="text-sm font-black text-[#1682e3]">
                          {card.value}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="pb-20 pt-14">
            <div className="flex items-center gap-4">
              <h2 className="text-[2.2rem] leading-none font-black tracking-[-0.05em] text-slate-900">
                Hobbies
              </h2>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {hobbyItems.map((item) => (
                <article key={item.title} className="overflow-hidden">
                  <div className="flex h-[170px] items-center justify-center rounded-md border border-slate-200 bg-[#f1efed] text-[10px] font-black tracking-[0.3em] text-slate-400">
                    PHOTO PLACEHOLDER
                  </div>
                  <div className="px-0 py-3">
                    <h3 className="text-lg font-black tracking-[-0.03em] text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="pb-20 pt-8">
            <div className="rounded-[1.1rem] bg-[#1682e3] px-10 py-12 text-white shadow-[0_22px_44px_rgba(22,130,227,0.24)]">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-[3rem] leading-none font-black tracking-[-0.06em]">
                    Let&apos;s Connect.
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-blue-50">
                    I am always open to discussing new projects or engineering
                    challenges.
                  </p>
                </div>

                <button
                  type="button"
                  className="w-fit rounded-md bg-[#ffd11a] px-8 py-4 text-xs font-black tracking-[0.16em] text-slate-900 shadow-[0_12px_28px_rgba(0,0,0,0.15)]"
                >
                  EMAIL ME
                </button>
              </div>
            </div>
          </section>

          <section className="pb-24 pt-4">
            <div className="text-center">
              <h2 className="text-[3rem] leading-none font-black tracking-[-0.06em] text-slate-900">
                <span>Get In</span>
                <span className="text-[#1682e3]">Touch</span>
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-[980px] gap-6 md:grid-cols-3">
              {contactCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-md border border-slate-200 bg-[#f5f2ef] px-6 py-8 text-center shadow-[0_10px_22px_rgba(15,23,42,0.04)]"
                >
                  <div className="text-2xl font-bold text-[#1682e3]">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-base font-black tracking-[-0.03em] text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">{card.subtitle}</p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-[980px] rounded-[1rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_14px_30px_rgba(15,23,42,0.05)] md:px-8 md:py-10">
              <form className="space-y-7">
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block">
                    <span className="text-[10px] font-black tracking-[0.22em] text-slate-700">
                      FULL NAME
                    </span>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="mt-3 w-full rounded-sm border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#1682e3]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[10px] font-black tracking-[0.22em] text-slate-700">
                      EMAIL ADDRESS
                    </span>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="mt-3 w-full rounded-sm border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#1682e3]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-[10px] font-black tracking-[0.22em] text-slate-700">
                    MESSAGE
                  </span>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="mt-3 w-full rounded-sm border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#1682e3]"
                  />
                </label>

                <div className="text-center">
                  <button
                    type="submit"
                    className="rounded-md bg-[#0476D0] px-8 py-3 text-xs font-black tracking-[0.16em] text-white shadow-[0_14px_30px_rgba(4,118,208,0.22)]"
                  >
                    SEND MESSAGE →
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
