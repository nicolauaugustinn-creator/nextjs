"use client"

import { services } from "@/data/services"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PricingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Услуги и цены
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите нужный разбор или консультацию
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Premium Badge */}
              {service.isPremium && (
                <div className="absolute -top-3 -right-3">
                  <Badge className="bg-gold text-black text-xs font-bold px-3 py-1">
                    Премиум
                  </Badge>
                </div>
              )}

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {service.description}
                </p>
              </div>

              {/* Price Section */}
              <div className="mb-6 border-t border-border pt-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gold">
                    {service.price}
                  </span>
                  <span className="text-lg text-muted-foreground">
                    €
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                className="w-full bg-gold hover:bg-gold/90 text-black font-semibold rounded-lg transition-colors"
              >
                Записаться
              </Button>
            </div>
          ))}
        </div>

        {/* Info Block */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 text-center">
          <p className="text-muted-foreground">
            Не уверены, что выбрать?
            <Button 
              variant="link" 
              className="text-gold hover:text-gold/80 ml-2"
            >
              Пройдите бесплатный тест
            </Button>
          </p>
        </div>
      </div>
    </section>
  )
}
