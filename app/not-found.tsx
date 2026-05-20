"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, Sparkles } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.1),transparent_70%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-purple-dark/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="relative mb-8">
          <h1 className="text-[10rem] md:text-[14rem] font-serif font-bold leading-none tracking-tighter select-none">
            <span className="bg-gradient-to-b from-gold via-gold/80 to-gold/20 bg-clip-text text-transparent">
              404
            </span>
          </h1>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif text-cream">Pagina nu a fost gasita</h2>
          <p className="text-cream/60 text-lg max-w-md mx-auto">
            Pagina pe care o cauti nu exista sau a fost mutata in alta locatie.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button asChild size="lg" className="bg-gold text-charcoal hover:bg-gold-light">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Inapoi acasa
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-gold/50 text-gold hover:bg-gold/10">
            <Link href="/courses">
              <Search className="mr-2 h-4 w-4" />
              Exploreaza cursuri
            </Link>
          </Button>
        </div>

        {/* Quick links */}
        <div className="mt-16">
          <p className="text-sm text-cream/50 mb-4">Sau viziteaza aceste pagini:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "Cursuri", href: "/courses" },
              { label: "Meditatii", href: "/meditations" },
              { label: "Blog", href: "/blog" },
              { label: "Despre mine", href: "/my-path" },
              { label: "Contact", href: "/consultations" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm rounded-full border border-gold/20 bg-charcoal/50 text-cream/70 hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative icon */}
        <div className="mt-12">
          <Sparkles className="w-8 h-8 text-gold/30 mx-auto" />
        </div>
      </div>
    </main>
  )
}
