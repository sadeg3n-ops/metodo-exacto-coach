"use client"

import { Lock, Target, Apple } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"
import { Tilt } from "@/components/ui/tilt"

const features = [
  {
    icon: Lock,
    title: "Entrenamiento Inteligente",
    subtitle: "El estímulo exacto, sin volumen basura.",
    description: "Diseñamos una programación individualizada basada en tu nivel, objetivos y el material que tengas disponible. Controlamos el volumen, la intensidad y la frecuencia para garantizar la sobrecarga progresiva sin sobreentrenar."
  },
  {
    icon: Target,
    title: "Nutrición Flexible",
    subtitle: "Resultados sin cancelar tu vida social.",
    description: "Calculamos tus requerimientos precisos. En lugar de imponerte un menú restrictivo, te damos pautas, herramientas y equivalencias para que aprendas a cuadrar tus comidas, rindiendo al máximo y reduciendo tu porcentaje de grasa de forma sostenible."
  },
  {
    icon: Apple,
    title: "Seguimiento Técnico y Continuo",
    subtitle: "Ajustes semanales basados en datos.",
    description: "Analizamos tus vídeos para corregir tu técnica y prevenir lesiones. Cada semana revisamos tus métricas, sensaciones y fatiga para ajustar el entrenamiento y la nutrición. Nunca pasarás más de 7 días sin saber exactamente qué hacer."
  }
]

export function SolutionSection() {
  return (
    <section id="resultados" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              La Solución
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Cómo estructuramos tu progreso
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground">
              La solución es un sistema dinámico, no un PDF estandarizado. Construimos un plan basado en tu biomecánica, tus horarios y tu punto de partida. Registramos tus marcas, corregimos tus ejecuciones en vídeo y ajustamos las variables semana a semana para que la constancia sea una consecuencia lógica, no un sacrificio.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-fr">
          {features.map((feature, index) => (
            <Reveal 
              key={index} 
              delay={0.3 + index * 0.15}
              className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
            >
              <Tilt className="h-full">
                <Card 
                  className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
                >
                  <CardContent className={`p-6 md:p-8 flex flex-col items-center text-center justify-center h-full ${index === 0 ? "md:p-12" : ""}`}>
                    <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors ${index === 0 ? "w-20 h-20 mb-8" : ""}`}>
                      <feature.icon className={`text-primary ${index === 0 ? "w-10 h-10" : "w-7 h-7"}`} />
                    </div>
                    <h3 className={`font-semibold text-foreground mb-1 ${index === 0 ? "text-3xl" : "text-xl"}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-primary font-medium mb-3 ${index === 0 ? "text-lg" : "text-sm"}`}>
                      {feature.subtitle}
                    </p>
                    <p className={`text-muted-foreground leading-relaxed ${index === 0 ? "max-w-md mx-auto" : ""}`}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
