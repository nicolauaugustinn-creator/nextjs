import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-charcoal flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-burgundy flex items-center justify-center">
              <span className="font-serif text-lg text-cream">K</span>
            </div>
            <span className="font-serif text-xl text-cream">KARMANUMBERS</span>
          </Link>
          {children}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032188-LP5BsztskUQgp6KkclUghUGWWuUx1H.jpg"
            alt="KARMANUMBERS"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-md">
            <blockquote className="font-serif text-2xl text-cream/90 italic mb-6">
              &ldquo;Числа — это язык Вселенной. Научитесь его понимать, 
              и вы откроете двери к своему истинному предназначению.&rdquo;
            </blockquote>
            <p className="text-gold">— Валентина Черняк</p>
          </div>
        </div>
      </div>
    </div>
  )
}
