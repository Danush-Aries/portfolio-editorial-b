import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/content/site";
import { CASE_STUDIES } from "@/content/case-studies";
import { SectionHead } from "@/components/SectionHead";
import { NumericMarker } from "@/components/NumericMarker";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.name,
    description: project.pitch,
    openGraph: {
      title: `${project.name} — ${project.role}`,
      description: project.pitch,
      type: "article",
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const paddedIdx = String(idx + 1).padStart(2, "0");
  const study = CASE_STUDIES[slug];

  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      {/* -------- HERO -------- */}
      <section aria-labelledby="work-h" className="grid-12 items-end">
        <div className="col-span-12 md:col-span-2 flex items-end">
          <NumericMarker
            value={idx + 1}
            duration={550}
            className="block font-extrabold text-ink text-[80px] md:text-[128px] leading-[0.8] tracking-[-0.06em] tabular-nums"
            ariaLabel={`Case study ${paddedIdx}`}
          />
        </div>
        <div className="col-span-12 md:col-span-10">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="eyebrow text-oxide font-semibold">
              {paddedIdx}
            </span>
            <span className="eyebrow">— {project.role.toUpperCase()}</span>
            <span className="eyebrow ml-auto">{project.year}</span>
          </div>
          <h1
            id="work-h"
            className="text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[0.98] tracking-[-0.045em] font-medium m-0"
          >
            {project.name}
          </h1>
        </div>
      </section>

      {/* -------- META KEY/VALUE ROWS -------- */}
      <div className="grid-12 mt-10 md:mt-14 pt-8 border-t border-hair">
        <div className="col-span-12 md:col-span-3 eyebrow">Pitch</div>
        <p className="col-span-12 md:col-span-9 text-[18px] md:text-[22px] leading-[1.4] tracking-[-0.01em] text-ink m-0">
          {project.pitch}
        </p>
      </div>
      <div className="grid-12 mt-6 pt-6 border-t border-hair">
        <div className="col-span-12 md:col-span-3 eyebrow">Detail</div>
        <p className="col-span-12 md:col-span-9 text-[16px] md:text-[18px] leading-[1.55] text-ink-soft m-0">
          {project.detail}
        </p>
      </div>
      <div className="grid-12 mt-6 pt-6 border-t border-hair">
        <div className="col-span-12 md:col-span-3 eyebrow">Stack</div>
        <ul className="col-span-12 md:col-span-9 flex flex-wrap gap-x-4 gap-y-2 list-none p-0 m-0 text-[13px] uppercase tracking-[0.1em] text-muted">
          {project.stack.map((s) => (
            <li key={s} className="whitespace-nowrap">
              {s}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid-12 mt-6 pt-6 border-t border-hair">
        <div className="col-span-12 md:col-span-3 eyebrow">Repo</div>
        <p className="col-span-12 md:col-span-9 text-[16px] md:text-[18px] m-0">
          <a
            className="link-underline"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            {project.url.replace(/^https?:\/\//, "")}
          </a>
        </p>
      </div>

      {/* -------- WHY -------- */}
      {study && (
        <>
          <SectionHead
            index="02"
            label="WHY THIS PROJECT"
            title="Why this project"
          />
          <div className="grid-12">
            <p className="col-span-12 md:col-span-8 md:col-start-3 text-[18px] md:text-[20px] leading-[1.6] text-ink-soft m-0">
              {study.why}
            </p>
          </div>

          {/* -------- HIGHLIGHTS -------- */}
          <SectionHead index="03" label="HIGHLIGHTS" title="What it does" />
          <ul className="border-t border-ink list-none p-0 m-0">
            {study.highlights.map((h, i) => (
              <li
                key={h}
                className="grid-12 items-baseline py-5 border-b border-hair"
              >
                <div className="col-span-2 md:col-span-1 text-[13px] font-semibold text-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="col-span-10 md:col-span-11 text-[16px] md:text-[17px] leading-[1.5] text-ink-soft m-0">
                  {h}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* -------- LIVE LINK -------- */}
      <SectionHead index="04" label="LIVE" title="See it in the wild" />
      <div className="grid-12">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-baseline gap-3 text-[24px] md:text-[32px] font-medium tracking-[-0.02em] link-underline"
          >
            {project.url.replace(/^https?:\/\//, "")}
            <span aria-hidden>↗</span>
          </a>
          <p className="mt-4 text-[15px] text-muted m-0">
            Source is public. README + tests included.
          </p>
        </div>
      </div>

      {/* -------- PREV / NEXT -------- */}
      <nav
        aria-label="Case study navigation"
        className="grid-12 mt-24 md:mt-32 pt-8 border-t border-ink"
      >
        <Link
          href={`/work/${prev.slug}`}
          className="col-span-6 md:col-span-6 no-underline text-ink group"
        >
          <div className="eyebrow">← Previous</div>
          <div className="mt-2 text-[20px] md:text-[24px] font-medium tracking-[-0.015em] group-hover:text-oxide transition-colors">
            {prev.name}
          </div>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="col-span-6 md:col-span-6 md:text-right no-underline text-ink group"
        >
          <div className="eyebrow">Next →</div>
          <div className="mt-2 text-[20px] md:text-[24px] font-medium tracking-[-0.015em] group-hover:text-oxide transition-colors">
            {next.name}
          </div>
        </Link>
      </nav>
      <div className="grid-12 mt-10">
        <Link
          href="/"
          className="col-span-12 link-underline text-[14px] uppercase tracking-[0.14em]"
        >
          ← Back to index
        </Link>
      </div>
    </>
  );
}
