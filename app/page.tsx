'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home as HomeIcon, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="border-b border-gold/20 bg-charcoal/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-serif text-2xl text-gold">KARMANUMBERS</h1>
          <Link href="/my-path">
            <Button variant="ghost" size="icon" className="text-gold hover:bg-gold/10 hover:text-gold">
              <HomeIcon className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center space-y-8">
          <h1 className="font-serif text-6xl md:text-7xl text-gold mb-4">
            Karma Numbers
          </h1>
          <p className="text-cream text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover your life path and destiny through the ancient science of numerology
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center flex-wrap">
            <Link href="/dashboard">
              <Button className="bg-gold text-charcoal hover:bg-gold/80 text-lg px-8 py-6">
                Dashboard
              </Button>
            </Link>
            
            <Link href="/(admin)/admin/users">
              <Button variant="outline" className="text-gold border-gold hover:bg-gold/10 text-lg px-8 py-6">
                Admin Panel
              </Button>
            </Link>

            <Link href="/my-path">
              <Button className="bg-gold/20 text-gold border border-gold/50 hover:bg-gold/30 text-lg px-8 py-6 gap-2">
                Explore Main Site
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="border-t border-gold/20 bg-charcoal/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between flex-col sm:flex-row gap-4">
          <p className="text-cream/60 text-sm">© 2026 Karma Numbers. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/my-path">
              <Button variant="ghost" size="sm" className="text-gold hover:bg-gold/10 hover:text-gold gap-2">
                <HomeIcon className="w-4 h-4" />
                Main Site
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-gold hover:bg-gold/10 hover:text-gold">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
