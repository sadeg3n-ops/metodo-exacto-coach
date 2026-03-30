"use client"

import { TrendingDown, Users, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"

const problems = [
  {
    icon: TrendingDown,
    title: "Estancamiento crónico",
    description: "Entrenas sin una progresión clara. Haces rutinas genéricas que no están adaptadas a tu estructura ni a tu nivel, invirtiendo horas sin ver cambios reales en tu cuerpo."
  },
  {
    icon: Users,
    title: "Dietas restrictivas e insostenibles",
    description: "Has probado menús cerrados que te prohíben comer lo que te gusta. Aguantas unas semanas a base de fuerza de voluntad, pero acabas abandonando por ansiedad y falta de energía."
  },
  {
    icon: AlertCircle,
    title: "Entrenar a ciegas y sin seguimiento",
    description: "Nadie te corrige la técnica. Nadie adapta tu plan cuando te estancas o cuando tienes una semana complicada. Estás solo en el proceso, adivinando cuál es el siguiente paso."
  }
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
              ¿Llevas meses entrenando sin que el espejo refleje tu esfuerzo?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-slate-600">
              La mayoría de las personas se estancan no por falta de disciplina, sino por falta de dirección. Hacer cosas al azar genera resultados al azar.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <Card 
                className="bg-slate-50 border-slate-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg group h-full"
              >
                <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                    <problem.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
