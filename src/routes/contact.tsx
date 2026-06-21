import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Section, SectionHeader } from "../components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GREEN SOLAR ENERGY | Devis solaire gratuit au Maroc" },
      { name: "description", content: "Contactez GREEN SOLAR ENERGY pour un devis gratuit d'installation solaire au Maroc. WhatsApp, téléphone, formulaire — réponse sous 24h." },
      { property: "og:title", content: "Contactez GREEN SOLAR ENERGY" },
      { property: "og:description", content: "Devis solaire gratuit au Maroc, réponse sous 24h." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(8, "Téléphone invalide").max(20),
  message: z.string().trim().min(10, "Message trop court").max(1000),
});

const PHONE_DISPLAY = "+212 684-226432";
const PHONE_RAW = "212684226432";
const EMAIL = "greensolarenergy010@gmail.com";
const ADDRESS = "20 Rue Cadi Ayyad, 1er étage Appt 2, Tanger";

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    // Send via WhatsApp deep link as a quick lead capture
    const text = `Nouveau devis%0AName: ${encodeURIComponent(parsed.data.name)}%0AEmail: ${encodeURIComponent(parsed.data.email)}%0ATel: ${encodeURIComponent(parsed.data.phone)}%0AMessage: ${encodeURIComponent(parsed.data.message)}`;
    window.open(`https://wa.me/${PHONE_RAW}?text=${text}`, "_blank");
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div>
      <Section>
        <SectionHeader
          eyebrow="Contact"
          title="Parlons de votre projet solaire"
          description="Notre équipe vous répond sous 24h avec une étude personnalisée et un devis gratuit."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <div className="space-y-6">
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              title="Téléphone"
              text={PHONE_DISPLAY}
              href={`tel:+${PHONE_RAW}`}
            />
            <ContactCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="WhatsApp"
              text="Réponse rapide 7j/7"
              href={`https://wa.me/${PHONE_RAW}`}
              accent
            />
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              text={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            <ContactCard
              icon={<MapPin className="h-5 w-5" />}
              title="Adresse"
              text={ADDRESS}
              href="https://maps.google.com/?q=20+Rue+Cadi+Ayyad+Tanger"
            />
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 md:p-10">
            <h3 className="font-display text-2xl font-bold">Demander un devis gratuit</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Remplissez le formulaire, nous vous recontactons sous 24h.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Nom complet" placeholder="Votre nom" error={errors.name} />
              <Field name="phone" label="Téléphone" placeholder="+212..." error={errors.phone} />
            </div>
            <div className="mt-4">
              <Field name="email" type="email" label="Email" placeholder="vous@exemple.com" error={errors.email} />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium text-foreground">Votre projet</label>
              <textarea
                name="message"
                rows={5}
                maxLength={1000}
                placeholder="Décrivez brièvement votre besoin..."
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-eco transition hover:opacity-90 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === "sent" ? "Envoyé !" : "Envoyer ma demande"}
            </button>
            {status === "sent" && (
              <p className="mt-3 text-center text-sm text-primary">
                Merci ! Nous vous recontactons rapidement.
              </p>
            )}
          </form>
        </div>
      </Section>
    </div>
  );
}

function ContactCard({
  icon, title, text, href, accent,
}: { icon: React.ReactNode; title: string; text: string; href?: string; accent?: boolean }) {
  const inner = (
    <div className={`flex items-start gap-4 rounded-2xl border p-5 transition ${
      accent ? "border-primary bg-primary/5 hover:bg-primary/10" : "border-border bg-card hover:border-primary/40"
    }`}>
      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${accent ? "gradient-eco text-primary-foreground" : "bg-secondary text-primary"}`}>
        {icon}
      </div>
      <div>
        <div className="font-semibold text-foreground">{title}</div>
        <div className="mt-0.5 text-sm text-muted-foreground">{text}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : inner;
}

function Field({
  name, label, placeholder, type = "text", error,
}: { name: string; label: string; placeholder?: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
