import type { Metadata } from "next";
import Link from "next/link";
import {
  ABOUT_PARAGRAPHS,
  CERTS,
  IDENTITY,
  STACK_GROUPS,
  TAGLINES,
} from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { NumericMarker } from "@/components/NumericMarker";

export const metadata: Metadata = {
  title: "About",
  description: TAGLINES.hero_sub,
};

export default function AboutPage() {
  return (
    <>
      {/* -------- 01 · HERO -------- */}
      <section aria-labelledby="about-h" className="grid-12 items-end">
        <div className="col-span-12 md:col-span-2 flex items-end">
          <NumericMarker
            value={1}
            duration={550}
            className="block font-extrabold text-ink text-[72px] md:text-[112px] leading-[0.8] tracking-[-0.06em] tabular-nums"
            ariaLabel="About"
          />
        </div>
        <h1
          id="about-h"
          className="col-span-12 md:col-span-10 text-[40px] sm:text-[52px] md:text-[68px] leading-[1.02] tracking-[-0.04em] font-medium m-0"
        >
          Full-stack agent engineer.{" "}
          <span className="text-oxide">Bangalore, India.</span>
        </h1>
      </section>

      <div className="grid-12 mt-10 md:mt-14 pt-8 border-t border-hair">
        <div className="col-span-12 md:col-span-3 eyebrow">Discipline</div>
        <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.01em] text-ink-soft m-0">
          {IDENTITY.role}
        </p>
      </div>
      <div className="grid-12 mt-6 pt-6 border-t border-hair">
        <div className="col-span-12 md:col-span-3 eyebrow">Base</div>
        <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.01em] text-ink-soft m-0">
          {IDENTITY.location}, India — remote-friendly, timezone-flexible.
        </p>
      </div>

      {/* -------- 02 · PROSE -------- */}
      <SectionHead index="02" label="ABOUT" title="Same loop, three tools." />
      <div className="grid-12 space-y-8">
        {ABOUT_PARAGRAPHS.map((p, i) => (
          <p
            key={i}
            className="col-span-12 md:col-span-8 md:col-start-3 text-[18px] md:text-[20px] leading-[1.55] tracking-[-0.005em] text-ink-soft m-0"
          >
            {p}
          </p>
        ))}
        <p className="col-span-12 md:col-span-8 md:col-start-3 text-[18px] md:text-[20px] leading-[1.55] tracking-[-0.005em] text-ink-soft m-0">
          {TAGLINES.opener}
        </p>
      </div>

      {/* -------- 03 · STACK -------- */}
      <SectionHead index="03" label="STACK" title="What I build with" />
      <div className="space-y-10 md:space-y-14">
        {STACK_GROUPS.map((g, gi) => (
          <div key={g.label} className="grid-12 items-start">
            <div className="col-span-12 md:col-span-3 pt-1">
              <div className="eyebrow text-oxide font-semibold tabular-nums">
                {String(gi + 1).padStart(2, "0")}
              </div>
              <div className="mt-1 text-[20px] md:text-[22px] font-medium tracking-[-0.015em]">
                {g.label}
              </div>
            </div>
            <ul className="col-span-12 md:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 list-none p-0 m-0 text-[15px] md:text-[16px] leading-[1.55] text-ink-soft">
              {g.items.map((item) => (
                <li key={item} className="border-b border-hair py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* -------- 04 · CERTS -------- */}
      <SectionHead index="04" label="CERTS" title="Signed proof" />
      <ul className="border-t border-ink list-none p-0 m-0">
        {CERTS.map((c, i) => (
          <li
            key={c}
            className="grid-12 items-baseline py-5 border-b border-hair"
          >
            <div className="col-span-2 md:col-span-1 text-[14px] font-semibold text-muted tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="col-span-10 md:col-span-11 text-[16px] md:text-[18px] leading-[1.45] text-ink-soft">
              {c}
            </div>
          </li>
        ))}
      </ul>

      {/* -------- 05 · LINKS -------- */}
      <SectionHead index="05" label="LINKS" title="Where to find me" />
      <div className="grid-12">
        <dl className="col-span-12 md:col-span-8 md:col-start-3 grid grid-cols-1 md:grid-cols-12 gap-y-3 text-[15px]">
          <dt className="md:col-span-3 eyebrow self-center">Email</dt>
          <dd className="md:col-span-9 m-0">
            <a className="link-underline" href={`mailto:${IDENTITY.email}`}>
              {IDENTITY.email}
            </a>
          </dd>
          <dt className="md:col-span-3 eyebrow self-center">GitHub</dt>
          <dd className="md:col-span-9 m-0">
            <a
              className="link-underline"
              href={IDENTITY.github}
              target="_blank"
              rel="noreferrer"
            >
              github.com/Danush-Aries
            </a>
          </dd>
          <dt className="md:col-span-3 eyebrow self-center">LinkedIn</dt>
          <dd className="md:col-span-9 m-0">
            <a
              className="link-underline"
              href={IDENTITY.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/dhanush-shankar
            </a>
          </dd>
          <dt className="md:col-span-3 eyebrow self-center">X / Twitter</dt>
          <dd className="md:col-span-9 m-0">
            <a
              className="link-underline"
              href={IDENTITY.x}
              target="_blank"
              rel="noreferrer"
            >
              @danushankar3
            </a>
          </dd>
        </dl>
        <div className="col-span-12 md:col-span-8 md:col-start-3 mt-10">
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
