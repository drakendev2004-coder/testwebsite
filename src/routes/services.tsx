import { createFileRoute, Link } from "@tanstack/react-router";
import { Sun, Wrench, LineChart, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "../components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services solaires — Installation, maintenance, conseil | GREEN SOLAR ENERGY" },
      { name: "description", content: "Installation de panneaux solaires, maintenance et étude énergétique au Maroc. Solutions professionnelles pour particuliers et entreprises." },
      { property: "og:title", content: "Nos services solaires — GREEN SOLAR ENERGY" },
      { property: "og:description", content: "Installation, maintenance et conseil en énergie solaire au Maroc." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Sun,
    title: "Installation de panneaux solaires",
    text: "Conception et pose de systèmes photovoltaïques performants pour maisons, villas et bâtiments professionnels.",
    features: [
      "Panneaux haute performance certifiés",
      "Onduleurs intelligents et fiables",
      "Installation conforme aux normes marocaines",
      "Mise en service rapide en 48-72h",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance et réparation",
    text: "Maintenez votre installation à son meilleur rendement grâce à notre service d'entretien préventif et curatif.",
    features: [
      "Diagnostic complet annuel",
      "Nettoyage professionnel des panneaux",
      "Réparation de tous composants",
      "Contrats de maintenance adaptés",
    ],
  },
  {
    icon: LineChart,
    title: "Étude et conseil énergétique",
    text: "Audit personnalisé de votre consommation et dimensionnement précis de votre future installation solaire.",
    features: [
      "Étude technique gratuite",
      "Simulation de production et d'économies",
      "Accompagnement administratif",
      "Optimisation du retour sur investissement",
    ],
  },
];

function ServicesPage() {
  return (
    <div>
      <Section>
        <SectionHeader
          eyebrow="Nos services"
          title="Des solutions solaires complètes"
          description="De l'étude au suivi long terme, GREEN SOLAR ENERGY couvre tous vos besoins en énergie solaire."
        />
        <div className="mt-14 space-y-10">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="grid items-center gap-8 rounded-3xl border border-border bg-card p-7 md:grid-cols-[auto_1fr] md:p-10"
            >
              <div className="grid h-20 w-20 place-items-center rounded-2xl gradient-eco text-primary-foreground">
                <s.icon className="h-10 w-10" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Service 0{i + 1}
                </div>
                <h2 className="mt-1 text-2xl font-bold text-foreground md:text-3xl">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.text}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex h-12 items-center rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground shadow-eco hover:opacity-90"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </Section>
    </div>
  );
}
