import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, ShieldCheck, Sparkles, Target } from "lucide-react";
import aboutImg from "../assets/about-solar.jpg";
import { Section, SectionHeader } from "../components/site/Section";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — GREEN SOLAR ENERGY" },
      { name: "description", content: "Découvrez GREEN SOLAR ENERGY : 10 ans d'expertise dans l'énergie solaire au Maroc, équipe certifiée, matériel premium et garanties solides." },
      { property: "og:title", content: "À propos — GREEN SOLAR ENERGY" },
      { property: "og:description", content: "10 ans d'expertise solaire au Maroc." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Expertise", text: "5 ans d'expérience dans l'installation solaire au Maroc." },
  { icon: ShieldCheck, title: "Qualité", text: "Matériel premium certifié avec garanties constructeur jusqu'à 25 ans." },
  { icon: Sparkles, title: "Innovation", text: "Technologies de pointe et solutions sur mesure." },
  { icon: Target, title: "Engagement", text: "Un accompagnement de A à Z, de l'étude à la mise en service." },
];

function AboutPage() {
  return (
    <div>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              À propos
            </span>
            <h1 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
              Pionniers de l'énergie solaire au Maroc
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Depuis 5 ans, <strong className="text-foreground">GREEN SOLAR ENERGY</strong> accompagne
              particuliers et entreprises dans leur transition vers une énergie propre, fiable et économique.
            </p>
            <p className="mt-4 text-muted-foreground">
              Ma mission est de contribuer activement à la transition énergétique durable
              en développant des solutions photovoltaïques fiables et respectueuses de
              l’environnement, au service d’une agriculture moderne, décarbonisée et responsable.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat value="20+" label="Installations" />
              <Stat value="5 ans" label="d'expertise" />
              <Stat value="100%" label="clients satisfaits" />
            </div>
          </div>
          <div>
            <img
              src={aboutImg}
              alt="Panneaux solaires en plein soleil"
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-3xl object-cover shadow-eco"
            />
          </div>
        </div>
      </Section>

      <section className="bg-secondary/50">
        <Section>
          <SectionHeader eyebrow="Nos valeurs" title="Ce qui nous distingue" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-eco text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Discutons de votre projet</h2>
          <p className="mt-4 text-muted-foreground">
            Notre équipe est à votre écoute pour étudier votre besoin et vous proposer la solution idéale.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground shadow-eco hover:opacity-90"
          >
            Nous contacter
          </Link>
        </div>
      </Section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="font-display text-2xl font-bold text-primary">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
