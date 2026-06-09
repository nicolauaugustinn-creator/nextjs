import { HeroSection } from "@/components/karma/hero-section"
import { AboutPreview } from "@/components/karma/sections/about-preview"
import { DirectionsSection } from "@/components/karma/sections/directions-section"
import { CoursesPreview } from "@/components/karma/sections/courses-preview"
import { MeditationsPreview } from "@/components/karma/sections/meditations-preview"
import { RetreatPreview } from "@/components/karma/sections/retreat-preview"
import { ReviewsPreview } from "@/components/karma/sections/reviews-preview"
import { FreeTestCTA } from "@/components/karma/sections/free-test-cta"
import { TelegramCTA } from "@/components/karma/sections/telegram-cta"
import { FAQPreview } from "@/components/karma/sections/faq-preview"
import { PWABanner } from "@/components/karma/sections/pwa-banner"

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutPreview />
      <DirectionsSection />
      <CoursesPreview />
      <MeditationsPreview />
      <RetreatPreview />
      <ReviewsPreview />
      <FreeTestCTA />
      <TelegramCTA />
      <FAQPreview />
      <PWABanner />
    </main>
  )
}
