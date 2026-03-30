"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/ui/reveal"

const faqs = [
  {
    question: "¿Sirve si soy principiante?",
    answer: "Sí. De hecho, empezar con supervisión profesional te ahorra meses de ensayo y error, evitando que adquieras malos hábitos técnicos o te lesiones. La curva de aprendizaje se adapta a tu nivel actual."
  },
  {
    question: "¿Y si tengo poco tiempo para entrenar?",
    answer: "El plan se ajusta a tu disponibilidad. Si solo tienes 3 días a la semana durante 45 minutos, estructuraremos la rutina para priorizar los ejercicios que generen el mayor retorno de inversión en ese tiempo."
  },
  {
    question: "¿Necesito estar apuntado a un gimnasio?",
    answer: "No es imprescindible. Si prefieres entrenar en casa, diseñaremos la programación basándonos en el equipamiento que tengas disponible, aunque siempre recomendaremos material mínimo para poder progresar."
  },
  {
    question: "¿Me vais a dar una dieta estricta?",
    answer: "No trabajamos con dietas cerradas de lunes a domingo. Te daremos tus requerimientos nutricionales, ejemplos de comidas, lista de la compra y opciones de intercambio. El objetivo es que aprendas a gestionar tu alimentación a largo plazo."
  },
  {
    question: "¿Cuándo empezaré a notar cambios?",
    answer: "Los cambios en el rendimiento suelen aparecer en las primeras 2 o 3 semanas. Los cambios físicos a nivel visual comienzan a ser evidentes a partir de la semana 4 a 6, siempre que mantengas la adherencia al plan."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Preguntas Frecuentes
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Resolvemos las dudas que frenan tu progreso
            </h2>
          </Reveal>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={0.2 + (index * 0.1)}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-center justify-center text-foreground font-semibold py-6 hover:no-underline hover:text-primary transition-colors relative [&>svg]:absolute [&>svg]:right-0 pr-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-center">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
