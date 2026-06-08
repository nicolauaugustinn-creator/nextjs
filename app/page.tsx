'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="font-serif text-5xl text-gold mb-4">
          Karma Numbers
        </h1>
        <p className="text-cream text-xl mb-8 max-w-2xl">
          Discover your life path and destiny through the ancient science of numerology
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/dashboard">
            <Button className="bg-gold text-charcoal hover:bg-gold-light text-lg">
              Dashboard
            </Button>
          </Link>
          
          <Link href="/(admin)/admin/users">
            <Button variant="outline" className="text-gold border-gold hover:bg-gold/10 text-lg">
              Admin Panel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
