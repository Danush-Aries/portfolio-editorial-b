import type { Metadata } from "next";
import Link from "next/link";
import { NOW } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { NumericMarker } from "@/components/NumericMarker";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Dhanush is working on this quarter — active threads, in-flight experiments, and the near-term backlog.",
};

// Expanded copy so the Now page feels like a real page and not a bullet list.
const NOW_EXPANDED: Record<string, string> = {
  "Two portfolio sites":
    "Two variants in flight. This one, plus a companion Three.js / R3F build that runs a small 3D scene as the hero. Same content, two audiences — hiring managers who want to read, hiring managers who want to feel.",
  "LLM red-team harness":
    "Extending llm-fragility-lab with a new class of probes: indirect prompt-injection via retrieved documents. Testing where the boundary breaks when the attacker owns the corpus but not the prompt.",
  "CTF recon MCP":
    "A single Claude Code tool that chains subfinder → httpx → nuclei and streams results back into the model's context. The point is to see how much of an initial recon phase Claude can drive end-to-end.",
  "Bug-bounty writeup skill":
    "One-shot bug-bounty writeups from a raw request/response pair. Structured summary, severity guess, remediation, disclosure-ready markdown. Feeds every future report I file.",
};

export default function NowPage() {
  const updated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* -------- 01 · HERO -------- */}
      <section aria-labelledby="now-h" className="grid-12 items-end">
        <div className="col-span-12 md:col-span-2 flex items-end">
          <NumericMarker
            value={4}
            duration={550}
            className="block font-extrabold text-ink text-[72px] md:text-[112px] leading-[0.8] tracking-[-0.06em] tabular-nums"
            ariaLabel="Now — 4 items"
          />
        </div>
        <h1
          id="now-h"
          className="col-span-12 md:col-span-10 text-[40px] sm:text-[52px] md:text-[68px] leading-[1.02] tracking-[-0.04em] font-medium m-0"
        >
          What I&apos;m shipping{" "}
          <span className="text-oxide">this quarter.</span>
        </h1>
      </section>

      <div className="grid-12 mt-10 md:mt-14 pt-8 border-t border-hair">
        <div className="col-span-12 md:col-span-3 eyebrow">Updated</div>
        <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.01em] text-ink-soft m-0">
          {updated}
        </p>
      </div>
      <div className="grid-12 mt-6 pt-6 border-t border-hair">
        <div className="col-span-12 md:col-span-3 eyebrow">Cadence</div>
        <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.01em] text-ink-soft m-0">
          One /now update per fortnight. What&apos;s here is currently open in a
          tab.
        </p>
      </div>

      {/* -------- 02 · THREADS -------- */}
      <SectionHead
        index="02"
        label="THREADS"
        title="In-flight this fortnight"
        meta={`${String(NOW.length).padStart(2, "0")} items`}
      />
      <div className="border-t border-ink">
        {NOW.map((n, i) => (
          <article
            key={n.title}
            className="grid-12 items-start py-8 md:py-10 border-b border-hair"
          >
            <div className="col-span-2 md:col-span-1 text-[13px] md:text-[14px] font-semibold text-muted tabular-nums pt-1">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="col-span-10 md:col-span-4">
              <h2 className="text-[22px] md:text-[26px] font-medium tracking-[-0.02em] m-0">
                {n.title}
              </h2>
              <div className="mt-2 eyebrow">Status · active</div>
            </div>
            <div className="col-span-12 md:col-span-7 mt-3 md:mt-0 space-y-3">
              <p className="text-[16px] md:text-[17px] leading-[1.5] text-ink-soft m-0">
                {n.detail}
              </p>
              {NOW_EXPANDED[n.title] && (
                <p className="text-[15px] md:text-[16px] leading-[1.55] text-muted m-0">
                  {NOW_EXPANDED[n.title]}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="grid-12 mt-14">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <Link
            href="/"
            className="link-underline text-[14px] uppercase tracking-[0.14em]"
          >
            ← Back to index
          </Link>
        </div>
      </div>
    </>
  );
}
