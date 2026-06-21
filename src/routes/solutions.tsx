import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Star } from "lucide-react";
import { Section, SectionHeader } from "../components/site/Section";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Nos formules solaires — GREEN SOLAR ENERGY" },
      { name: "description", content: "Découvrez nos formules Basic, Standard et Premium d'installation solaire au Maroc. Trouvez le pack adapté à vos besoins." },
      { property: "og:title", content: "Formules solaires — GREEN SOLAR ENERGY" },
      { property: "og:description", content: "Basic, Standard, Premium — la formule solaire qu'il vous faut." },
    ],
  }),
  component: SolutionsPage,
});

const packs = [
  {
    name: "Basic",
    desc: "Idéal pour les petits foyers souhaitant débuter dans l'autoconsommation.",
    features: [
      "Système 3 kWc",
      "8 panneaux haute performance",
      "Onduleur fiable",
      "Garantie 10 ans",
    ],
  },
  {
    name: "Standard",
    desc: "La formule équilibrée pour la plupart des maisons familiales.",
    features: [
      "Système 5 kWc",
      "14 panneaux premium",
      "Onduleur intelligent + monitoring",
      "Garantie 15 ans",
      "Maintenance 2 ans incluse",
    ],
    featured: true,
  },
  {
    name: "Premium",
    desc: "Solution complète pour grandes villas et besoins professionnels.",
    features: [
      "Système 10+ kWc",
      "Panneaux haut rendement",
      "Stockage par batterie",
      "Garantie 25 ans",
      "Maintenance 5 ans incluse",
      "Support prioritaire 24/7",
    ],
  },
];

function SolutionsPage() {
  return (
    <div>
      <Section>
        <SectionHeader
          eyebrow="Nos formules"
          title="Choisissez la solution qui vous correspond"
          description="Trois formules pensées pour s'adapter à tous les profils, du foyer modeste à l'entreprise."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {packs.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-8 ${
                p.featured
                  ? "border-primary bg-card shadow-eco"
                  : "border-border bg-card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-eco-yellow px-3 py-1 text-xs font-bold text-eco-green-dark">
                  <Star className="h-3 w-3 fill-current" /> Le plus populaire
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-bold transition ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Demander un devis
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Besoin d'une solution sur mesure ?{" "}
          <Link to="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
            Contactez nos experts
          </Link>
        </p>
      </Section>
    </div>
  );
}
