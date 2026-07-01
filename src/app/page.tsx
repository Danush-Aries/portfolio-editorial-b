import Link from "next/link";
import {
  ABOUT_PARAGRAPHS,
  IDENTITY,
  NOW,
  PROJECTS,
  TAGLINES,
} from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { NumericMarker } from "@/components/NumericMarker";

export default function Home() {
  return (
    <>
      {/* -------- 01 · HERO -------- */}
      <section aria-labelledby="hero-h" className="grid-12 items-end">
        <div className="col-span-12 md:col-span-2 flex items-end">
          <NumericMarker
            value={1}
            duration={550}
            className="block font-extrabold text-ink text-[88px] md:text-[128px] leading-[0.8] tracking-[-0.06em] tabular-nums"
            ariaLabel="Item 01"
          />
        </div>
        <h1
          id="hero-h"
          className="col-span-12 md:col-span-10 text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[0.98] tracking-[-0.045em] font-medium m-0"
        >
          I build the AI. I break the AI.{" "}
          <span className="text-oxide">I ship with the AI.</span>
        </h1>
      </section>

      <div className="grid-12 mt-10 md:mt-14 pt-8 border-t border-hair">
        <div className="col-span-12 md:col-span-3 eyebrow">Discipline</div>
        <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.01em] text-ink-soft m-0">
          AI &amp; agent engineering · LLM red-team &amp; safety · full-stack
          product.
        </p>
      </div>
      <div className="grid-12 mt-6 pt-6 border-t border-hair">
        <div className="col-span-12 md:col-span-3 eyebrow">Status</div>
        <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.01em] text-ink-soft m-0">
          Final-year B.Tech, Bangalore. Open to AI/ML &amp; cybersec internships
          from Aug 2026.
        </p>
      </div>
      <div className="grid-12 mt-6 pt-6 border-t border-hair">
        <div className="col-span-12 md:col-span-3 eyebrow">Shipped</div>
        <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.01em] text-ink-soft m-0">
          5 solo AI products · 3 security tools · adversarial LLM lab · 200+
          Claude Code skills.
        </p>
      </div>
      <div className="grid-12 mt-6 pt-6 border-t border-hair">
        <div className="col-span-12 md:col-span-3 eyebrow">Contact</div>
        <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.01em] m-0">
          <a className="link-underline" href={`mailto:${IDENTITY.email}`}>
            {IDENTITY.email}
          </a>
        </p>
      </div>

      {/* -------- 02 · SELECTED WORK -------- */}
      <SectionHead
        id="work"
        index="02"
        label="SELECTED WORK"
        title="Selected work"
        meta={`${String(PROJECTS.length).padStart(2, "0")} items`}
      />
      <ul className="border-t border-ink list-none p-0 m-0">
        {PROJECTS.map((p, i) => (
          <li
            key={p.slug}
            className="grid-12 items-baseline py-5 md:py-6 border-b border-hair group"
          >
            <Link
              href={`/work/${p.slug}`}
              className="col-span-12 grid grid-cols-subgrid grid-cols-12 items-baseline no-underline text-ink"
              aria-label={`Read case study: ${p.name}`}
            >
              <div className="col-span-2 md:col-span-1 text-[13px] md:text-[14px] font-semibold text-muted tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-10 md:col-span-4 text-[20px] md:text-[22px] font-medium tracking-[-0.015em] group-hover:text-oxide transition-colors">
                {p.name}
              </div>
              <div className="col-span-12 md:col-span-4 text-[14px] md:text-[15px] leading-[1.45] text-muted mt-1 md:mt-0">
                {p.pitch}
              </div>
              <div className="col-span-12 md:col-span-3 md:text-right text-[11px] md:text-[12px] uppercase tracking-[0.1em] text-muted mt-1 md:mt-0 group-hover:font-semibold group-hover:text-ink transition-all">
                {p.stack.slice(0, 2).join(" / ")}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* -------- 03 · ABOUT (excerpt) -------- */}
      <SectionHead
        index="03"
        label="ABOUT"
        title="Same loop, three tools."
        meta="Read full →"
      />
      <div className="grid-12">
        <p className="col-span-12 md:col-span-8 md:col-start-3 text-[18px] md:text-[22px] leading-[1.45] tracking-[-0.005em] text-ink-soft m-0">
          {ABOUT_PARAGRAPHS[0]}
        </p>
        <p className="col-span-12 md:col-span-8 md:col-start-3 mt-6 text-[16px] md:text-[18px] leading-[1.5] text-ink-soft m-0">
          {TAGLINES.opener}
        </p>
        <div className="col-span-12 md:col-span-8 md:col-start-3 mt-8">
          <Link
            href="/about"
            className="link-underline text-[14px] uppercase tracking-[0.14em]"
          >
            Read the full about →
          </Link>
        </div>
      </div>

      {/* -------- 04 · NOW -------- */}
      <SectionHead
        index="04"
        label="NOW"
        title="What I'm shipping this quarter"
        meta={`${String(NOW.length).padStart(2, "0")} threads`}
      />
      <ul className="border-t border-ink list-none p-0 m-0">
        {NOW.map((n, i) => (
          <li
            key={n.title}
            className="grid-12 items-baseline py-5 md:py-6 border-b border-hair"
          >
            <div className="col-span-2 md:col-span-1 text-[13px] md:text-[14px] font-semibold text-muted tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="col-span-10 md:col-span-4 text-[18px] md:text-[20px] font-medium tracking-[-0.015em]">
              {n.title}
            </div>
            <div className="col-span-12 md:col-span-7 text-[14px] md:text-[15px] leading-[1.45] text-muted mt-1 md:mt-0">
              {n.detail}
            </div>
          </li>
        ))}
      </ul>

      {/* -------- 05 · CONTACT -------- */}
      <SectionHead
        index="05"
        label="CONTACT"
        title="If it's a good fit — write."
      />
      <div className="grid-12">
        <div className="col-span-12 md:col-span-6 md:col-start-3">
          <p className="text-[18px] md:text-[20px] leading-[1.45] text-ink-soft m-0">
            I read every message. Cold-email is welcome. Best signal: a link to
            one of your projects and one sentence on what you&apos;re trying to
            make.
          </p>
          <dl className="mt-8 grid-12 gap-y-2 text-[14px]">
            <dt className="col-span-3 eyebrow">Email</dt>
            <dd className="col-span-9 m-0">
              <a className="link-underline" href={`mailto:${IDENTITY.email}`}>
                {IDENTITY.email}
              </a>
            </dd>
            <dt className="col-span-3 eyebrow">GitHub</dt>
            <dd className="col-span-9 m-0">
              <a
                className="link-underline"
                href={IDENTITY.github}
                target="_blank"
                rel="noreferrer"
              >
                github.com/Danush-Aries
              </a>
            </dd>
            <dt className="col-span-3 eyebrow">LinkedIn</dt>
            <dd className="col-span-9 m-0">
              <a
                className="link-underline"
                href={IDENTITY.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/dhanush-shankar
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}
