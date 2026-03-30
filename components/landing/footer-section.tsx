"use client"

import { ArrowRight, MapPin, Phone, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterSectionProps {
  onCtaClick: () => void
}

export function FooterSection({ onCtaClick }: FooterSectionProps) {
  const navLinks = [
    { href: "#resultados", label: "Método" },
    { href: "#precio", label: "Programa" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      {/* Final CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Deja de perder tiempo y energía en métodos que{" "}
              <span className="text-primary">no te funcionan.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              El primer paso es analizar tu caso. Evaluaremos tu punto de partida, identificaremos por qué te has estancado hasta ahora y te explicaremos cómo estructurar tu plan para que esta vez sí logres tu objetivo.
            </p>
            <Button 
              onClick={onCtaClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-7 rounded-xl group transition-all hover:scale-105"
            >
              Agendar mi valoración gratuita ahora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Es una llamada de 15 min. Gratis y sin compromiso. Solo abrimos 10 plazas mensuales para asegurar la calidad del soporte.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <div className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Logo & Brand */}
            <div>
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg font-bold text-foreground">
                  Método <span className="text-primary">Exacto</span>
                </span>
              </a>
              <p className="text-muted-foreground text-sm">
                Asesoría online premium en entrenamiento y nutrición individualizada.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navegación</h4>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Online | España</span>
                </div>
                <a 
                  href="https://wa.me/34600000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors group"
                >
                  <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span>+34 600 000 000</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Método Exacto. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
