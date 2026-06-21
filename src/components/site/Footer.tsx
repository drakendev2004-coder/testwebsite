import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-eco-green-dark text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-flex items-center rounded-2xl bg-white p-3 shadow-eco">
            <img src={logo} alt="GREEN SOLAR ENERGY logo" width={220} height={66} className="h-16 w-auto object-contain" />
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/75">
            Spécialiste de l'installation, la maintenance et le conseil en énergie solaire au Maroc.
            Faites le choix d'une énergie propre, durable et économique.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-eco-yellow">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/" className="hover:text-eco-yellow">Accueil</Link></li>
            <li><Link to="/a-propos" className="hover:text-eco-yellow">À propos</Link></li>
            <li><Link to="/services" className="hover:text-eco-yellow">Services</Link></li>
            <li><Link to="/solutions" className="hover:text-eco-yellow">Solutions</Link></li>
            <li><Link to="/contact" className="hover:text-eco-yellow">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-eco-yellow">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-eco-yellow" /> <a href="tel:+212684226432" className="hover:text-eco-yellow">+212 684-226432</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-eco-yellow" /> <a href="mailto:greensolarenergy010@gmail.com" className="hover:text-eco-yellow break-all">greensolarenergy010@gmail.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-eco-yellow" /> 20 Rue Cadi Ayyad, 1er étage Appt 2, Tanger</li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a href="https://www.instagram.com/green_solar_energy10?igsh=azZzcWZvMm9mcHJx" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground transition hover:bg-eco-yellow hover:text-eco-green-dark">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/greensolar-energy-29a1a9390" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground transition hover:bg-eco-yellow hover:text-eco-green-dark">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/share/14MvumAVf1Q/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground transition hover:bg-eco-yellow hover:text-eco-green-dark">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} GREEN SOLAR ENERGY. Tous droits réservés.</p>
          <p>Énergie solaire au Maroc · Made with sunshine ☀️</p>
        </div>
      </div>
    </footer>
  );
}
