import Link from "next/link";
import { NumericMarker } from "@/components/NumericMarker";

export default function NotFound() {
  return (
    <section className="grid-12 items-end min-h-[60vh]">
      <div className="col-span-12 md:col-span-2 flex items-end">
        <NumericMarker
          value={4}
          duration={400}
          className="block font-extrabold text-ink text-[112px] md:text-[160px] leading-[0.8] tracking-[-0.06em] tabular-nums"
          ariaLabel="404"
        />
      </div>
      <div className="col-span-12 md:col-span-10">
        <div className="eyebrow mb-2 text-oxide">04 — NOT FOUND</div>
        <h1 className="text-[48px] md:text-[72px] leading-[1.02] tracking-[-0.04em] font-medium m-0">
          This route <span className="text-oxide">doesn&apos;t exist.</span>
        </h1>
        <p className="mt-6 text-[18px] md:text-[20px] leading-[1.5] text-ink-soft max-w-[60ch]">
          You&apos;ve wandered off the grid. Either I haven&apos;t written this
          page yet, or it moved. No shame in going back.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="link-underline text-[14px] uppercase tracking-[0.14em]"
          >
            ← Back to index
          </Link>
        </div>
      </div>
    </section>
  );
}
