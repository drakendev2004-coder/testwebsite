import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sun, Wrench, LineChart, Leaf, Clock, Users, Headphones, ShieldCheck, Star } from "lucide-react";
import heroImg from "../assets/hero-solar.jpg";
import installImg from "../assets/installation.jpg";
import { Section, SectionHeader } from "../components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GREEN SOLAR ENERGY — Installation de panneaux solaires au Maroc" },
      { name: "description", content: "Installation, maintenance et conseil en énergie solaire au Maroc. Économisez sur vos factures avec une énergie propre et durable. Devis gratuit." },
      { name: "keywords", content: "panneaux solaires Maroc, énergie solaire, installation photovoltaïque, Casablanca, Rabat, Marrakech" },
      { property: "og:title", content: "GREEN SOLAR ENERGY — Énergie solaire au Maroc" },
      { property: "og:description", content: "Installation professionnelle de panneaux solaires pour particuliers et entreprises au Maroc." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Sun, title: "Installation", text: "Pose de panneaux solaires haut de gamme pour maisons et entreprises." },
  { icon: Wrench, title: "Maintenance", text: "Entretien et réparation pour garantir un rendement optimal." },
  { icon: LineChart, title: "Étude & conseil", text: "Audit énergétique personnalisé et dimensionnement sur mesure." },
];

const reasons = [
  { icon: Leaf, title: "Économie d'énergie", text: "Jusqu'à 70% d'économies sur votre facture d'électricité." },
  { icon: Clock, title: "Installation rapide", text: "Mise en service en 48 à 72 heures selon le projet." },
  { icon: Users, title: "Équipe professionnelle", text: "Techniciens certifiés avec plus de 10 ans d'expérience." },
  { icon: Headphones, title: "Support client", text: "Accompagnement et SAV réactif 7j/7." },
];

const testimonials = [
  { name: "Mohamed", city: "Larache", text: "Installation impeccable et équipe très professionnelle. Ma facture a baissé considérablement dès le premier mois !" },
  { name: "Abdelouahed", city: "Ksar El Kebir", text: "GREEN SOLAR a su répondre à toutes mes questions. Je recommande vivement leur expertise." },
  { name: "Mohamed", city: "Ouazzane", text: "Service après-vente au top. Investissement rentabilisé plus vite que prévu." },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Villa marocaine équipée de panneaux solaires"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-eco-green-dark/90 via-eco-green-dark/60 to-eco-green-dark/20" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-36 lg:py-44">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-eco-yellow/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-eco-green-dark">
              <Sun className="h-3.5 w-3.5" /> Énergie 100% propre
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-6xl">
              Énergie solaire propre et économique avec{" "}
              <span className="text-eco-yellow">GREEN SOLAR ENERGY</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/85 md:text-xl">
              Installation professionnelle de panneaux solaires au Maroc.
              Réduisez vos factures et investissez dans un avenir durable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-eco-yellow px-6 text-sm font-bold text-eco-green-dark shadow-eco transition hover:opacity-90"
              >
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/212684226432?text=Bonjour%20GREEN%20SOLAR%20ENERGY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
              >
                <MessageCircle className="h-4 w-4" /> Contact WhatsApp
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 text-primary-foreground">
              {[
                { v: "20+", l: "Installations" },
                { v: "20 ans", l: "Garantie" },
                { v: "100%", l: "Clients satisfaits" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 p-3 backdrop-blur">
                  <dt className="font-display text-2xl font-bold text-eco-yellow">{s.v}</dt>
                  <dd className="text-xs text-primary-foreground/80">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <SectionHeader
          eyebrow="Nos services"
          title="Une expertise solaire complète"
          description="De l'étude initiale à la maintenance, nous vous accompagnons à chaque étape de votre projet solaire."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-eco">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl gradient-eco text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <section className="bg-secondary/50">
        <Section className="py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src={installImg}
                alt="Technicien installant des panneaux solaires"
                width={1280}
                height={896}
                loading="lazy"
                className="rounded-3xl object-cover shadow-eco"
              />
            </div>
            <div>
              <SectionHeader
                center={false}
                eyebrow="Pourquoi nous choisir"
                title="Un partenaire de confiance pour votre transition énergétique"
                description="Nous combinons expertise technique, matériel premium et service client de qualité."
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {reasons.map((r) => (
                  <div key={r.title} className="flex gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <r.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{r.title}</h4>
                      <p className="mt-0.5 text-sm text-muted-foreground">{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader
          eyebrow="Témoignages"
          title="Ils nous font confiance"
          description="Nos clients satisfaits à travers le nord du Maroc."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex gap-0.5 text-eco-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-foreground">"{t.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-eco font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.city}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl gradient-eco p-10 text-primary-foreground md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-eco-yellow/20 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <ShieldCheck className="h-10 w-10 text-eco-yellow" />
              <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                Prêt à passer à l'énergie solaire ?
              </h3>
              <p className="mt-3 text-primary-foreground/80">
                Recevez votre devis gratuit et personnalisé en moins de 24h.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-eco-yellow px-6 text-sm font-bold text-eco-green-dark transition hover:opacity-90"
            >
              Obtenir mon devis <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
