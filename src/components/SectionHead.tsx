type Props = {
  index: string; // e.g. "02"
  label: string; // "SELECTED WORK"
  title?: string; // "Selected work"
  meta?: string; // right column meta, e.g. "06 items"
  id?: string;
};

// "0N — SECTION NAME" eyebrow above a large section title, with an optional
// right-aligned meta chip. Follows the Swiss Grid 12-col rhythm.
export function SectionHead({ index, label, title, meta, id }: Props) {
  return (
    <div id={id} className="grid-12 mt-24 md:mt-32 mb-6 md:mb-8">
      <div className="col-span-12 md:col-span-6 flex items-baseline gap-4">
        <span className="eyebrow text-oxide font-semibold tabular-nums">
          {index}
        </span>
        <span className="eyebrow">— {label}</span>
      </div>
      {meta && (
        <div className="col-span-12 md:col-span-6 md:text-right eyebrow">
          {meta}
        </div>
      )}
      {title && (
        <h2 className="col-span-12 mt-4 md:mt-6 text-[36px] md:text-[44px] leading-[1.02] tracking-[-0.03em] font-medium">
          {title}
        </h2>
      )}
    </div>
  );
}
