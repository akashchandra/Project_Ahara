import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

type MenuItemCardProps = {
  name: string;
  description: string;
  price: number;
  tags: readonly string[];
};

export function MenuItemCard({ name, description, price, tags }: MenuItemCardProps) {
  return (
    <article className="interactive-card rounded-[30px] border border-white/70 p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-ink">{name}</h3>
          <p className="mt-3 max-w-xl text-sm sm:text-base">{description}</p>
        </div>
        <div className="rounded-full border border-white/75 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-soft">
          {formatCurrency(price)}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between rounded-[22px] bg-[rgba(23,23,20,0.04)] px-4 py-3">
        <span className="text-sm font-medium text-muted">Made to order</span>
        <span className="text-sm font-semibold text-ink">Fast pickup friendly</span>
      </div>
    </article>
  );
}
