import type { Metadata } from "next";
import Link from "next/link";
import { COLOPHON } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { NumericMarker } from "@/components/NumericMarker";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "How this site was built — stack, type, and the one human plus one Claude Code session behind it.",
};

export default function ColophonPage() {
  return (
    <>
      {/* -------- 01 · HERO -------- */}
      <section aria-labelledby="colophon-h" className="grid-12 items-end">
        <div className="col-span-12 md:col-span-2 flex items-end">
          <NumericMarker
            value={0}
            duration={500}
            className="block font-extrabold text-ink text-[72px] md:text-[112px] leading-[0.8] tracking-[-0.06em] tabular-nums"
            ariaLabel="Colophon"
          />
        </div>
        <h1
          id="colophon-h"
          className="col-span-12 md:col-span-10 text-[40px] sm:text-[52px] md:text-[68px] leading-[1.02] tracking-[-0.04em] font-medium m-0"
        >
          Colophon.{" "}
          <span className="text-oxide">How this site was built.</span>
        </h1>
      </section>

      {/* -------- 02 · KEY / VALUE -------- */}
      <SectionHead index="02" label="STACK" title="Built with" />
      <div>
        <div className="grid-12 pt-6 border-t border-ink">
          <div className="col-span-12 md:col-span-3 eyebrow">Built with</div>
          <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.5] text-ink-soft m-0">
            {COLOPHON.built_with}
          </p>
        </div>
        <div className="grid-12 pt-6 mt-6 border-t border-hair">
          <div className="col-span-12 md:col-span-3 eyebrow">Designed in</div>
          <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.5] text-ink-soft m-0">
            {COLOPHON.designed_in}
          </p>
        </div>
        <div className="grid-12 pt-6 mt-6 border-t border-hair">
          <div className="col-span-12 md:col-span-3 eyebrow">Paired with</div>
          <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.5] text-ink-soft m-0">
            {COLOPHON.paired_with}
          </p>
        </div>
        <div className="grid-12 pt-6 mt-6 border-t border-hair">
          <div className="col-span-12 md:col-span-3 eyebrow">Type</div>
          <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.5] text-ink-soft m-0">
            Inter Tight (400 – 800), served by{" "}
            <span className="whitespace-nowrap">next/font</span>. No display
            serif — monolingual on purpose.
          </p>
        </div>
        <div className="grid-12 pt-6 mt-6 border-t border-hair">
          <div className="col-span-12 md:col-span-3 eyebrow">Palette</div>
          <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.5] text-ink-soft m-0">
            Paper #fafaf7, ink #0d0d0d, hairline #d8d3c6, single accent
            oxide-orange #b45f00. Used sparingly on numeric markers and one
            hero span — never as chrome.
          </p>
        </div>
        <div className="grid-12 pt-6 mt-6 border-t border-hair">
          <div className="col-span-12 md:col-span-3 eyebrow">Grid</div>
          <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.5] text-ink-soft m-0">
            Strict 12-column grid across every page, 16px gutters, collapses
            to 6-column at 900px. Type scale: hero 88px, section 44px, body
            15–16px, meta 11px.
          </p>
        </div>
        <div className="grid-12 pt-6 mt-6 border-t border-hair">
          <div className="col-span-12 md:col-span-3 eyebrow">Hosting</div>
          <p className="col-span-12 md:col-span-9 text-[18px] md:text-[20px] leading-[1.5] text-ink-soft m-0">
            Deployed on Vercel · edge cache · statically prerendered where
            possible.
          </p>
        </div>
      </div>

      {/* -------- 03 · CREDITS -------- */}
      <SectionHead index="03" label="CREDITS" title="Attribution" />
      <div className="grid-12">
        <ul className="col-span-12 md:col-span-8 md:col-start-3 space-y-3 list-none p-0 m-0 text-[16px] md:text-[17px] leading-[1.6] text-ink-soft">
          <li>
            Framework:{" "}
            <a
              className="link-underline"
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
            >
              Next.js 15
            </a>{" "}
            · App Router · React 19 · TypeScript.
          </li>
          <li>
            Styling:{" "}
            <a
              className="link-underline"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind CSS v4
            </a>{" "}
            with a hand-tuned 12-col grid utility.
          </li>
          <li>
            Type:{" "}
            <a
              className="link-underline"
              href="https://fonts.google.com/specimen/Inter+Tight"
              target="_blank"
              rel="noreferrer"
            >
              Inter Tight
            </a>{" "}
            by the Rasmus Andersson / Google Fonts crew, self-hosted via
            next/font.
          </li>
          <li>
            Written and reviewed in a single Claude Code session, alongside{" "}
            <span className="whitespace-nowrap">~/.claude/skills/</span>.
          </li>
        </ul>
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
