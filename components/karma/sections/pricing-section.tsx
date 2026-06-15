"use client"

import { services } from "@/data/services"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

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
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Premium Badge */}
              {service.isPremium && (
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-gold text-black text-xs font-bold px-3 py-1">
                    Премиум
                  </Badge>
                </div>
              )}

              {/* Image */}
              {service.image && (
                <div className="relative w-full h-48 overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              )}

              {/* Content */}
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
                  {service.description}
                </p>

                {/* Price Section */}
                <div className="mb-4 pt-4 border-t border-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gold">
                      {service.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
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
