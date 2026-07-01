// Shared content module for all 3 editorial variants.
// This is the source of truth. All 3 sites must render THIS data — differ only in typography / palette / rhythm.

export const IDENTITY = {
  handle: "Danush-Aries",
  displayName: "Dhanush Shankar",
  location: "Bangalore",
  role: "Full-stack agent engineer",
  email: "danushankar3@gmail.com",
  linkedin: "https://linkedin.com/in/dhanush-shankar",
  github: "https://github.com/Danush-Aries",
  x: "https://x.com/danushankar3",
} as const

export const TAGLINES = {
  main: "I build the AI. I break the AI. I ship with the AI.",
  hero_sub: "Final-year engineering student in Bangalore. Five solo AI products live, one adversarial LLM lab, and a very active ~/.claude/ folder.",
  opener: "Same loop, three tools — build the RAG pipeline, red-team the model that runs it, ship the product on top.",
} as const

export const ABOUT_PARAGRAPHS = [
  "I'm a final-year B.Tech CSE student who spends every hour outside class designing agents that do things in the real world — read files, drive browsers, triage CVEs, run desktops, defend LLMs from themselves.",
  "I work with Claude Code + MCP the way most people work with an IDE. Zero job history. Five solo AI products live. One very active `~/.claude/` folder.",
  "The AI + cybersec + vibe-coding threads aren't three careers — they're three faces of the same skill. Every project loops back to Claude + tools + a defined goal, whether that goal is answering a customer, triaging a CVE, driving a desktop, or drafting exploit PoCs.",
] as const

export const PROJECTS = [
  {
    slug: "jarvis",
    name: "jarvis",
    role: "flagship",
    year: 2026,
    pitch: "Portable multi-provider AI assistant — voice, web, CLI, macOS daemon.",
    detail: "Six LLM backends with auto-fallback, zero-API-key mode via Claude Max OAuth, four specialised sub-agents (engineering, pentest, desktop, autonomous operator), Playwright MCP + OpenClaw desktop control.",
    stack: ["Python", "Claude Max / API", "Ollama", "Whisper", "MCP", "Playwright"],
    url: "https://github.com/Danush-Aries/jarvis",
  },
  {
    slug: "breachintel",
    name: "breachintel",
    role: "OSINT",
    year: 2026,
    pitch: "All-source OSINT terminal — 14 feeds behind one FastAPI, 10-tab military-styled investigator GUI.",
    detail: "18 REST endpoints, live ransomware / dark-web monitor, Shodan key-pool rotator, Leaflet geo maps, ~4,200 lines of Python.",
    stack: ["Python", "FastAPI", "Shodan", "Playwright", "Leaflet", "vis-network"],
    url: "https://github.com/Danush-Aries/breachintel",
  },
  {
    slug: "cve-advisor",
    name: "cve-advisor",
    role: "LLM × security",
    year: 2026,
    pitch: "LLM-driven CVE triage. Any CVE ID → a Claude-authored triage report over NVD 2.0 + Exploit-DB.",
    detail: "Attack surface, exploitability, PoC links, remediation. Hardened Docker sandbox (cap-drop ALL, non-root, 512 MB, read-only FS), 20 async pytest tests, 7-day cache.",
    stack: ["Python", "FastAPI", "Claude API", "NVD", "Exploit-DB", "Docker"],
    url: "https://github.com/Danush-Aries/cve-advisor",
  },
  {
    slug: "llm-fragility-lab",
    name: "llm-fragility-lab",
    role: "red team",
    year: 2026,
    pitch: "Adversarial testing lab — probes LLMs for jailbreaks, hallucinations, prompt-injection failure modes.",
    detail: "Zero-dep scoring (F1 + Jaccard + bigrams + novel-token + length), 29 tests. Where I go to break the models I use in every other project on this page.",
    stack: ["Python", "Claude", "pytest", "scoring-metrics"],
    url: "https://github.com/Danush-Aries/llm-fragility-lab",
  },
  {
    slug: "computer-use-agent",
    name: "computer-use-agent",
    role: "agent",
    year: 2026,
    pitch: "Claude driving a virtual desktop — Streamlit UI, Dockerized Ubuntu+Xvfb+VNC.",
    detail: "Screenshot → plan → act loop. Prompt caching, image pruning, trajectory recording. An impressive demo of frontier agent capabilities.",
    stack: ["Python", "Claude computer-use", "Streamlit", "Docker", "VNC"],
    url: "https://github.com/Danush-Aries/computer-use-agent",
  },
  {
    slug: "customer-support-agent",
    name: "customer-support-agent",
    role: "product",
    year: 2026,
    pitch: "Production Next.js 14 chat over a 10-article RAG KB.",
    detail: "Inline citations, 3-class mood detector + auto-escalation banner, ephemeral prompt caching, extended-thinking streamed to UI. The cleanest demo of AI product engineering.",
    stack: ["Next.js 14", "TypeScript", "Claude Sonnet", "Tailwind", "Radix"],
    url: "https://github.com/Danush-Aries/customer-support-agent",
  },
] as const

