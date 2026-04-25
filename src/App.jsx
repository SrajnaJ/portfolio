import { useState } from "react";

function IconButton({ children, label, href }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-md border border-slate-200 bg-white shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(15,23,42,0.12)]"
    >
      {children}
    </a>
  );
}

function LeetCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
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
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#111111">
      <path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.2 1.83 1.2 1.08 1.8 2.82 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.66-.3-5.47-1.3-5.47-5.78 0-1.28.47-2.33 1.22-3.16-.12-.3-.53-1.52.12-3.16 0 0 1-.31 3.3 1.2A11.7 11.7 0 0112 6.6c1.03 0 2.07.14 3.03.4 2.3-1.5 3.3-1.2 3.3-1.2.65 1.64.24 2.86.12 3.16.76.83 1.22 1.88 1.22 3.16 0 4.49-2.81 5.47-5.49 5.77.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.83.58A12 12 0 0012 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
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
    points: [
      "Built a RAG-based internal knowledge chatbot that ingests documents and retrieves context using FAISS vector search.",
      "Developed a FastAPI backend and Next.js chat UI with auth-ready architecture for scalable internal-only usage.",
    ],
    tags: ["FastAPI", "Next.js", "FAISS", "Sentence Transformers", "LLM API"],
    imageUrl: "/images/chatbot.png",
    projectHref: "",
    repoHref: "https://github.com/SrajnaJ/IntChatbot",
  },
  {
    title: "Social Genius AI",
    points: [
      "Built an AI-powered content generation platform that creates platform-specific content from images or tagged text.",
      "Integrated Gemini-powered generation, responsive Next.js UI, and Stripe subscriptions for secure payments.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Gemini API", "Stripe"],
    imageUrl: "/images/social_genius.png",
    projectHref: "https://socialgenius-ai.netlify.app/",
    repoHref: "",
  },
  {
    title: "Estates Here",
    points: [
      "Built a real estate platform for buying, selling, and renting properties with advanced filters and clean UI.",
      "Implemented Google OAuth, JWT authentication, and bcrypt-secured flows for direct user-owner interaction.",
    ],
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
    projectHref: "https://mern-estate-byl5.onrender.com/",
    repoHref: "https://github.com/SrajnaJ/Mern-Estate",
  },
  {
    title: "Mapty",
    points: [
      "Built a workout tracking app that maps runs and cycling sessions using the browser Geolocation API.",
      "Used vanilla JavaScript to manage location-based interactions, UI state, and workout history display.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Geolocation API"],
    imageUrl: "/images/mapty.png",
    projectHref: "",
    repoHref: "https://github.com/SrajnaJ/Mapty",
  },
  {
    title: "Forkify",
    points: [
      "Built a recipe discovery application with search, ingredient details, and saved cooking workflow interactions.",
      "Developed the app using JavaScript with Webpack, Babel, Fraction.js, and the Food2Fork API.",
    ],
    tags: ["JavaScript", "Webpack", "Babel", "Fraction.js", "Food2Fork API"],
    imageUrl: "/images/forkify.png",
    projectHref: "",
    repoHref: "https://github.com/SrajnaJ/forkify",
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

const skillCarouselItems = [
  {
    label: "Java",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    label: "Python",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    label: "Django",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    label: "Spring",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    label: "MySQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    label: "PostgreSQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    label: "Docker",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    label: "Algorithms",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-original.svg",
  },
  {
    label: "GitHub",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    label: "Postman",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    label: "MongoDB",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    label: "Operating Systems",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    label: "LLMs",
    iconUrl: "",
  },
];

const skillCards = [
  {
    title: "BACKEND",
    description: "Java, Python, FastAPI, Django, Spring",
  },
  {
    title: "CLOUD & DATA",
    description: "AWS, Docker, PostgreSQL, MySQL, MongoDB, Postman",
  },
  {
    title: "LLM & RAG",
    description:
      "LLMs, RAG pipelines, applied AI workflows, prompt-driven systems",
  },
  {
    title: "ALGORITHMS",
    description:
      "800+ problems solved on various coding platforms. LeetCode rating - 1666",
  },
];

const hobbyItems = [
  {
    title: "Badminton",
    subtitle: "Speed and strategy.",
    imageUrl: "/images/badminton.png",
  },
  {
    title: "Sketching",
    subtitle: "Focus through art.",
    imageUrl: "/images/sketching.png",
  },
  {
    title: "Reading",
    subtitle: "New perspectives.",
    imageUrl: "/images/reading.png",
  },
  {
    title: "Traveling",
    subtitle: "Exploring the world.",
    imageUrl: "/images/travel.png",
  },
];

const contactCards = [
  {
    icon: "✉",
    title: "Email",
    subtitle: "srajnajain13@gmail.com",
    href: "mailto:srajnajain13@gmail.com",
  },
  {
    icon: "◔",
    title: "LinkedIn",
    subtitle: "Connect with me",
    href: "https://www.linkedin.com/in/srajna-jain-74a183233/",
  },
  {
    icon: "⌖",
    title: "Location",
    subtitle: "India",
    href: "",
  },
];

export default function App() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);

  const visibleProjects = projectItems.map((project, index) => {
    let position = index - activeProjectIndex;
    const midpoint = Math.floor(projectItems.length / 2);

    if (position > midpoint) position -= projectItems.length;
    if (position < -midpoint) position += projectItems.length;

    return { ...project, position, index };
  });

  const nextSkill = () => {
    setActiveSkillIndex((current) => (current + 1) % skillCarouselItems.length);
  };

  const prevSkill = () => {
    setActiveSkillIndex(
      (current) =>
        (current - 1 + skillCarouselItems.length) % skillCarouselItems.length,
    );
  };

  const visibleSkillItems = Array.from(
    { length: skillCarouselItems.length },
    (_, index) =>
      skillCarouselItems[
        (activeSkillIndex + index) % skillCarouselItems.length
      ],
  );

  return (
    <div className="min-h-screen bg-[#f8f6f3] text-slate-900">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#5c4df5]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:212px_264px] opacity-45" />
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,220,104,0.18),_transparent_62%)]" />

      <div className="relative">
        <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-sm">
          <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4 lg:px-12">
            <ul className="hidden items-center gap-12 text-[13px] font-medium text-slate-500 md:flex">
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <a
              href="/resume.pdf"
              download
              className="rounded-md bg-[#ffd11a] px-5 py-2 text-[11px] font-black tracking-[0.2em] text-slate-900 shadow-[0_8px_20px_rgba(255,209,26,0.32)] inline-block"
            >
              RESUME
            </a>
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
                  <a
                    href="#projects"
                    className="rounded-md bg-[#0476D0] px-6 py-3 text-xs font-bold tracking-[0.18em] text-white shadow-[0_16px_32px_rgba(4,118,208,0.28)] transition hover:-translate-y-0.5 hover:bg-[#0367b6]"
                  >
                    VIEW WORK
                  </a>

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

          <section
            id="experience"
            className="scroll-mt-24 grid gap-10 pb-24 pt-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-14"
          >
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

          <section id="projects" className="scroll-mt-24 pb-16 pt-8">
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
              <div className="relative mx-auto h-[640px] max-w-[1180px] overflow-hidden">
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
                  const translateX = project.position * 320;
                  const translateY = project.position === 0 ? 0 : 34;
                  const scale = project.position === 0 ? 1 : 0.82;
                  const opacity = project.position === 0 ? 1 : 0.76;
                  const cardWidth = project.position === 0 ? 600 : 430;
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
                      <div className="flex h-[320px] items-center justify-center overflow-hidden bg-[#efedeb]">
                        {project.imageUrl ? (
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="h-full w-full object-contain object-center"
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
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.94rem] leading-6 text-slate-600">
                          {project.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>

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

                        {(project.projectHref || project.repoHref) && (
                          <div className="mt-5 flex items-center gap-2">
                            {project.projectHref && (
                              <a
                                href={project.projectHref}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md bg-[#0476D0] px-3 py-2 text-[10px] font-black tracking-[0.14em] text-white shadow-[0_10px_20px_rgba(4,118,208,0.2)]"
                              >
                                DEMO LINK
                              </a>
                            )}
                            {project.repoHref && (
                              <a
                                href={project.repoHref}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-[10px] font-black tracking-[0.14em] text-slate-700"
                              >
                                REPO LINK
                              </a>
                            )}
                          </div>
                        )}
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

          <section
            id="skills"
            className="scroll-mt-24 mx-[-2rem] bg-[#f3f1ef] px-8 py-20 lg:mx-[-3rem] lg:px-12"
          >
            <div className="mx-auto max-w-[1220px]">
              <div className="text-center">
                <h2 className="text-[3rem] leading-none font-black tracking-[-0.06em] text-slate-900 sm:text-[3.4rem]">
                  <span>Technical</span>
                  <span className="text-[#1682e3]">Skills</span>
                </h2>
                <div className="mx-auto mt-4 h-1 w-20 bg-[#ffd11a]" />
              </div>

              <div className="mt-12">
                <div className="relative">
                  <button
                    type="button"
                    aria-label="Previous skill"
                    onClick={prevSkill}
                    className="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition hover:text-[#0476D0]"
                  >
                    <ChevronLeftIcon />
                  </button>

                  <div className="overflow-hidden px-10">
                    <div className="flex gap-5 transition-transform duration-500 ease-out">
                      {visibleSkillItems.map((item, index) => (
                        <div
                          key={`${item.label}-${index}`}
                          className="group flex w-[140px] flex-none flex-col items-center rounded-xl border border-slate-200 bg-white px-4 py-5 text-center shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-1"
                        >
                          <div className="flex h-14 w-14 items-center justify-center">
                            {item.iconUrl ? (
                              <img
                                src={item.iconUrl}
                                alt={item.label}
                                className="h-12 w-12 object-contain"
                              />
                            ) : (
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0476D0]/10 text-sm font-black tracking-[0.16em] text-[#0476D0]">
                                AI
                              </div>
                            )}
                          </div>
                          <p className="mt-4 text-[10px] font-black tracking-[0.18em] text-slate-600">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label="Next skill"
                    onClick={nextSkill}
                    className="absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition hover:text-[#0476D0]"
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {skillCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-md border border-slate-200 bg-white px-5 py-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
                  >
                    <p className="text-[10px] font-black tracking-[0.22em] text-[#1682e3]">
                      {card.title}
                    </p>
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
                  <div className="h-[170px] overflow-hidden rounded-md border border-slate-200 bg-[#f1efed]">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
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

                <a
                  href="mailto:srajnajain13@gmail.com"
                  className="w-fit rounded-md bg-[#ffd11a] px-8 py-4 text-xs font-black tracking-[0.16em] text-slate-900 shadow-[0_12px_28px_rgba(0,0,0,0.15)]"
                >
                  EMAIL ME
                </a>
              </div>
            </div>
          </section>

          <section id="contact" className="scroll-mt-24 pb-24 pt-4">
            <div className="text-center">
              <h2 className="text-[3rem] leading-none font-black tracking-[-0.06em] text-slate-900">
                <span>Get In</span>
                <span className="text-[#1682e3]">Touch</span>
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-[980px] gap-6 md:grid-cols-3">
              {contactCards.map((card) =>
                card.href ? (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      card.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="rounded-md border border-slate-200 bg-[#f5f2ef] px-6 py-8 text-center shadow-[0_10px_22px_rgba(15,23,42,0.04)] transition hover:-translate-y-1"
                  >
                    <div
                      className={`text-2xl font-bold text-[#1682e3] ${card.title === "LinkedIn" ? "flex justify-center" : ""}`}
                    >
                      {card.title === "LinkedIn" ? <LinkedInIcon /> : card.icon}
                    </div>
                    <h3 className="mt-4 text-base font-black tracking-[-0.03em] text-slate-900">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      {card.subtitle}
                    </p>
                  </a>
                ) : (
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
                    <p className="mt-2 text-sm text-slate-500">
                      {card.subtitle}
                    </p>
                  </article>
                ),
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
