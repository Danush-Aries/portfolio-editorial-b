// Expanded per-project narratives layered on top of the PROJECTS array in
// site.ts. Keys are slugs. Each entry provides a "why" section (~150-180
// words) and a short list of technical highlights, so /work/[slug] pages
// can render meaningful long-form copy without editing the source-of-truth
// PROJECTS list.

export const CASE_STUDIES: Record<
  string,
  { why: string; highlights: string[] }
> = {
  jarvis: {
    why: "I wanted one assistant that follows me between environments — the terminal, a browser tab, and a menu-bar daemon on macOS — without paying six API bills to get there. So jarvis routes across six LLM backends with automatic fallback: Claude Max via OAuth for the free path, then paid Claude API, then Gemini, then local Ollama models when I'm offline. Four sub-agents live inside it — an engineering agent, a pentester, a desktop-driver, and an autonomous operator — each with its own prompt caching profile, its own MCP tool budget, and its own trajectory log. The Playwright and OpenClaw MCP servers let it drive real applications, not toys. It is also the first project where I stopped writing wrapper scripts around Claude Code and started writing skills that Claude Code invokes on my behalf — the same pattern that generated every other project on this page.",
    highlights: [
      "Six LLM backends with auto-fallback (Claude Max OAuth → Claude API → Gemini → Ollama).",
      "Four sub-agents: engineering, pentest, desktop, autonomous operator.",
      "Playwright MCP + OpenClaw for real-app desktop control.",
      "Voice, web, CLI, and macOS menu-bar daemon — one config.",
      "Prompt caching + trajectory recording per sub-agent.",
    ],
  },
  breachintel: {
    why: "OSINT tooling is usually either a Python notebook or a $10k enterprise dashboard. breachintel is the middle path — a single FastAPI backend that unifies fourteen open feeds (ransomware trackers, dark-web scrapers, Shodan pools, threat-intel APIs) behind eighteen REST endpoints, with a ten-tab investigator GUI that looks and feels military-styled on purpose. Shodan is treated as a key pool with per-key rotation and quota bookkeeping, so a hobby subscription actually holds up under load. Leaflet plus vis-network render geo maps and relationship graphs for the correlational work that makes OSINT worth doing. About 4,200 lines of Python, all mine, all tested against live feeds. It is the project that convinced me most security tooling suffers from bad UX, not bad data.",
    highlights: [
      "14 OSINT feeds unified behind one FastAPI (~4,200 LOC).",
      "18 REST endpoints, 10-tab investigator GUI.",
      "Shodan key-pool rotator with quota accounting.",
      "Leaflet geo maps + vis-network relationship graphs.",
      "Live ransomware / dark-web monitor with WebSockets.",
    ],
  },
  "cve-advisor": {
    why: "Triaging a CVE is a 40-minute research task — NVD entry, exploit-DB search, PoC verification, remediation write-up. cve-advisor turns that into a 30-second Claude call. Point it at any CVE ID and it authors a full triage report: attack surface, exploitability score, PoC links, remediation steps, all grounded in NVD 2.0 and Exploit-DB with source citations. The interesting engineering is the sandbox — every LLM call runs inside a hardened Docker container with cap-drop ALL, non-root user, a 512 MB memory ceiling, and a read-only root filesystem, so even a hallucinated shell command has nowhere to go. Twenty async pytest tests keep the API contract honest and a seven-day disk cache means repeat CVEs are effectively free.",
    highlights: [
      "NVD 2.0 + Exploit-DB with inline citations.",
      "Hardened Docker sandbox: cap-drop ALL, non-root, 512 MB, read-only FS.",
      "20 async pytest tests over the FastAPI surface.",
      "7-day disk cache — repeat CVEs served from disk.",
      "Attack-surface, exploitability, PoC links, remediation — one endpoint.",
    ],
  },
  "llm-fragility-lab": {
    why: "Every other project on this page trusts an LLM to do something useful. This one distrusts them on purpose. llm-fragility-lab is the harness where I probe frontier models for jailbreaks, hallucinations, and prompt-injection failure modes — the failure surface that most demos hand-wave away. Scoring is intentionally zero-dependency: F1 for factual overlap, Jaccard for token overlap, bigram consistency, novel-token ratio, and length delta. Twenty-nine tests today, growing. It is where I go before I decide whether I trust a model with my agent stack, and it feeds the security posture of every other repo on this page. It is also the project that has taught me the most about the models I use — you don't understand a system until you have broken it.",
    highlights: [
      "29 adversarial tests across jailbreak / injection / hallucination.",
      "Zero-dependency scoring: F1, Jaccard, bigram overlap, novel-token, length.",
      "Feeds the security posture of every other agent project on this site.",
      "Model-agnostic — same suite runs against Claude, GPT, Gemini, local.",
    ],
  },
  "computer-use-agent": {
    why: "Claude's computer-use API is the most literal expression of what an agent is — a model, a screen, and a mouse. This project puts a working demo in front of anyone with a browser. A Dockerized Ubuntu container runs Xvfb and a VNC server; Claude sees the screen through screenshots, plans, and clicks; a Streamlit UI mirrors the loop live. Prompt caching keeps the running cost low. Image pruning keeps the context window from choking on redundant frames. Trajectory recording makes every session replayable end-to-end — useful for debugging, useful for demos, useful for building training data for future agents. This is the project people ask about first when they see the resume; it is also the project that made me take agent evaluation seriously.",
    highlights: [
      "Dockerized Ubuntu + Xvfb + VNC — one command up.",
      "Screenshot → plan → act loop mirrored live in Streamlit.",
      "Prompt caching + image-diff pruning to control cost.",
      "Trajectory recording — every session replayable.",
      "Frontier agent capabilities in a runnable demo.",
    ],
  },
  "customer-support-agent": {
    why: "This is the AI product I would ship if a real customer paid me tomorrow. A Next.js 14 chat surface sits on top of a 10-article RAG knowledge base with inline citations that link back to the source. A three-class mood detector reads the customer's temperature — neutral / frustrated / angry — and surfaces an auto-escalation banner when the vibe turns. Extended thinking streams token-by-token to the UI, so support agents can watch Claude reason before it commits. Ephemeral prompt caching drops cost per conversation to a fraction of a naive implementation. Radix primitives, Tailwind styling, TypeScript strict. It is the cleanest single demo of what production AI product engineering looks like in 2026, and the closest thing to a job-shaped artifact on this page.",
    highlights: [
      "Next.js 14 App Router + streaming Claude Sonnet.",
      "10-article RAG KB with inline citations.",
      "3-class mood detector (neutral / frustrated / angry) + auto-escalation.",
      "Extended thinking streamed to UI.",
      "Ephemeral prompt caching — fraction-of-a-cent per turn.",
    ],
  },
};
