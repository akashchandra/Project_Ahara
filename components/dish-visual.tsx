import type { DishVisual as DishVisualType } from "@/lib/data";
import { cn } from "@/lib/utils";

type DishVisualProps = {
  type: DishVisualType;
  label: string;
  className?: string;
};

export function DishVisual({ type, label, className }: DishVisualProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative isolate aspect-[4/3] overflow-hidden rounded-[26px] border border-white/80 bg-[#f8efe0] shadow-insetGlow",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.46),rgba(255,255,255,0)_45%),linear-gradient(180deg,rgba(255,244,224,0.72),rgba(179,91,48,0.12))]" />
      <div className="absolute inset-x-5 bottom-5 h-[64%] rounded-full bg-[rgba(255,255,255,0.62)] shadow-soft" />
      {type === "dosa" ? <DosaArt /> : null}
      {type === "biryani" ? <BiryaniArt /> : null}
      {type === "chai" ? <ChaiArt /> : null}
      {type === "bowl" ? <BowlArt /> : null}
      <div className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs font-semibold text-ink shadow-soft">
        {label}
      </div>
    </div>
  );
}

function DosaArt() {
  return (
    <>
      <div className="absolute left-[12%] top-[42%] h-[24%] w-[76%] -rotate-6 rounded-full bg-[linear-gradient(90deg,#d88425,#f5c56d,#fff2c8)] shadow-depth" />
      <div className="absolute left-[18%] top-[47%] h-[8%] w-[52%] -rotate-6 rounded-full bg-[rgba(124,62,28,0.22)]" />
      <div className="absolute bottom-[21%] left-[18%] h-10 w-10 rounded-full bg-[#f5f0e4] shadow-soft" />
      <div className="absolute bottom-[21%] left-[31%] h-10 w-10 rounded-full bg-[#a8bc7f] shadow-soft" />
      <div className="absolute bottom-[21%] right-[23%] h-10 w-10 rounded-full bg-[#c85d3f] shadow-soft" />
    </>
  );
}

function BiryaniArt() {
  return (
    <>
      <div className="absolute bottom-[14%] left-[18%] h-[56%] w-[64%] rounded-[45%] bg-[linear-gradient(180deg,#f8d680,#b65f35)] shadow-depth" />
      <div className="absolute bottom-[26%] left-[24%] h-[44%] w-[52%] rounded-[42%] bg-[linear-gradient(135deg,#fff0b8,#e29d3d,#8d4b2f)]" />
      <div className="absolute left-[30%] top-[33%] h-3 w-20 rotate-12 rounded-full bg-[#fff6ca]" />
      <div className="absolute left-[36%] top-[45%] h-3 w-24 -rotate-12 rounded-full bg-[#f4c65d]" />
      <div className="absolute right-[24%] top-[38%] h-8 w-8 rounded-full bg-[#8f4a2f]" />
      <div className="absolute right-[34%] top-[52%] h-7 w-7 rounded-full bg-[#7b432c]" />
      <div className="absolute left-[28%] top-[55%] h-2 w-14 rotate-12 rounded-full bg-[#537047]" />
    </>
  );
}

function ChaiArt() {
  return (
    <>
      <div className="absolute bottom-[18%] left-[30%] h-[48%] w-[36%] rounded-b-[2rem] rounded-t-xl bg-[linear-gradient(180deg,#fff7ec,#d98c47)] shadow-depth" />
      <div className="absolute left-[31%] top-[31%] h-5 w-[34%] rounded-full bg-[#7c3f24]" />
      <div className="absolute right-[24%] top-[44%] h-16 w-12 rounded-r-full border-[8px] border-[#f4d8b8] border-l-0" />
      <div className="absolute bottom-[17%] left-[25%] h-4 w-[52%] rounded-full bg-[rgba(70,41,24,0.15)]" />
      <div className="absolute left-[34%] top-[19%] h-8 w-1 rounded-full bg-[rgba(124,63,36,0.22)]" />
      <div className="absolute left-[49%] top-[15%] h-10 w-1 rounded-full bg-[rgba(124,63,36,0.18)]" />
    </>
  );
}

function BowlArt() {
  return (
    <>
      <div className="absolute bottom-[14%] left-[18%] h-[48%] w-[64%] rounded-b-[3rem] rounded-t-[1.2rem] bg-[linear-gradient(180deg,#fff8eb,#d9a75b)] shadow-depth" />
      <div className="absolute left-[21%] top-[34%] h-10 w-[58%] rounded-full bg-[#fff3d7]" />
      <div className="absolute left-[27%] top-[30%] h-10 w-10 rounded-full bg-[#d96d3d]" />
      <div className="absolute left-[43%] top-[27%] h-11 w-11 rounded-full bg-[#f1c34f]" />
      <div className="absolute right-[27%] top-[31%] h-10 w-10 rounded-full bg-[#6e8a58]" />
      <div className="absolute left-[35%] top-[43%] h-6 w-16 -rotate-12 rounded-full bg-[#eef4df]" />
      <div className="absolute right-[34%] top-[47%] h-5 w-14 rotate-12 rounded-full bg-[#b84735]" />
    </>
  );
}
