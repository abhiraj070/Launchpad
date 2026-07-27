"use client";

import { Star, History, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import CompactProductCard from "@/components/workspace/CompactProductCard";
import { useWorkspace } from "@/lib/useWorkspace";

// The personalized layer of the homepage: Favorites → Recently opened →
// You may also like. Each block renders only when it has content, so a
// first-time visitor sees nothing extra and the homepage stays normal.
// Everything is client + localStorage — server renders nothing here.
function Block({ icon: Icon, eyebrow, title, products, favoriteSet }) {
  if (!products.length) return null;
  return (
    <section className="pt-10">
      <Container>
        <div className="flex items-center gap-2">
          <Icon size={13} className="text-accent" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {eyebrow}
          </p>
        </div>
        <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-fg">{title}</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <CompactProductCard
              key={product.id}
              product={product}
              favorite={favoriteSet.has(product.slug)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function Workspace() {
  const { favorites, recents, recommendations } = useWorkspace();
  const favoriteSet = new Set(favorites.map((p) => p.slug));

  if (!favorites.length && !recents.length && !recommendations.length) {
    return null;
  }

  return (
    <div className="animate-fade-in">
      <Block
        icon={Star}
        eyebrow="Yours"
        title="Favorites"
        products={favorites}
        favoriteSet={favoriteSet}
      />
      <Block
        icon={History}
        eyebrow="Recent"
        title="Recently opened"
        products={recents}
        favoriteSet={favoriteSet}
      />
      <Block
        icon={Sparkles}
        eyebrow="For you"
        title="You may also like"
        products={recommendations}
        favoriteSet={favoriteSet}
      />
    </div>
  );
}