export const NOW = [
  {
    title: "Two portfolio sites",
    detail: "One Three.js/R3F 3D experience, one editorial minimal build. Live soon.",
  },
  {
    title: "LLM red-team harness",
    detail: "Indirect prompt-injection probes — adds to llm-fragility-lab.",
  },
  {
    title: "CTF recon MCP",
    detail: "subfinder → httpx → nuclei chained behind a single Claude Code tool.",
  },
  {
    title: "Bug-bounty writeup skill",
    detail: "One-shot writeups from a raw request/response pair.",
  },
] as const

export const STACK_GROUPS = [
  {
    label: "AI / Agents",
    items: ["Anthropic Agent SDK", "MCP servers", "Claude Code", "RAG", "prompt caching", "extended thinking", "LangChain / LangGraph", "Ollama", "Hugging Face"],
  },
  {
    label: "Security",
    items: ["Web / Network / API pentest", "OWASP + OWASP LLM Top 10", "MITRE ATT&CK", "Burp Suite", "Nmap", "Wireshark", "Metasploit", "sqlmap", "Kali", "Shodan", "prompt-injection red-teaming"],
  },
  {
    label: "Web",
    items: ["Next.js 14 App Router", "React", "TypeScript", "Tailwind", "FastAPI", "Node.js", "WebSockets"],
  },
  {
    label: "Systems",
    items: ["Python 3.12", "Bash", "Docker", "GitHub Actions", "Playwright", "AWS", "Linux", "pytest / Jest", "TDD"],
  },
] as const

export const CERTS = [
  { issuer: "EC-Council", name: "Ethical Hacking Essentials (EHE)", year: "2025" },
  { issuer: "EC-Council", name: "SQL Injection Attacks", year: "2025" },
  { issuer: "EC-Council", name: "In-House Pentesting Lab", year: "2025" },
  { issuer: "Cisco NetAcad", name: "Ethical Hacker", year: "2024" },
  { issuer: "Cisco NetAcad", name: "Network Defense", year: "2024" },
  { issuer: "AICTE × Palo Alto Networks", name: "Network Security Fundamentals", year: "2024" },
  { issuer: "University of Michigan (Coursera)", name: "Python for Everybody", year: "2023" },
  { issuer: "University of Michigan (Coursera)", name: "Data Structures", year: "2023" },
] as const

export const EDUCATION = {
  school: "GITAM University, Bengaluru",
  degree: "B.Tech, Computer Science and Engineering",
  dates: "2022 — 2026",
  cgpa: "6.66 / 10",
  focus: "AI, security, systems programming",
} as const

export const LANGUAGES = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Conversational" },
  { name: "Telugu", level: "Native" },
] as const

export const PROFILE_FACTS = [
  { label: "Location", value: "Bangalore, India" },
  { label: "Timezone", value: "IST (UTC+5:30)" },
  { label: "Available", value: "AI, LLM/agent, AI security, red team internships" },
  { label: "Active on", value: "TryHackMe · HackTheBox · PortSwigger" },
  { label: "Shipping cadence", value: "5 solo AI products live, 200+ Claude Code skills" },
] as const

export const COLOPHON = {
  built_with: "Next.js 15 App Router · React 19 · TypeScript · Tailwind v4 · Vercel",
  designed_in: "Written line-by-line in a real editor. No page builder, no template. Type set with intent.",
  paired_with: "One human. One Claude Code session. A lot of ~/.claude/skills/",
} as const
